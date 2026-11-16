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
