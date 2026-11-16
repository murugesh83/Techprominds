import React from 'react';

const services = [
  { icon: 'web', number: '01', title: 'A website that feels like your restaurant.', description: 'Mobile-friendly pages with your photos, hours, directions and contact details. Built around your food and your brand.', tag: 'RESTAURANT WEBSITE', className: 'website-card' },
  { icon: 'restaurant_menu', number: '02', title: 'A menu made for hungry customers.', description: 'Clear categories, prices and availability, with staff updates to keep your menu current.', tag: 'DIGITAL MENU', className: 'menu-card' },
  { icon: 'shopping_bag', number: '03', title: 'From your website to your kitchen.', description: 'Pickup checkout, online payments and order tracking. Supported Clover printing after we check your restaurant’s setup.', tag: 'DIRECT ONLINE ORDERING', className: 'ordering-card' },
  { icon: 'dashboard', number: '04', title: 'The details, all in one place.', description: 'A management dashboard for orders, sales summaries and Excel downloads, so your team can stay on top of the day.', tag: 'MANAGEMENT DASHBOARD', className: 'dashboard-card' },
];
const Services: React.FC = () => (
  <section className="restaurant-section" id="services">
    <div className="restaurant-wrap">
      <div className="section-heading"><p className="eyebrow">YOUR EVERYDAY ESSENTIALS</p><h2>Less juggling.<br /><em>More serving.</em></h2><p>Start with the tools your restaurant needs today. We handle the website and setup, so you can focus on the food and the people.</p></div>
      <div className="restaurant-services">{services.map(service => <article className={`restaurant-service ${service.className}`} key={service.number}><div className="service-top"><span className="material-symbols-outlined" aria-hidden="true">{service.icon}</span><span>{service.number}</span></div><p className="eyebrow">{service.tag}</p><h3>{service.title}</h3><p>{service.description}</p></article>)}</div>
      <div className="maintenance-strip"><span className="material-symbols-outlined" aria-hidden="true">handyman</span><div><h3>And after launch? We’re still here.</h3><p>Monthly maintenance for menu changes, promotions, backups and monitoring. Update allowances and support hours are agreed before we start.</p></div><span className="service-pill">ONGOING MONTHLY CARE</span></div>
    </div>
  </section>
);
export default Services;
