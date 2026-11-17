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
        <Link to="/" onClick={close} className="site-brand"><img className="brand-logo" src="/images/logo/techprominds-logo.svg" alt="Techpro Minds" width="500" height="105" /></Link>
        <button className="mobile-toggle" aria-label="Toggle navigation" aria-expanded={mobile} aria-controls="main-navigation" onClick={() => {setMobile(!mobile); setOpen(null);}}><span className="material-symbols-outlined" aria-hidden="true">{mobile ? 'close' : 'menu'}</span></button>
        <nav id="main-navigation" className={`main-navigation ${mobile ? 'is-visible' : ''}`} aria-label="Main navigation">
          <button ref={productTrigger} className={open === 'product' ? 'nav-selected' : ''} aria-expanded={open === 'product'} aria-controls="product-menu" onClick={() => setOpen(open === 'product' ? null : 'product')}>Product <span aria-hidden="true">{open === 'product' ? '⌃' : '⌄'}</span></button>
          <Link to="/pricing" aria-current={location.pathname === "/pricing" ? "page" : undefined} onClick={close}>Pricing</Link><Link to="/how-it-works" aria-current={location.pathname === "/how-it-works" ? "page" : undefined} onClick={close}>How it works</Link>
          <button aria-expanded={open === 'company'} aria-controls="company-menu" onClick={() => setOpen(open === 'company' ? null : 'company')}>Company <span aria-hidden="true">⌄</span></button>
          <button aria-expanded={open === 'resources'} aria-controls="resources-menu" onClick={() => setOpen(open === 'resources' ? null : 'resources')}>Resources <span aria-hidden="true">⌄</span></button>
          <Link className="header-demo" to="/demo" onClick={close}>Get a demo <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
      {open === 'product' && <div className="product-mega" id="product-menu"><div className="mega-groups">{PRODUCT_GROUPS.map(group => <div className="mega-group" key={group.title}><h2>{group.title}</h2>{group.products.map(product => <Link key={product.id} to={`/products/${product.id}`} onClick={close}><span className="material-symbols-outlined" aria-hidden="true">{product.icon}</span><span>{product.name}</span>{product.status !== 'Available' && <small>{product.status === 'Setup review' ? 'Review' : product.status}</small>}</Link>)}</div>)}</div><aside className="mega-aside"><Link to="/restaurant-work" onClick={close} className="mega-work"><span>SEE OUR WORK</span><strong>See Biryani Bowl in action.</strong><span className="material-symbols-outlined" aria-hidden="true">restaurant</span><p>Explore a restaurant website built by Techpro Minds.</p><b>Take a look ↗</b></Link><div className="mega-note"><strong>Built around your restaurant.</strong><p>Start with websites and ordering. Planned and exploring options are not yet available.</p><Link to="/products" onClick={close}>Explore every option ↗</Link></div></aside></div>}
      {open === 'company' && <div className="small-nav-panel" id="company-menu"><Link to="/how-it-works" onClick={close}>Our approach</Link><Link to="/restaurant-work" onClick={close}>Restaurant work</Link><Link to="/apps" onClick={close}>Our apps</Link><Link to="/contact" onClick={close}>Contact Techpro Minds</Link></div>}
      {open === 'resources' && <div className="small-nav-panel" id="resources-menu"><Link to="/products" onClick={close}>Product guide</Link><Link to="/pricing" aria-current={location.pathname === "/pricing" ? "page" : undefined} onClick={close}>Packages & pricing</Link><Link to="/privacypolicy" onClick={close}>Privacy policies</Link><a href="mailto:support@techpromindus.com" onClick={close}>Support</a></div>}
    </header>
  </>;
}
