import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
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
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          LOHITH
        </div>
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#engineering">Engineering</a>
          <a href="#values">Values</a>
          <a href="#materials">Materials</a>
          <a href="#connect">Connect</a>
        </nav>
        <div className="navbar-cta">
          <button className="btn btn-gold btn-sm">Request Estimate</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
