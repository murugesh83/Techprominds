<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1w-aEhs-mXu4IS_Ob-48AWZBEYRm1QLR5

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Demo confirmation emails

Netlify's `submission-created` event sends a plain-text acknowledgement through
Zoho after a `restaurant-demo` submission passes Netlify spam checks. The existing
Netlify support notification remains separate. Customer-entered content is not
copied into the automatic acknowledgement.

Configure these server-only environment variables on the **techprominds** Netlify
project (site ID `07d07aad-f6b9-450b-ba0e-7d7e90a2c6a8`), then redeploy:

- `DEMO_SMTP_USER`: the full Zoho mailbox login owning the support alias.
- `DEMO_SMTP_PASSWORD`: a Zoho app-specific password; enter directly in Netlify,
  never in source control or chat.
- `DEMO_SMTP_HOST`: optional; defaults to `smtppro.zoho.com`, using TLS on port 465.

The mailbox must allow sending as `support@techpromindus.com`. Missing credentials
or SMTP failures are reported in the function log without customer data; the demo
request is still saved and the support notification still runs. The event does
not provide a durable delivery queue; SMTP acceptance does not guarantee inbox
placement, and a retried event can cause a duplicate email.

Run `node --test tests/demo-confirmation.test.mjs`, `npx tsc --noEmit`, and
`npm run build`. Complete a live form test and check the customer mailbox after
configuring credentials. Do not claim email delivery from the form success screen.

## Cloudflare hosting

The Cloudflare Worker `techpro-minds` serves the Vite site and `/api/demo`.
Preview: https://techpro-minds.s-murugesh83.workers.dev

- Run `npm ci`, `npx wrangler d1 migrations apply techpro-minds-inquiries --remote`,
  then `npm run deploy:cloudflare` using the existing Cloudflare account.
- Save `DEMO_SMTP_PASSWORD` as a Worker secret directly in Cloudflare. Never
  commit credentials. SMTP host and mailbox login are configured in wrangler.jsonc.
- The Cloudflare build sets `VITE_DEMO_ENDPOINT=/api/demo` and removes Netlify's
  incompatible `_redirects` from build output. Standard builds retain Netlify
  form handling for rollback.
- D1 stores inquiries before attempting email. Support notifications and branded
  customer confirmations are tracked separately. A scheduled job retries pending
  deliveries every ten minutes, up to five attempts. Review incomplete records
  in D1 and Worker logs; SMTP acceptance alone does not guarantee inbox placement.
- Delivery uses hostname-based TLS sockets to Zoho; certificate validation stays
  enabled. Request IDs, a honeypot, origin checks and IP/email limits reduce abuse.
- Preserve Zoho MX, SPF, verification and DKIM records when changing DNS. Switch
  custom domains only after preview tests pass. Keep Netlify available during
  the migration; do not cancel domain renewal or email hosting.

Migration status (2026-11-16): preview deployed; support and customer messages
accepted by Zoho and customer confirmation verified in Gmail Inbox. Custom domain
activation is still pending. Cloudflare assigned nameservers:
`novalee.ns.cloudflare.com` and `yichun.ns.cloudflare.com`.
