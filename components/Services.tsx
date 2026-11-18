import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_GROUPS } from './restaurantProducts';
export default function Services() {
  return <section className="restaurant-section" id="services"><div className="restaurant-wrap">
    <div className="section-heading"><p className="eyebrow">PRACTICAL SOLUTIONS. ONE TEAM.</p><h2>The essentials,<br /><em>working together.</em></h2><p>Websites, mobile apps, IT guidance and Clover POS services. We help you choose, build and manage the tools your business needs.</p></div>
    <div className="restaurant-services">{PRODUCT_GROUPS[0].products.map((service, index) => <article className="restaurant-service" key={service.id}>
      <div className="service-top"><span className="material-symbols-outlined" aria-hidden="true">{service.icon}</span><span>0{index + 1}</span></div>
      <h3>{service.name}</h3><p>{service.description}</p><Link className="service-link" to={`/products/${service.id}`}>View service <span aria-hidden="true">↗</span></Link>
    </article>)}</div>
    <p className="service-scope">Clover services depend on your hardware, account and supported integrations. Hardware, processing fees and third-party subscriptions are quoted separately.</p>
  </div></section>;
}
