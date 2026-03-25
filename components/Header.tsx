
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Services', href: '/#services' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Portfolio', href: '/#portfolio' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const handleNavigateHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm'
        : 'bg-white border-b border-transparent py-5'
      }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={handleNavigateHome}>
          <div className="bg-primary h-10 w-10 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-2xl font-bold">terminal</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-text-main">
            Techpro <span className="text-primary">Mind</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              className="text-sm font-bold text-text-muted hover:text-primary transition-colors relative group"
              href={item.href}
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <button className="hidden md:block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/25 active:scale-95">
            Contact Expert
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-text-main transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-text-main transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-text-main transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-1 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              className="text-sm font-bold text-text-muted hover:text-primary hover:bg-slate-50 transition-colors py-3 px-3 rounded-lg"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/25 mt-3 w-full">
            Contact Expert
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
