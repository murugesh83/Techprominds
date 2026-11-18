import React from 'react';

export const DEMO_EMAIL = '/demo';

const Hero: React.FC = () => (
  <section className="restaurant-hero">
    <div className="restaurant-wrap hero-layout">
      <div>
        <p className="eyebrow"><span /> TECHNOLOGY FOR YOUR BUSINESS</p>
        <h1>Websites. Apps.<br />Business systems.<br /><em>Made to work for you.</em></h1>
        <p className="hero-description">Software expertise. Practical solutions. Personal support.</p>
        <p className="hero-detail">From websites and mobile apps to IT consulting and Clover POS setup, we help you turn ideas into useful tools and keep your business moving.</p>
        <div className="restaurant-actions"><a className="restaurant-button" href={DEMO_EMAIL}>Discuss your project <span aria-hidden="true">↗</span></a><a className="text-link" href="/restaurant-work">See our work <span aria-hidden="true">↗</span></a></div>
        <p className="hero-note">Clear scope. Careful setup. Ongoing support.</p>
      </div>
      <div className="product-scene" aria-label="Illustrative restaurant website and order management preview">
        <div className="scene-orbit" />
        <div className="restaurant-browser">
          <div className="browser-top"><span>● ● ●</span><span>YOUR RESTAURANT, ONLINE</span><span>↗</span></div>
          <div className="sample-nav"><strong>THE LOCAL TABLE<span>FRESH FOOD. GOOD COMPANY.</span></strong><span>Menu &nbsp; Our story</span></div>
          <div className="sample-cover"><span className="sample-label">MADE FRESH. MADE FOR YOU.</span><h2>Your next<br />favorite meal.</h2><span className="sample-order">Explore the menu ↗</span><div className="food-photo"><img src="/images/restaurant-food-spread.jpg" alt="American burger and fries, Italian pizza and pasta, and Indian biryani, curry and naan" width="900" height="900" /></div></div>
          <div className="sample-menu"><span>Good food. Just a few taps away.</span><div><span>Browse the menu</span><span>Choose pickup</span><span>Enjoy your meal</span></div></div>
        </div>
        <div className="order-ticket"><span className="ticket-icon material-symbols-outlined" aria-hidden="true">check_circle</span><div><strong>A new order. Ready for your kitchen.</strong><p>Paid online · Pickup · Order tracking</p></div></div>
        <div className="scene-caption">WEBSITE + DIRECT ORDERING <span>Illustrative preview</span></div>
      </div>
    </div>
  </section>
);
export default Hero;
