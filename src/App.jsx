import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandAuthority from './components/BrandAuthority';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import QualityTerminal from './components/QualityTerminal';
import WhyLohith from './components/WhyLohith';
import SpecsMatrix from './components/SpecsMatrix';
import DiscoveryHub from './components/DiscoveryHub';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandAuthority />
        <ProjectsPortfolio />
        <QualityTerminal />
        <WhyLohith />
        <SpecsMatrix />
        <DiscoveryHub />
      </main>
      <Footer />
    </>
  );
}

export default App;
