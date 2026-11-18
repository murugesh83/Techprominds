import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCT_GROUPS } from './restaurantProducts';
import './restaurant.css';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const close = () => { setOpen(false); setMobile(false); };
  useEffect(close, [location.pathname]);
  useEffect(() => {
    const onPointer = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) close(); };
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { close(); trigger.current?.focus(); } };
    document.addEventListener('pointerdown', onPointer); document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onPointer); document.removeEventListener('keydown', onKey); };
  }, []);
  return <header className="site-header" ref={header}><div className="header-inner">
    <Link to="/" onClick={close} className="site-brand"><img className="brand-logo" src="/images/logo/techprominds-logo.svg" alt="Techpro Minds" width="500" height="105" /></Link>
    <button className="mobile-toggle" aria-label="Toggle navigation" aria-expanded={mobile} aria-controls="main-navigation" onClick={() => {setMobile(!mobile); setOpen(false);}}><span className="material-symbols-outlined" aria-hidden="true">{mobile ? 'close' : 'menu'}</span></button>
    <nav id="main-navigation" className={`main-navigation ${mobile ? 'is-visible' : ''}`} aria-label="Main navigation">
      <div className="services-nav"><button ref={trigger} aria-expanded={open} aria-controls="services-menu" onClick={() => setOpen(!open)}>Services <span aria-hidden="true">⌄</span></button>
      {open && <div id="services-menu" className="services-dropdown">{PRODUCT_GROUPS[0].products.map(service => <Link key={service.id} to={`/products/${service.id}`} onClick={close}><span className="material-symbols-outlined" aria-hidden="true">{service.icon}</span>{service.name}</Link>)}<Link to="/products" onClick={close}>View all services ↗</Link></div>}</div>
      <Link to="/pricing" aria-current={location.pathname === '/pricing' ? 'page' : undefined} onClick={close}>Pricing</Link>
      <Link to="/how-it-works" aria-current={location.pathname === '/how-it-works' ? 'page' : undefined} onClick={close}>How it works</Link>
      <Link to="/restaurant-work" onClick={close}>Our work</Link>
      <Link className="header-demo" to="/demo" onClick={close}>Let’s talk <span aria-hidden="true">↗</span></Link>
    </nav>
  </div></header>;
}
