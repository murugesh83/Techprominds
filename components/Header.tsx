import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCT_GROUPS } from './restaurantProducts';
import './restaurant.css';

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const header = useRef<HTMLElement>(null);
  const productTrigger = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const close = () => { setOpen(null); setMobile(false); };
  useEffect(close, [location.pathname]);
  useEffect(() => {
    const onPointer = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) close(); };
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { close(); productTrigger.current?.focus(); } };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onPointer); document.removeEventListener('keydown', onKey); };
  }, []);
  return <>
    {open && <div className="nav-backdrop" aria-hidden="true" />}
    <header className="site-header" ref={header}>
      <div className="header-inner">
        <Link to="/" onClick={close} className="site-brand"><span className="brand-symbol" aria-hidden="true">✳</span>Techpro Mind<span className="brand-llc">LLC</span></Link>
        <button className="mobile-toggle" aria-label="Toggle navigation" aria-expanded={mobile} aria-controls="main-navigation" onClick={() => {setMobile(!mobile); setOpen(null);}}><span className="material-symbols-outlined" aria-hidden="true">{mobile ? 'close' : 'menu'}</span></button>
        <nav id="main-navigation" className={`main-navigation ${mobile ? 'is-visible' : ''}`} aria-label="Main navigation">
          <button ref={productTrigger} className={open === 'product' ? 'nav-selected' : ''} aria-expanded={open === 'product'} aria-controls="product-menu" onClick={() => setOpen(open === 'product' ? null : 'product')}>Product <span aria-hidden="true">{open === 'product' ? '⌃' : '⌄'}</span></button>
          <a href="/#pricing" onClick={close}>Pricing</a><a href="/#why-us" onClick={close}>How it works</a>
          <button aria-expanded={open === 'company'} aria-controls="company-menu" onClick={() => setOpen(open === 'company' ? null : 'company')}>Company <span aria-hidden="true">⌄</span></button>
          <button aria-expanded={open === 'resources'} aria-controls="resources-menu" onClick={() => setOpen(open === 'resources' ? null : 'resources')}>Resources <span aria-hidden="true">⌄</span></button>
          <a className="header-demo" href="mailto:support@techpromindus.com?subject=Restaurant%20website%20demo" onClick={close}>Get a demo <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
      {open === 'product' && <div className="product-mega" id="product-menu"><div className="mega-groups">{PRODUCT_GROUPS.map(group => <div className="mega-group" key={group.title}><h2>{group.title}</h2>{group.products.map(product => <a key={product.id} href={`/#${product.id}`} onClick={close}><span className="material-symbols-outlined" aria-hidden="true">{product.icon}</span><span>{product.name}</span>{product.status !== 'Available' && <small>{product.status === 'Setup review' ? 'Review' : product.status}</small>}</a>)}</div>)}</div><aside className="mega-aside"><a href="/#restaurant-work" onClick={close} className="mega-work"><span>SEE OUR WORK</span><strong>A digital home<br />for Biryani Bowl.</strong><span className="material-symbols-outlined" aria-hidden="true">restaurant</span><p>Explore a real restaurant website built by Techpro Mind.</p><b>Take a look ↗</b></a><div className="mega-note"><strong>Built around your restaurant.</strong><p>Start with websites and ordering. Planned and exploring options are not yet available.</p><a href="/#products" onClick={close}>Explore every option ↗</a></div></aside></div>}
      {open === 'company' && <div className="small-nav-panel" id="company-menu"><a href="/#why-us" onClick={close}>Our approach</a><a href="/#restaurant-work" onClick={close}>Restaurant work</a><a href="/#portfolio" onClick={close}>Our apps</a><a href="/#contact" onClick={close}>Contact Techpro Mind</a></div>}
      {open === 'resources' && <div className="small-nav-panel" id="resources-menu"><a href="/#products" onClick={close}>Product guide</a><a href="/#pricing" onClick={close}>Packages & pricing</a><a href="/privacypolicy" onClick={close}>Privacy policies</a><a href="mailto:support@techpromindus.com" onClick={close}>Support</a></div>}
    </header>
  </>;
}
