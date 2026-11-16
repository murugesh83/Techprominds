import test from 'node:test';
import assert from 'node:assert/strict';
import worker, { validateInquiry } from '../cloudflare/worker.mjs';
const good = { name: 'Test', restaurant: 'Test Restaurant', email: 'customer@example.com', needs: 'Website demo' };
test('validates required inquiry details and rejects oversized values and email header injection', () => {
  assert.equal(validateInquiry(new URLSearchParams(good)).phone, '');
  for (const bad of [{name:''},{restaurant:'x'.repeat(151)},{email:'bad@example.com\r\nBcc:other@example.com'},{needs:'x'.repeat(3001)}]) {
    assert.equal(validateInquiry(new URLSearchParams({...good,...bad})), null);
  }
});
test('rejects cross-origin requests, wrong methods, and unavailable mail configuration', async () => {
  const make = (method, origin) => new Request('https://example.com/api/demo', {method, headers:{Origin:origin}});
  assert.equal((await worker.fetch(make('POST','https://bad.example'),{},{})).status,403);
  assert.equal((await worker.fetch(make('GET','https://example.com'),{},{})).status,405);
  assert.equal((await worker.fetch(make('POST','https://example.com'),{},{})).status,503);
});
test('honeypot never stores or emails and invalid request identifiers are rejected', async () => {
  const env={DEMO_SMTP_PASSWORD:'test',DB:{prepare(){assert.fail('must not access database')}}};
  const make = data => new Request('https://example.com/api/demo',{method:'POST',headers:{Origin:'https://example.com','Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(data)});
  assert.equal((await worker.fetch(make({'bot-field':'bot'}),env,{})).status,200);
  assert.equal((await worker.fetch(make(good),env,{})).status,400);
});
