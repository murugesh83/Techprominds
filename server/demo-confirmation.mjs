import nodemailer from 'nodemailer';
import { confirmationHtml, logoBase64 } from './demo-email-design.mjs';
import { createHash } from 'node:crypto';

const SUPPORT = 'support@techpromindus.com';

// Keep the acknowledgement fixed: never echo untrusted inquiry text or links.
export function confirmationMessage(payload) {
  if (payload?.form_name !== 'restaurant-demo' || payload?.data?.['bot-field']) return null;
  const email = payload.data?.email;
  if (typeof email !== 'string' || email.length > 254 ||
      !/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?)+$/i.test(email)) return null;
  const text = `Thank you for requesting a demo with Techpro Minds!\n\nWe've received your request. Our team will review your needs and contact you to arrange a personal walkthrough of our restaurant website and direct ordering services.\n\nYour demo is not scheduled yet. We'll agree on a convenient time with you.\n\nHave a question or want to add anything? Reply to this email or contact ${SUPPORT}.\n\nTechpro Minds LLC\nPhiladelphia, PA\nhttps://techpromindus.com/\n\nIf you didn't submit this request, you can ignore this email.`;
  return {
    from: { name: 'Techpro Minds', address: SUPPORT },
    to: { address: email },
    replyTo: SUPPORT,
    subject: 'We received your demo request — Techpro Minds',
    text,
    html: confirmationHtml,
    attachments: [{ filename: 'techprominds-logo.png', content: logoBase64, encoding: 'base64', contentType: 'image/png', cid: 'techprominds-logo@techpromindus.com', contentDisposition: 'inline' }],
    headers: { 'Auto-Submitted': 'auto-generated', 'X-Auto-Response-Suppress': 'All' },
    ...(payload.id ? { messageId: `<demo-${createHash('sha256').update(String(payload.id)).digest('hex')}@techpromindus.com>` } : {}),
  };
}

export async function sendConfirmation(payload, env = process.env, makeTransport = nodemailer.createTransport) {
  const message = confirmationMessage(payload);
  if (!message) return { skipped: true };
  if (!env.DEMO_SMTP_USER || !env.DEMO_SMTP_PASSWORD) {
    throw new Error('Demo confirmation email is not configured: add DEMO_SMTP_USER and DEMO_SMTP_PASSWORD in Netlify.');
  }
  const transport = makeTransport({
    host: env.DEMO_SMTP_HOST || 'smtppro.zoho.com',
    port: 465,
    secure: true,
    auth: { user: env.DEMO_SMTP_USER, pass: env.DEMO_SMTP_PASSWORD },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
  try {
    const result = await transport.sendMail(message);
    if (!result.accepted?.length || result.rejected?.length) throw new Error('Recipient was not accepted');
    return { sent: true };
  } catch (error) {
    const safeCode = ['EAUTH', 'EENVELOPE', 'ECONNECTION', 'ETIMEDOUT', 'ESOCKET', 'EMESSAGE'].includes(error?.code) ? error.code : 'UNKNOWN';
    const status = Number.isInteger(error?.responseCode) ? error.responseCode : 0;
    // Do not log customer data, SMTP credentials, or provider error details.
    throw new Error(`Demo confirmation delivery failed (${safeCode}, SMTP ${status}). Check Zoho credentials and sender alias.`);
  } finally {
    transport.close();
  }
}
