
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-white" id="why-us">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-4">Integrity</h2>
          <h3 className="text-5xl md:text-6xl font-[900] tracking-tight text-text-main">Reliable. Scalable. Fast.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="group p-12 rounded-3xl border border-slate-100 bg-slate-50/50 premium-shadow-hover transition-all"
            >
              <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-3xl font-bold">{feature.icon}</span>
              </div>
              <h4 className="text-2xl font-extrabold mb-5 text-text-main tracking-tight">{feature.title}</h4>
              <p className="text-text-muted leading-relaxed text-lg font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
