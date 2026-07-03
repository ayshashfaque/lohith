import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-even">
      <div className="container footer-container">
        
        <div className="footer-col brand-col">
          <h3 className="footer-logo">LOHITH</h3>
          <p className="footer-tagline">Building Beyond Lifetimes.</p>
          <p className="footer-cert">RERA Registered.</p>
        </div>
        
        <div className="footer-col links-col">
          <h4>Divisions</h4>
          <a href="#portfolio">Residential Luxury</a>
          <a href="#portfolio">Commercial Structural</a>
          <a href="#portfolio">Custom Villas</a>
        </div>
        
        <div className="footer-col links-col">
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#engineering">Engineering Standard</a>
          <a href="https://www.instagram.com/lohithconstruction/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

      </div>
      
      <div className="footer-bottom">
        <div className="container fb-container">
          <p>© 2026 Lohith Construction Co. All rights reserved.</p>
          <p>
            <a 
              href="https://www.instagram.com/intellex.web/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{color: 'inherit', textDecoration: 'underline'}}
            >
              meet the developers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
