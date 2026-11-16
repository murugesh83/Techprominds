import React, { useEffect, useState } from 'react';
import { PRODUCT_GROUPS } from './restaurantProducts';

export default function ProductCatalog() {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    const readHash = () => setSelected(decodeURIComponent(window.location.hash.slice(1)));
    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, []);
  return <section className="restaurant-section product-catalog" id="products"><div className="restaurant-wrap">
    <div className="section-heading"><p className="eyebrow">THE COMPLETE PRODUCT VISION</p><h2>Every part of your<br /><em>restaurant, connected.</em></h2><p>Explore the full range of possibilities. Start with what’s available today and help shape what comes next.</p></div>
    <div className="catalog-legend"><span><i /> Available today</span><span>Setup review: compatibility required</span><span>Planned / Exploring: future options, not yet available</span></div>
    <div className="catalog-groups">{PRODUCT_GROUPS.map(group => <div key={group.title}><h3>{group.title}</h3>{group.products.map(product => <details id={product.id} key={product.id} open={selected === product.id}>
      <summary onClick={event => { event.preventDefault(); setSelected(selected === product.id ? '' : product.id); }}><span className="material-symbols-outlined" aria-hidden="true">{product.icon}</span><span>{product.name}</span><small className={product.status === 'Available' ? 'status-available' : ''}>{product.status}</small><span aria-hidden="true" className="detail-plus">{selected === product.id ? '−' : '+'}</span></summary>
      <div className="catalog-description"><p>{product.description}</p><a href={`mailto:support@techpromindus.com?subject=${encodeURIComponent('Restaurant inquiry: ' + product.name)}`}>Discuss {product.name.toLowerCase()} <span aria-hidden="true">↗</span></a></div>
    </details>)}</div>)}</div>
  </div></section>;
}
