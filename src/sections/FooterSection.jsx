import React from 'react';
import './FooterSection.css';

export default function FooterSection() {
  return (
    <footer className="slide-section footer-section">
      <div className="geometric-grid">
        
        <div style={{ gridColumn: '1 / 13' }} className="footer-layout">
          
          <div className="footer-brand">
            <h2 className="footer-title">LOHITH CONSTRUCTION</h2>
            <p className="footer-subtitle">EST. 2007 | CHENNAI</p>
            <div className="footer-accent-line"></div>
            <p className="footer-desc">
              Building homes that hold generations. uncompromising quality, trusted engineering, and timeless design.
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <h4 className="col-title">COMMUNICATION HUB</h4>
              <ul className="col-list">
                <li><a href="tel:+919999999999">T: +91 99999 99999</a></li>
                <li><a href="mailto:info@lohithconstruction.com">E: info@lohithconstruction.com</a></li>
                <li><a href="https://wa.me/919999999999">W: WhatsApp Connect</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">CORPORATE DIRECTORY</h4>
              <ul className="col-list">
                <li><a href="#">Premium Flats</a></li>
                <li><a href="#">Villa Projects</a></li>
                <li><a href="#">Commercial Construction</a></li>
                <li><a href="#">Leadership Profile</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">CHENNAI HEADQUARTERS</h4>
              <address className="col-address">
                Lohith Construction,<br />
                Velachery Main Road,<br />
                Medavakkam,<br />
                Chennai, Tamil Nadu 600100
              </address>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              &copy; {new Date().getFullYear()} Lohith Construction. All Architectural Rights Reserved.
            </div>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#">RERA Disclosures</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
