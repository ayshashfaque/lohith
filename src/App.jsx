import React from 'react';
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

function App() {
  return (
    <>
      <AirplaneGridView />
      <Navbar />
      <main>
        <Hero />
        <BrandAuthority />
        <ProjectsPortfolio />
        <QualityTerminal />
        <WhyLohith />
        <SpecsMatrix />
        <TestimonialsSection />
        <FAQSection />
        <DiscoveryHub />
      </main>
      <Footer />
    </>
  );
}

export default App;
