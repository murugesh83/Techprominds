
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
              Restaurant websites, direct ordering and ongoing care. Built and managed by Techpro Minds LLC.
            </p>
          </div>

          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-text-main mb-8">Solutions</h5>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li><a className="hover:text-primary transition-colors" href="/#services">Restaurant Websites</a></li>
              <li><a className="hover:text-primary transition-colors" href="/#services">Digital Menus</a></li>
              <li><a className="hover:text-primary transition-colors" href="/#services">Online Ordering</a></li>
              <li><a className="hover:text-primary transition-colors" href="/#services">Website Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-text-main mb-8">Company</h5>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li><a className="hover:text-primary transition-colors" href="/#why-us">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="/#portfolio">Portfolio</a></li>
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
          <div className="flex gap-8">
            <a href="#" className="text-slate-300 hover:text-text-main transition-colors">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
