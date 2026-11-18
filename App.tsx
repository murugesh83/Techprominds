import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import { PricingPage, ProcessPage, ProductsPage, WorkPage, AppsPage, ContactPage, ProductPage } from './components/SitePages';
import { PRODUCT_GROUPS } from './components/restaurantProducts';
import DemoRequest from './components/DemoRequest';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import HealthierPrivacyPolicy from './components/HealthierPrivacyPolicy';
import KuralBoxPrivacyPolicy from './components/KuralBoxPrivacyPolicy';

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.hash, location.key]);

  useEffect(() => {
    const legacy: Record<string, string> = { pricing: '/pricing', 'why-us': '/how-it-works', products: '/products', 'restaurant-work': '/restaurant-work', portfolio: '/apps', contact: '/contact' };
    const fragment = location.hash.slice(1);
    const product = PRODUCT_GROUPS.flatMap(group => group.products).find(item => item.id === fragment);
    if (location.pathname === '/' && (legacy[fragment] || product)) {
      navigate(legacy[fragment] || `/products/${product!.id}`, { replace: true });
      return;
    }
    const titles: Record<string, string> = { '/pricing': 'Pricing', '/how-it-works': 'How it works', '/products': 'Our services', '/restaurant-work': 'Restaurant work', '/apps': 'Our apps', '/contact': 'Contact', '/demo': 'Request a demo' };
    const currentProduct = PRODUCT_GROUPS.flatMap(group => group.products).find(item => location.pathname === `/products/${item.id}`);
    document.title = `${currentProduct?.name || titles[location.pathname] || (location.pathname.startsWith('/privacypolicy') ? 'Privacy Policy' : 'Websites, Mobile Apps & IT Consulting')} | Techpro Minds LLC`;
  }, [location.pathname, location.hash, location.key, navigate]);

  return (
    <div className="site-shell relative flex min-h-screen w-full flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/how-it-works" element={<ProcessPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/restaurant-work" element={<WorkPage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoRequest />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/privacypolicy/healthier" element={<HealthierPrivacyPolicy />} />
          <Route path="/privacypolicy/kuralbox" element={<KuralBoxPrivacyPolicy />} />
          <Route path="/privacypolicy/*" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
