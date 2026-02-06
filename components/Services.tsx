
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">
          <div className="max-w-3xl">
            <h2 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-4">Our Services</h2>
            <h3 className="text-5xl md:text-6xl font-[900] tracking-tight text-text-main">Expert Engineering.</h3>
          </div>
          <button className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-extrabold text-sm tracking-widest uppercase hover:bg-slate-100 transition-all flex items-center gap-4">
            VIEW ALL <span className="material-symbols-outlined">east</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl transition-all hover:border-primary/50"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
              
              <div className="p-12 relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl font-bold">{service.icon}</span>
                </div>
                <h4 className="text-4xl font-[900] text-text-main mb-6 tracking-tighter">{service.title}</h4>
                <p className="text-text-muted leading-relaxed mb-10 text-xl font-semibold">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-lg bg-slate-100 text-text-muted text-xs font-bold uppercase tracking-widest">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-5 bg-text-main text-white font-black rounded-xl hover:bg-primary transition-all text-lg tracking-widest uppercase">
                  Schedule Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
