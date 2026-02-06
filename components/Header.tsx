
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigateHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' 
        : 'bg-white border-b border-transparent py-5'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={onNavigateHome}>
          <div className="bg-primary h-10 w-10 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-2xl font-bold">terminal</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-text-main">
            Techpro <span className="text-primary">Mind</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Why Us', 'Portfolio', 'About'].map((item) => (
            <a 
              key={item}
              className="text-sm font-bold text-text-muted hover:text-primary transition-colors" 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-text-main hover:bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg active:scale-95">
            Contact Expert
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
