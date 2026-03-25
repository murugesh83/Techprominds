
import React from 'react';
import { FEATURES } from '../constants';

const FEATURE_STATS: Record<string, { stat: string; label: string }> = {
  reliability: { stat: '99%', label: 'On-Time Delivery' },
  expertise:   { stat: '7+',  label: 'Years Experience' },
  growth:      { stat: '50+', label: 'Apps Shipped' },
};

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="why-us">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-4">Why Us</h2>
          <h3 className="text-5xl md:text-6xl font-[900] tracking-tight text-text-main">Results You Can Trust.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => {
            const meta = FEATURE_STATS[feature.id];
            return (
              <div
                key={feature.id}
                className="group p-10 rounded-3xl border border-slate-100 bg-slate-50/50 premium-shadow-hover transition-all"
              >
                {/* Stat callout */}
                {meta && (
                  <div className="mb-6">
                    <span className="text-4xl font-[900] text-primary tracking-tight">{meta.stat}</span>
                    <span className="ml-2 text-xs font-black uppercase tracking-widest text-text-muted">{meta.label}</span>
                  </div>
                )}

                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-2xl font-bold">{feature.icon}</span>
                </div>
                <h4 className="text-xl font-extrabold mb-3 text-text-main tracking-tight">{feature.title}</h4>
                <p className="text-text-muted leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
