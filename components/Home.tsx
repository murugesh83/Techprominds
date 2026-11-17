import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Services from './Services';
import { RestaurantWork, Contact } from './Features';
import './restaurant.css';
export default function Home() {
  return <div className="restaurant-home">
    <Hero />
    <div className="restaurant-intro-bar">YOUR BRAND <span>✳</span> YOUR MENU <span>✳</span> YOUR DIRECT ORDERING <span>✳</span> OUR ONGOING SUPPORT</div>
    <Services />
    <section className="restaurant-section"><div className="restaurant-wrap"><div className="section-heading"><p className="eyebrow">YOUR NEXT STEP</p><h2>Find the right fit<br /><em>for your restaurant.</em></h2></div><div className="page-links">
      <Link to="/products"><span>01 / PRODUCTS</span><h3>Explore your tools.</h3><p>Websites, menus, ordering and ongoing care.</p><b>Explore products ↗</b></Link>
      <Link to="/pricing"><span>02 / PRICING</span><h3>A clear starting point.</h3><p>Compare setup packages and monthly support.</p><b>View pricing ↗</b></Link>
      <Link to="/how-it-works"><span>03 / OUR PROCESS</span><h3>From idea to launch.</h3><p>See how we build and manage your website.</p><b>How it works ↗</b></Link>
    </div></div></section>
    <RestaurantWork /><Contact />
  </div>;
}
