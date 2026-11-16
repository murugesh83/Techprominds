import { sendConfirmation } from '../../server/demo-confirmation.mjs';

// Netlify invokes this event function only for verified submissions and validates
// the platform signature. Never expose customer email sending as a browser API.
export default async (request) => {
  const { payload } = await request.json();
  await sendConfirmation(payload);
  return new Response(null, { status: 204 });
};
