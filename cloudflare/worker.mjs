import nodemailer from 'nodemailer';
import { connect } from 'node:tls';
import { confirmationMessage } from '../server/demo-confirmation.mjs';

const SUPPORT = 'support@techpromindus.com';
const json = (data, status = 200) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
export function validateInquiry(data) {
  const limits = { name: 100, restaurant: 150, email: 254, phone: 40, needs: 3000 };
  const result = {};
  for (const [key, max] of Object.entries(limits)) {
    const value = data.get(key);
    if (value !== null && typeof value !== 'string') return null;
    result[key] = (value || '').trim();
    if (result[key].length > max || (key !== 'phone' && !result[key])) return null;
  }
  if (!confirmationMessage({ form_name: 'restaurant-demo', data: result })) return null;
  result.email = result.email.toLowerCase();
  return result;
}
async function digest(value) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return [...new Uint8Array(bytes)].map(x => x.toString(16).padStart(2, '0')).join('');
}
async function limited(env, key, maximum, seconds) {
  const now = Math.floor(Date.now() / 1000);
  const row = await env.DB.prepare(`INSERT INTO rate_limits(key,count,expires_at) VALUES(?,1,?)
    ON CONFLICT(key) DO UPDATE SET count=CASE WHEN expires_at <= ? THEN 1 ELSE count+1 END,
    expires_at=CASE WHEN expires_at <= ? THEN excluded.expires_at ELSE expires_at END RETURNING count`)
    .bind(key, now + seconds, now, now).first();
  return row.count > maximum;
}
export async function deliver(env, row) {
  const now = Math.floor(Date.now() / 1000);
  const claimed = await env.DB.prepare('UPDATE inquiries SET lease_until=?, attempts=attempts+1 WHERE id=? AND lease_until < ? AND attempts < 5 RETURNING *')
    .bind(now + 120, row.id, now).first();
  if (!claimed) return;
  const transport = nodemailer.createTransport({
    host: env.DEMO_SMTP_HOST, port: 465, secure: true,
    // Connect by hostname: Workers cannot reliably dial Nodemailer's resolved IP.
    // TLS still verifies Zoho's certificate using its hostname.
    getSocket(options, callback) {
      const socket = connect({ host: env.DEMO_SMTP_HOST, port: 465, servername: env.DEMO_SMTP_HOST });
      const timer = setTimeout(() => socket.destroy(new Error('SMTP connection timed out')), 10000);
      const fail = error => { clearTimeout(timer); callback(error); };
      socket.once('error', fail);
      socket.once('secureConnect', () => { clearTimeout(timer); socket.removeListener('error', fail); callback(null, { connection: socket, secured: true }); });
    },
    auth: { user: env.DEMO_SMTP_USER, pass: env.DEMO_SMTP_PASSWORD },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
  });
  const send = async message => {
    const result = await transport.sendMail(message);
    if (!result.accepted?.length || result.rejected?.length) throw new Error('Mail rejected');
  };
  try {
    if (!claimed.support_sent) {
      await send({ from: { name: 'Techpro Minds', address: SUPPORT }, to: SUPPORT,
        replyTo: claimed.email, subject: 'New restaurant demo request — Techpro Minds',
        messageId: `<inquiry-${claimed.id}@techpromindus.com>`,
        text: `A new restaurant demo request was submitted.\n\nName: ${claimed.name}\nRestaurant: ${claimed.restaurant}\nEmail: ${claimed.email}\nPhone: ${claimed.phone || 'Not provided'}\n\nRequest:\n${claimed.needs}\n\nReference: ${claimed.id}` });
      await env.DB.prepare('UPDATE inquiries SET support_sent=1 WHERE id=?').bind(claimed.id).run();
    }
    if (!claimed.confirmation_sent) {
      await send(confirmationMessage({ id: claimed.id, form_name: 'restaurant-demo', data: { email: claimed.email } }));
      await env.DB.prepare('UPDATE inquiries SET confirmation_sent=1 WHERE id=?').bind(claimed.id).run();
    }
  } catch (error) {
    const code = /^[A-Z_0-9]+$/.test(error?.code || '') ? error.code : 'UNKNOWN';
    console.error('Demo email delivery incomplete; stored request will be retried.', { code, responseCode: Number(error?.responseCode) || 0 });
  } finally {
    transport.close();
    await env.DB.prepare('UPDATE inquiries SET lease_until=0 WHERE id=?').bind(claimed.id).run();
  }
}
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/demo') return json({ error: 'Not found' }, 404);
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
    if (request.headers.get('Origin') !== url.origin) return json({ error: 'Invalid origin' }, 403);
    if (!env.DEMO_SMTP_PASSWORD) return json({ error: 'Form temporarily unavailable. Please email support@techpromindus.com.' }, 503);
    if (!request.headers.get('Content-Type')?.startsWith('application/x-www-form-urlencoded')) return json({ error: 'Unsupported content type' }, 415);
    const body = await request.text();
    if (body.length > 16000) return json({ error: 'Request too large' }, 413);
    const data = new URLSearchParams(body);
    if (data.get('bot-field')) return json({ received: true });
    const inquiry = validateInquiry(data);
    if (!inquiry) return json({ error: 'Please check your details' }, 400);
    const requestId = data.get('request-id');
    if (!requestId || !/^[a-f0-9-]{36}$/i.test(requestId)) return json({ error: 'Invalid request identifier' }, 400);
    const existing = await env.DB.prepare('SELECT id FROM inquiries WHERE id=?').bind(requestId).first();
    if (existing) return json({ received: true });
    const ipKey = await digest(request.headers.get('CF-Connecting-IP') || 'unknown');
    const emailKey = await digest(inquiry.email);
    if (await limited(env, 'ip:'+ipKey, 5, 600) || await limited(env, 'email:'+emailKey, 2, 3600)) return json({ error: 'Please wait before trying again' }, 429);
    const now = Math.floor(Date.now() / 1000);
    await env.DB.prepare('INSERT INTO inquiries(id,name,restaurant,email,phone,needs,created_at) VALUES(?,?,?,?,?,?,?)')
      .bind(requestId, inquiry.name, inquiry.restaurant, inquiry.email, inquiry.phone, inquiry.needs, now).run();
    ctx.waitUntil(deliver(env, { id: requestId }));
    return json({ received: true }, 201);
  },
  async scheduled(event, env, ctx) {
    if (!env.DEMO_SMTP_PASSWORD) return;
    const { results } = await env.DB.prepare('SELECT id FROM inquiries WHERE (support_sent=0 OR confirmation_sent=0) AND attempts<5 AND lease_until < ? ORDER BY created_at LIMIT 10')
      .bind(Math.floor(Date.now()/1000)).all();
    for (const row of results) await deliver(env, row);
    await env.DB.prepare('DELETE FROM rate_limits WHERE expires_at < ?').bind(Math.floor(Date.now()/1000)).run();
  },
};
