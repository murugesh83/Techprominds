import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import ProductCatalog from './ProductCatalog';
import Pricing from './Pricing';
import { APPS } from '../constants';
import './restaurant.css';

const getInitials = (name: string) =>
  name.split(/[\s\-–]+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

const Home: React.FC = () => {
  return (
    <div className="restaurant-home">
      <Hero />
      <div className="restaurant-intro-bar">YOUR BRAND <span>✳</span> YOUR MENU <span>✳</span> YOUR DIRECT ORDERING <span>✳</span> OUR ONGOING SUPPORT</div>
      <Services />
      <ProductCatalog />
      <Pricing />
      <Features />

      {/* Portfolio / Our Apps */}
      <section className="py-20 bg-slate-50" id="portfolio">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-4">Portfolio</h2>
              <h3 className="text-5xl md:text-6xl font-[900] tracking-tight text-text-main">Our Apps.</h3>
            </div>
            <a
              href="https://play.google.com/store/apps/dev?id=6457367301899142561"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-extrabold text-sm tracking-widest uppercase hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-3 text-text-main w-fit"
            >
              VIEW ALL ON GOOGLE PLAY
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {APPS.map((app) => (
              <a
                key={app.name}
                href={app.playStoreUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 cursor-pointer transition-all group h-full"
              >
                <div className="flex items-start gap-4">
                  {/* Colored initial avatar */}
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary shadow-md`}>
                    <span className="text-white font-black text-sm tracking-tight">
                      {getInitials(app.name)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold text-text-main text-base leading-tight">{app.name}</h4>
                    <p className="text-sm text-text-muted mt-1 leading-relaxed">{app.description}</p>
                  </div>
                </div>

                {/* Google Play badge */}
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-slate-100">
                  <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.18 23.76c.33.18.7.22 1.06.14l11.29-11.29L12 9.08 3.18 23.76z" fill="#EA4335"/>
                    <path d="M20.65 10.6L17.4 8.76l-3.87 3.87 3.87 3.87 3.27-1.86a1.857 1.857 0 000-3.24l-.02.16z" fill="#FBBC04"/>
                    <path d="M3.18.24A1.84 1.84 0 002 1.96v20.08c0 .67.37 1.25.93 1.57l.25.15L15.47 12 3.18.24z" fill="#4285F4"/>
                    <path d="M4.24.1L15.47 12 12 8.53 4.24.1z" fill="#34A853"/>
                    <path d="M4.24.1l-.06-.04A1.84 1.84 0 002 1.96v.19L12 9.08l3.47-3.47L4.24.1z" fill="#34A853"/>
                  </svg>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-primary transition-colors">Google Play</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
