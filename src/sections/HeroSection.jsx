import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const scrollToForm = () => {
    const el = document.getElementById('free-estimate');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero-section" className="hero-section">
      <video
        className="hero-video"
        preload="auto"
        autoplay
        muted
        loop
        playsInline
        poster="/assets/images/hero-fallback.jpg"
      >
        <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay" />
      <div className="hero-content container">
        <h1 className="hero-title">LOHITH CONSTRUCTION</h1>
        <h2 className="hero-subtitle">CHENNAI'S NO.1 CONSTRUCTION COMPANY</h2>
        <button className="btn-primary hero-cta" onClick={scrollToForm}>Contact Us</button>
      </div>
    </section>
  );
}
