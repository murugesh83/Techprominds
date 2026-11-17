import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DemoRequest from './components/DemoRequest';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import HealthierPrivacyPolicy from './components/HealthierPrivacyPolicy';
import KuralBoxPrivacyPolicy from './components/KuralBoxPrivacyPolicy';
import AIConsultant from './components/AIConsultant';

const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if not navigating to a hash link
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="site-shell relative flex min-h-screen w-full flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<DemoRequest />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/privacypolicy/healthier" element={<HealthierPrivacyPolicy />} />
          <Route path="/privacypolicy/kuralbox" element={<KuralBoxPrivacyPolicy />} />
        </Routes>
      </main>

      <Footer />
      <AIConsultant />
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
