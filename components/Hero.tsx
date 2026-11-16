import React from 'react';

export const DEMO_EMAIL = 'mailto:support@techpromindus.com?subject=Restaurant%20website%20demo';

const Hero: React.FC = () => (
  <section className="restaurant-hero">
    <div className="restaurant-wrap hero-layout">
      <div>
        <p className="eyebrow"><span /> BUILT FOR INDEPENDENT RESTAURANTS</p>
        <h1>Your food.<br />Your brand.<br /><em>Your online orders.</em></h1>
        <p className="hero-description">We build and manage your restaurant’s website and direct ordering.</p>
        <p className="hero-detail">A beautiful website, a menu that’s easy to browse, and a simpler path from hungry customer to kitchen. With a real team to keep it all running.</p>
        <div className="restaurant-actions"><a className="restaurant-button" href={DEMO_EMAIL}>Let’s talk about your restaurant <span aria-hidden="true">↗</span></a><a className="text-link" href="#restaurant-work">See our work <span aria-hidden="true">↗</span></a></div>
        <p className="hero-note">Personal setup. Ongoing care. Your own brand.</p>
      </div>
      <div className="product-scene" aria-label="Illustrative restaurant website and order management preview">
        <div className="scene-orbit" />
        <div className="restaurant-browser">
          <div className="browser-top"><span>● ● ●</span><span>YOUR RESTAURANT, ONLINE</span><span>↗</span></div>
          <div className="sample-nav"><strong>THE LOCAL TABLE<span>FRESH FOOD. GOOD COMPANY.</span></strong><span>Menu &nbsp; Our story</span></div>
          <div className="sample-cover"><span className="sample-label">MADE FRESH. MADE FOR YOU.</span><h2>Your next<br />favorite meal.</h2><span className="sample-order">Explore the menu ↗</span><div className="food-art" aria-hidden="true"><div className="plate"><i /><i /><i /><i /><i /><i /><b /></div></div></div>
          <div className="sample-menu"><span>Good food. Just a few taps away.</span><div><span>Browse the menu</span><span>Choose pickup</span><span>Enjoy your meal</span></div></div>
        </div>
        <div className="order-ticket"><span className="ticket-icon material-symbols-outlined" aria-hidden="true">check_circle</span><div><strong>A new order. Ready for your kitchen.</strong><p>Paid online · Pickup · Order tracking</p></div></div>
        <div className="scene-caption">WEBSITE + DIRECT ORDERING <span>Illustrative preview</span></div>
      </div>
    </div>
  </section>
);
export default Hero;
