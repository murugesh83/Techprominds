
import React from 'react';

interface FooterProps {
  onNavigateToPrivacy?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateToPrivacy }) => {
  return (
    <footer className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-text-main h-8 w-8 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">terminal</span>
              </div>
              <span className="text-xl font-black tracking-tight text-text-main">Techpro <span className="text-primary">Mind</span></span>
            </div>
            <p className="text-sm font-bold text-text-muted leading-relaxed">
              Global software authority in mission-critical mobile and enterprise systems. Engineering excellence since 2018.
            </p>
          </div>
          
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-text-main mb-8">Solutions</h5>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li><a className="hover:text-primary transition-colors" href="#services">Mobile Engineering</a></li>
              <li><a className="hover:text-primary transition-colors" href="#services">System Architecture</a></li>
              <li><a className="hover:text-primary transition-colors" href="#services">Cloud Ops</a></li>
              <li><a className="hover:text-primary transition-colors" href="#services">Security Audits</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-text-main mb-8">Company</h5>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li><a className="hover:text-primary transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="#portfolio">Portfolio</a></li>
              <li><button onClick={onNavigateToPrivacy} className="hover:text-primary transition-colors text-left uppercase text-[10px] tracking-widest">Privacy Policy</button></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-text-main mb-8">Headquarters</h5>
            <ul className="space-y-4 text-sm font-bold text-text-muted">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base font-bold">mail</span>
                lead@techpromind.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base font-bold">location_on</span>
                Manhattan, NY
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
            © 2024 Techpro Mind LLC. All protocols observed.
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
