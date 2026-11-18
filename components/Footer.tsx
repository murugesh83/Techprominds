
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <Link to="/" className="footer-brand"><img src="/images/logo/techprominds-logo.svg" alt="Techpro Minds" width="500" height="105" /></Link>
            <p className="text-sm font-bold text-text-muted leading-relaxed">
              Websites, mobile apps, IT consulting and Clover POS services. Built and managed by Techpro Minds LLC.
            </p>
          </div>

          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-text-main mb-8">Solutions</h5>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li><a className="hover:text-primary transition-colors" href="/products/restaurant-website">Website Design & Management</a></li>
              <li><a className="hover:text-primary transition-colors" href="/products/pos">Clover POS Installation</a></li>
              <li><a className="hover:text-primary transition-colors" href="/products/clover-printing">Clover Order Printing</a></li>
              <li><a className="hover:text-primary transition-colors" href="/products/pos-integrations">Website & POS Integration</a></li>
              <li><Link to="/products/software-it-consulting">Software &amp; IT Consulting</Link></li>
              <li><Link to="/products/mobile-app-development">Mobile App Development</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-text-main mb-8">Company</h5>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li><a className="hover:text-primary transition-colors" href="/how-it-works">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="/apps">Our Apps</a></li>
              <li><Link to="/privacypolicy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-left uppercase text-[10px] tracking-widest">Privacy Policy</Link></li>
              <li><a className="hover:text-primary transition-colors" href="mailto:support@techpromindus.com">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-text-main mb-8">Headquarters</h5>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base font-bold">mail</span>
                support@techpromindus.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base font-bold">location_on</span>
                Philadelphia, PA
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
            © 2026 Techpro Minds LLC. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
