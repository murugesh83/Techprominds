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
export const ProductsPage = () => <Page title="Our services" intro="Websites, mobile apps, IT consulting and Clover POS services. Practical support built around your business."><ProductCatalog /></Page>;
export const WorkPage = () => <Page title="Our restaurant work" intro="See a real website built by Techpro Minds, then imagine what we could create for your restaurant."><RestaurantWork /><Contact /></Page>;
export const AppsPage = () => <Page title="Our apps" intro="Explore the Techpro Minds app collection."><Apps /></Page>;
export const ContactPage = () => <Page title="Let’s talk" intro="Tell us about your business, your idea and what you’d like to improve."><Contact /></Page>;

const productDetails: Record<string, [string, string][]> = {
  'software-it-consulting': [['Understand your needs', 'Review your current software, workflows and goals to identify where technology can help.'], ['Plan the right solution', 'Get practical recommendations for software choices, integrations and implementation priorities, with scope and costs agreed upfront.'], ['Support implementation', 'Work with us on the agreed improvements, technical troubleshooting and handover to your team.']],
  'mobile-app-development': [['Shape your idea', 'Define the audience, core features and target platforms before development begins.'], ['Design & build', 'Create a clear user experience and develop the agreed features, with regular reviews along the way.'], ['Test & launch', 'Test on agreed devices and support store submission. Store approval, developer account fees and ongoing maintenance are scoped separately.']],
  'restaurant-website': [['Design & launch', 'Mobile-friendly pages, your food photos, hours, directions and a clear digital menu.'], ['Search essentials', 'Useful restaurant content, page titles and local information. Search rankings are not guaranteed.'], ['Monthly management', 'Menu and price updates, backups and monitoring within your agreed support plan.']],
  'pos': [['Review your setup', 'Confirm Clover devices, account access, network requirements and the installation location.'], ['Configure & test', 'Set up the agreed menu and device workflow, then check the everyday tasks your staff will use.'], ['Staff handover', 'Walk your team through the setup and agree on support. Hardware purchases, merchant approval and Clover subscriptions are separate.']],
  'clover-printing': [['Check compatibility', 'Review printer models, connectivity and the source of incoming orders.'], ['Set up order tickets', 'Configure the supported printing workflow for your restaurant and kitchen.'], ['Test before service', 'Check sample orders and ticket details, and explain what to do if printing is interrupted.']],
  'pos-integrations': [['Agree on the connection', 'Review your POS and website requirements. Confirm supported features and any third-party costs before quoting.'], ['Build the ordering workflow', 'Set up the agreed checkout and order handoff. Menu sync, payment sync and printer routing are included only when explicitly supported and agreed.'], ['Launch with confidence', 'Test the order journey with your team before going live. Other POS brands require a separate assessment.']],
};
const legacyServices: Record<string, string> = {
  'maintenance': 'restaurant-website', 'restaurant-seo': 'restaurant-website', 'online-menu': 'restaurant-website',
  'online-ordering': 'pos-integrations', 'dashboard': 'pos-integrations',
};

export function ProductPage() {
  const { slug } = useParams();
  if (slug && legacyServices[slug]) return <Navigate to={`/products/${legacyServices[slug]}`} replace />;
  const product = PRODUCT_GROUPS.flatMap(group => group.products).find(item => item.id === slug);
  if (!product) return <Navigate to="/products" replace />;
  const businessService = ['software-it-consulting', 'mobile-app-development'].includes(product.id);
  return <div className="restaurant-home dedicated-page">
    <section className="restaurant-wrap product-page-hero">
      <div><h1>{product.name}</h1><p className="product-page-description">{product.description}</p><div className="restaurant-actions"><Link to="/demo" className="restaurant-button">Discuss your project ↗</Link>{!businessService && <Link to="/pricing" className="text-link">View packages ↗</Link>}</div></div>
      <aside className="product-page-visual"><span className="material-symbols-outlined" aria-hidden="true">{product.icon}</span><p>{businessService ? "BUILT AROUND YOUR BUSINESS" : "BUILT AROUND YOUR RESTAURANT"}</p><strong>{businessService ? <>Your idea.<br />Your goals.<br />Our expertise.</> : <>Your website.<br />Your counter.<br />Your kitchen.</>}</strong><span className="product-visual-status">{product.status === 'Available' ? 'Personal setup. Ongoing care.' : 'Compatibility reviewed before setup.'}</span></aside>
    </section>
    <section className="restaurant-section product-page-details"><div className="restaurant-wrap"><h2>What to expect</h2><div className="process-grid">{productDetails[product.id].map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <Contact />
  </div>;
}
