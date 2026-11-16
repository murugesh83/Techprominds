import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DemoRequest() {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === 'sending') return;
    const data = new FormData(event.currentTarget);
    setState('sending');
    try {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') throw new Error('Use the hosted form to submit.');
      const response = await fetch('/', {
        method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Array.from(data.entries()).map(([key, value]) => [key, String(value)])).toString(),
      });
      if (!response.ok) throw new Error('Submission failed');
      setState('success');
    } catch { setState('error'); }
  }
  return <div className="restaurant-home"><section className="restaurant-section demo-section"><div className="restaurant-wrap demo-layout">
    <div><p className="eyebrow">LET’S TALK ABOUT YOUR RESTAURANT</p><h1>Your next chapter<br /><em>starts here.</em></h1><p className="hero-description">See how your website and direct ordering could work together.</p><p className="hero-detail">Tell us a little about your restaurant. We’ll review your needs and contact you to arrange a personal walkthrough.</p><ul className="demo-benefits"><li>Explore a restaurant website example</li><li>Discuss your menu and ordering workflow</li><li>Find the right setup and monthly care package</li></ul><p>Prefer email? <a className="text-link" href="mailto:support@techpromindus.com">support@techpromindus.com</a></p></div>
    <div className="demo-form-card">{state === 'success' ? <div role="status" className="demo-success"><span className="material-symbols-outlined" aria-hidden="true">check_circle</span><h2>Request received.</h2><p>Thank you for reaching out. Techpro Mind will contact you using the details you provided to arrange your demo.</p><Link to="/" className="restaurant-button">Back to the website ↗</Link></div> : <><h2>Request your demo</h2><p>Fields marked * are required.</p><form name="restaurant-demo" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit}>
      <input type="hidden" name="form-name" value="restaurant-demo" />
      <div hidden><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
      <label htmlFor="demo-name">Your name *</label><input id="demo-name" name="name" autoComplete="name" required maxLength={100} />
      <label htmlFor="demo-restaurant">Restaurant name *</label><input id="demo-restaurant" name="restaurant" autoComplete="organization" required maxLength={150} />
      <label htmlFor="demo-email">Email address *</label><input id="demo-email" name="email" type="email" autoComplete="email" required maxLength={254} />
      <label htmlFor="demo-phone">Phone number <span>(optional)</span></label><input id="demo-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
      <label htmlFor="demo-needs">What can we help with? *</label><textarea id="demo-needs" name="needs" required maxLength={3000} rows={4} placeholder="A new website, pickup ordering, menu updates…" />
      <p className="demo-privacy">We’ll use these details to respond to your inquiry. <Link to="/privacypolicy">Privacy policy</Link>.</p>
      {state === 'error' && <p role="alert" className="demo-error">Your request could not be sent. Please try again on our live website or email <a href="mailto:support@techpromindus.com">support@techpromindus.com</a>. Your entries are still here.</p>}
      <button className="restaurant-button" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Request a demo ↗'}</button>
    </form></>}</div>
  </div></section></div>;
}
