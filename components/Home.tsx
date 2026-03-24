import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import { APPS } from '../constants';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <Services />

            {/* Our Apps Section */}
            <section className="py-24 bg-slate-50" id="portfolio">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div>
                            <h2 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-4">Portfolio</h2>
                            <h3 className="text-5xl md:text-6xl font-[900] tracking-tight text-text-main">Our Apps.</h3>
                        </div>
                        <Link
                            to="/privacypolicy"
                            className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-extrabold text-sm tracking-widest uppercase hover:bg-slate-100 transition-all flex items-center gap-4 text-text-main w-fit"
                        >
                            PRIVACY POLICY <span className="material-symbols-outlined">east</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {APPS.map((app) => {
                            const isHealthier = !!app.privacyPolicyPath;
                            const card = (
                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 cursor-pointer transition-all group">
                                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isHealthier ? 'bg-primary' : 'bg-slate-100 group-hover:bg-primary/10'}`}>
                                        <span className={`material-symbols-outlined text-lg ${isHealthier ? 'text-white' : 'text-slate-500 group-hover:text-primary'}`}>
                                            {isHealthier ? 'nutrition' : 'smartphone'}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-extrabold text-text-main text-sm truncate">{app.name}</h4>
                                        <p className="text-xs text-text-muted mt-1 leading-relaxed">{app.description}</p>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary text-sm flex-shrink-0 mt-0.5 transition-colors">open_in_new</span>
                                </div>
                            );
                            return (
                                <a
                                    key={app.name}
                                    href={app.playStoreUrl || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {card}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-text-main px-8 py-16 md:px-20 md:py-24 text-center text-white shadow-3xl shadow-black/10">
                        <div className="relative z-10 mx-auto max-w-4xl">
                            <h2 className="text-4xl font-[900] tracking-tighter md:text-5xl lg:text-6xl leading-[0.95]">
                                LET'S <br />
                                <span className="text-primary">BUILD.</span>
                            </h2>
                            <p className="mt-10 text-xl text-slate-400 leading-relaxed font-bold max-w-2xl mx-auto">
                                Partner with a team that ships on time, every time.
                            </p>
                            <div className="mt-14 flex flex-wrap justify-center gap-6">
                                <button className="h-20 px-12 bg-primary text-white rounded-2xl text-2xl font-black transition-all hover:bg-white hover:text-text-main shadow-2xl shadow-primary/30 active:scale-95">
                                    START NOW
                                </button>
                                <button className="h-20 px-12 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-2xl text-2xl font-black transition-all">
                                    VIEW WORK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
