
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-10 md:pt-24 md:pb-16 hero-gradient">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Engineering Excellence
          </div>

          <h1 className="text-5xl font-[900] leading-[0.95] tracking-tighter text-text-main md:text-7xl lg:text-8xl">
            BUILT FOR <br />
            <span className="text-primary">SCALE.</span>
          </h1>

          <p className="max-w-2xl text-xl md:text-2xl text-text-muted leading-relaxed font-semibold">
            Software that powers modern businesses. Reliable, secure, and built to last.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <button className="h-16 px-12 bg-primary text-white rounded-xl text-xl font-extrabold transition-all hover:bg-primary-dark active:scale-95 shadow-xl shadow-primary/25 flex items-center gap-3">
              GET STARTED
              <span className="material-symbols-outlined font-black">arrow_forward</span>
            </button>
            <button className="h-16 px-12 bg-white border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-text-main rounded-xl text-xl font-extrabold transition-all">
              OUR WORK
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-12 text-slate-400">
            {[
              { icon: 'hub', label: 'Cloud Native' },
              { icon: 'phone_iphone', label: 'Mobile First' },
              { icon: 'lock', label: 'Secure by Design' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em]">
                <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
