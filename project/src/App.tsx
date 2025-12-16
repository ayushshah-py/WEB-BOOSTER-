import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import FloatingContactButton from './components/FloatingContactButton';
import ScrollProgress from './components/ScrollProgress';
import DarkModeToggle from './components/DarkModeToggle';

// Import page components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import OurWorkPage from './pages/OurWorkPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

// Import case study pages
import DigitalMarketingCaseStudy from './pages/DigitalMarketingCaseStudy';
import TechStartupCaseStudy from './pages/TechStartupCaseStudy';
import RestaurantCaseStudy from './pages/RestaurantCaseStudy';
import SEOCaseStudy from './pages/SEOCaseStudy';

// Import service detail pages
import BusinessDevelopmentPage from './pages/BusinessDevelopmentPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import WebsiteDesignPage from './pages/WebsiteDesignPage';
import SEOPage from './pages/SEOPage';
import VideoProductionPage from './pages/VideoProductionPage';
import ECommercePage from './pages/ECommercePage';
import ContentMarketingPage from './pages/ContentMarketingPage';
import AyushProfilePage from './pages/AyushProfilePage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    
    if (newIsDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  
  return (
    <Router>
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        
        {/* Service detail pages */}
        <Route path="/services/business-development" element={<BusinessDevelopmentPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/website-design" element={<WebsiteDesignPage />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/services/video-production" element={<VideoProductionPage />} />
        <Route path="/services/ecommerce" element={<ECommercePage />} />
        <Route path="/services/content-marketing" element={<ContentMarketingPage />} />
        
        {/* Case study pages */}
        <Route path="/case-studies/digital-marketing" element={<DigitalMarketingCaseStudy />} />
        <Route path="/case-studies/tech-startup" element={<TechStartupCaseStudy />} />
        <Route path="/case-studies/restaurant-chain" element={<RestaurantCaseStudy />} />
        <Route path="/case-studies/seo-campaign" element={<SEOCaseStudy />} />
        
        {/* Team profile pages */}
        <Route path="/team/ayush-shah" element={<AyushProfilePage />} />
      </Routes>
      
      <Footer />
      <LiveChat />
      <FloatingContactButton />
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
    </Router>
  );
}

export default App;