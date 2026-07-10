import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>

      {/* Top Utility Bar */}
      <div className="utility-bar">
        <div className="utility-container">
          <div className="utility-left">
            <a
              href="https://www.instagram.com/lohithconstruction/"
              target="_blank"
              rel="noopener noreferrer"
              className="utility-link"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" className="utility-icon">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>@lohithconstruction</span>
            </a>
          </div>
          <div className="utility-right">
            <a href="tel:+919381034355" className="utility-link utility-phone">
              <svg viewBox="0 0 24 24" width="13" height="13" className="utility-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>+91 93810 34355</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">
            <img src="/assets/images/newlogo.jpeg" alt="Lohith Construction" className="navbar-logo-img" />
            <span className="navbar-logo-text">LOHITH</span>
          </a>
          <div className="navbar-links">
            <a href="#home" className={currentView === 'home' ? 'active' : ''}>Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#interiors" className={currentView === 'interiors' ? 'active' : ''}>Interiors</a>
            <a href="#engineering">Engineering</a>
            <a href="#values">Values</a>
            <a href="#materials">Materials</a>
            <a href="#connect">Connect</a>
          </div>
          <div className="navbar-cta">
            <button className="btn btn-gold btn-sm">Request Estimate</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
