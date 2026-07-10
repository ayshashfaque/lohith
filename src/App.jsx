import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandAuthority from './components/BrandAuthority';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import QualityTerminal from './components/QualityTerminal';
import WhyLohith from './components/WhyLohith';
import SpecsMatrix from './components/SpecsMatrix';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import DiscoveryHub from './components/DiscoveryHub';
import Footer from './components/Footer';
import AirplaneGridView from './components/AirplaneGridView';
import GallerySection from './components/GallerySection';
import ParticleBackground from './components/ParticleBackground';
import FloatingChatButton from './components/FloatingChatButton';
import Interiors from './components/Interiors';

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#interiors') {
        setCurrentView('interiors');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <AirplaneGridView />
      <Navbar currentView={currentView} />
      {currentView !== 'home' && <ParticleBackground />}
      
      <main>
        {currentView === 'interiors' ? (
          <Interiors />
        ) : (
          <>
            <Hero />
            <BrandAuthority />
            <ProjectsPortfolio />
            <GallerySection />
            <QualityTerminal />
            <WhyLohith />
            <SpecsMatrix />
            <TestimonialsSection />
            <FAQSection />
            <DiscoveryHub />
          </>
        )}
      </main>

      <Footer />
      <FloatingChatButton />
    </>
  );
}

export default App;
