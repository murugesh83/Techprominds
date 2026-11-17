import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Pricing from './Pricing';
import ProductCatalog from './ProductCatalog';
import Apps from './Apps';
import { HowItWorks, RestaurantWork, Contact } from './Features';
import { PRODUCT_GROUPS } from './restaurantProducts';

export function Page({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <div className="restaurant-home dedicated-page"><section className="page-intro restaurant-wrap"><p className="eyebrow">TECHPRO MINDS / {title.toUpperCase()}</p><h1>{title}</h1><p>{intro}</p></section>{children}</div>;
}
export const PricingPage = () => <div className="restaurant-home pricing-page"><Pricing /></div>;
export const ProcessPage = () => <Page title="How it works" intro="A personal setup, a thoughtful launch, and a team to help you keep things running."><HowItWorks /><Contact /></Page>;
export const ProductsPage = () => <Page title="Tools for your restaurant" intro="Explore our services and see which options are available, planned or being explored."><ProductCatalog /></Page>;
export const WorkPage = () => <Page title="Our restaurant work" intro="See a real website built by Techpro Minds, then imagine what we could create for your restaurant."><RestaurantWork /><Contact /></Page>;
export const AppsPage = () => <Page title="Our apps" intro="Explore the Techpro Minds app collection."><Apps /></Page>;
export const ContactPage = () => <Page title="Let’s talk" intro="Tell us about your restaurant, your current setup and what you’d like to improve."><Contact /></Page>;

const productDetails: Record<string, [string, string][]> = {
  'restaurant-website': [['Made for mobile', 'Photos, hours, directions and contact details that are easy to find on a phone.'], ['Your restaurant, your identity', 'A website built around your menu, brand and the way you serve guests.'], ['A clear next step', 'Help visitors browse your menu, find your location or start an order.']],
  'restaurant-seo': [['Search-friendly pages', 'Planned work on page titles, descriptions and useful restaurant information.'], ['Local relevance', 'Content focused on your location, cuisine and the questions customers ask.'], ['Realistic expectations', 'This service is planned. Search positions and traffic improvements cannot be guaranteed.']],
  'reviews': [['Make feedback easy', 'Planned review links and QR codes for customers to share honest feedback.'], ['Stay in control', 'Owner-approved response drafts before anything is published.']],
  'listings': [['Consistent details', 'Planned updates to hours, address and contact information across supported listings.'], ['Restaurant approval', 'Review the listing details and account access needed before changes are made.']],
  'online-menu': [['Easy to browse', 'Organized categories, item names and prices for hungry customers.'], ['Keep it current', 'Update prices and availability as your menu changes.']],
  'online-ordering': [['Direct pickup orders', 'Give customers a checkout experience connected to your restaurant website.'], ['Payments and tracking', 'Online payment and order status, configured and tested for your setup.'], ['Kitchen compatibility', 'Supported Clover printing requires a compatibility review before launch.']],
  'pos-integrations': [['Check your setup first', 'We review your Clover hardware and account before confirming supported order printing.'], ['Test the workflow', 'Validate how orders reach the kitchen before going live. Other POS systems need a separate assessment.']],
  'branded-app': [['Your brand on a phone', 'An app concept for customers to return to your restaurant and browse or order.'], ['Exploring the possibilities', 'This is a future option. Features, pricing and launch timing are not yet committed.']],
  'dashboard': [['Orders in one place', 'A staff workspace for viewing and managing incoming orders.'], ['Built for daily use', 'Review daily activity and keep your team informed during service.']],
  'maintenance': [['Keep your website fresh', 'Menu changes and promotions within your agreed monthly update allowance.'], ['Ongoing care', 'Backups and monitoring, with support hours and scope agreed before launch.']],
  'pos': [['A future possibility', 'We are exploring a full point-of-sale offering for restaurant operations.'], ['Your current POS stays essential', 'Our current website and ordering services do not replace your existing point-of-sale system.']],
  'ai-assistant': [['Helpful summaries', 'An assistant concept for restaurant summaries and suggested actions.'], ['You stay in charge', 'Restaurant approval would be required before operational changes. Availability is not yet committed.']],
};

export function ProductPage() {
  const { slug } = useParams();
  const product = PRODUCT_GROUPS.flatMap(group => group.products).find(item => item.id === slug);
  if (!product) return <Navigate to="/products" replace />;
  const future = ['Planned', 'Exploring'].includes(product.status);
  return <div className="restaurant-home dedicated-page">
    <section className="restaurant-wrap product-page-hero">
      <div><Link className="text-link" to="/products">← All products</Link><p className="eyebrow product-page-status">{product.status}</p><h1>{product.name}</h1><p className="product-page-description">{product.description}</p><div className="restaurant-actions"><Link to="/demo" className="restaurant-button">{future ? 'Discuss your needs' : 'Get a demo'} ↗</Link><Link to="/pricing" className="text-link">View packages ↗</Link></div>{future && <p className="product-availability">This is a future option and is not currently available or included in our launch packages.</p>}</div>
      <aside className="product-page-visual"><span className="material-symbols-outlined" aria-hidden="true">{product.icon}</span><p>BUILT AROUND YOUR RESTAURANT</p><strong>Your brand.<br />Your team.<br />Your next step.</strong><span className="product-visual-status">{product.status === 'Available' ? 'Personal setup. Ongoing care.' : `${product.status} · Let’s explore the right fit.`}</span></aside>
    </section>
    <section className="restaurant-section product-page-details"><div className="restaurant-wrap"><h2>{future ? 'What we’re exploring' : 'What to expect'}</h2><div className="process-grid">{productDetails[product.id].map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <Contact />
  </div>;
}
