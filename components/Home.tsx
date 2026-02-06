import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <Services />

            {/* Call to Action Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-text-main px-8 py-16 md:px-20 md:py-24 text-center text-white shadow-3xl shadow-black/10">
                        <div className="relative z-10 mx-auto max-w-4xl">
                            <h2 className="text-4xl font-[900] tracking-tighter md:text-5xl lg:text-6xl leading-[0.95]">
                                READY TO <br />
                                <span className="text-primary">ENGINEER?</span>
                            </h2>
                            <p className="mt-10 text-xl text-slate-400 leading-relaxed font-bold max-w-2xl mx-auto">
                                Join the ranks of high-performance companies powered by Techpro Mind infrastructure.
                            </p>
                            <div className="mt-14 flex flex-wrap justify-center gap-6">
                                <button className="h-20 px-12 bg-primary text-white rounded-2xl text-2xl font-black transition-all hover:bg-white hover:text-text-main shadow-2xl shadow-primary/30 active:scale-95">
                                    HIRE OUR TEAM
                                </button>
                                <button className="h-20 px-12 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-2xl text-2xl font-black transition-all">
                                    OUR STACK
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
