import test from 'node:test';
import assert from 'node:assert/strict';
import { confirmationMessage, sendConfirmation } from '../server/demo-confirmation.mjs';

const submission = { id: 'test-submission', form_name: 'restaurant-demo', data: {
  email: 'customer@example.com', name: '<script>bad</script>', needs: 'https://untrusted.example',
} };

test('addresses the customer, with fixed content and support reply address', () => {
  const message = confirmationMessage(submission);
  assert.equal(message.to.address, 'customer@example.com');
  assert.equal(message.from.address, 'support@techpromindus.com');
  assert.equal(message.replyTo, 'support@techpromindus.com');
  assert.match(message.text, /demo is not scheduled yet/);
  assert.doesNotMatch(message.text, /<script>|untrusted/);
  assert.doesNotMatch(message.html, /<script>|untrusted/);
  assert.match(message.html, /https:\/\/techpromindus.com\//);
  assert.match(message.html, /cid:techprominds-logo@techpromindus.com/);
  assert.equal(message.attachments[0].cid, 'techprominds-logo@techpromindus.com');
  assert.equal(Buffer.from(message.attachments[0].content, 'base64').subarray(1, 4).toString(), 'PNG');
  assert.equal(message.messageId, confirmationMessage(submission).messageId);
});

test('ignores other forms, bots, malformed addresses and extra recipients', () => {
  assert.equal(confirmationMessage({ ...submission, form_name: 'other' }), null);
  assert.equal(confirmationMessage({ ...submission, data: { ...submission.data, 'bot-field': 'bot' } }), null);
  for (const email of [undefined, 'invalid', 'a@example.com,b@example.com', 'a@example.com\r\nBcc: b@example.com', 'Name <a@example.com>']) {
    assert.equal(confirmationMessage({ ...submission, data: { email } }), null);
  }
});

test('requires credentials before attempting delivery', async () => {
  await assert.rejects(sendConfirmation(submission, {}, () => assert.fail('must not connect')), /not configured/);
});

test('uses authenticated TLS and reports SMTP acceptance', async () => {
  let closed = false;
  const result = await sendConfirmation(submission, { DEMO_SMTP_USER: 'user', DEMO_SMTP_PASSWORD: 'secret' }, options => {
    assert.equal(options.secure, true);
    assert.equal(options.port, 465);
    assert.equal(options.auth.user, 'user');
    return { sendMail: async message => ({ accepted: [message.to.address], rejected: [] }), close: () => { closed = true; } };
  });
  assert.deepEqual(result, { sent: true });
  assert.equal(closed, true);
});

test('delivery failures do not leak credentials or falsely report success', async () => {
  const env = { DEMO_SMTP_USER: 'user', DEMO_SMTP_PASSWORD: 'private-secret' };
  await assert.rejects(sendConfirmation(submission, env, () => ({
    sendMail: async () => { throw new Error('private-secret'); }, close() {},
  })), error => error.message.includes('delivery failed') && !error.message.includes('private-secret'));
  await assert.rejects(sendConfirmation(submission, env, () => ({
    sendMail: async () => ({ accepted: [], rejected: ['customer@example.com'] }), close() {},
  })), /delivery failed/);
});
