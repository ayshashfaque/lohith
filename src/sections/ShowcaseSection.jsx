import React, { useState } from 'react';
import './ShowcaseSection.css';

export default function ShowcaseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleDownload = (e) => {
    e.preventDefault();
    if(phoneNumber.length >= 10) {
      alert("Brochure download initiated!");
      setIsModalOpen(false);
      setPhoneNumber('');
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  return (
    <section className="slide-section showcase-section">
      <div className="geometric-grid">
        
        <div style={{ gridColumn: '1 / 13', paddingBottom: '24px' }}>
          <h2 className="section-heading">CURRENT LAUNCHES</h2>
        </div>

        <div className="feature-card" style={{ gridColumn: '1 / 13' }}>
          
          <div className="feature-image-container">
            <img src="/assets/c2070570-15be-4fc8-9e8a-b809403a0862.jpeg" alt="Lohith Selvan Flats" className="feature-image" />
            <div className="image-overlay"></div>
          </div>

          <div className="feature-content">
            <div className="badges">
              <span className="badge badge-accent">New Launch</span>
              <span className="badge">3 BHK</span>
              <span className="badge">100% Home Loan Ready</span>
              <span className="badge">Vastu Compliant</span>
              <span className="badge badge-outline">Ready to Move In</span>
            </div>
            
            <h3 className="project-title">LOHITH SELVAN FLATS</h3>
            <p className="project-location">Medavakkam, Chennai</p>
            
            <p className="project-desc">
              Experience the pinnacle of residential engineering in our latest flagship development. Designed for modern families demanding uncompromising structural integrity and premium finishes.
            </p>

            <button className="terminal-btn download-btn" onClick={() => setIsModalOpen(true)}>
              [ DOWNLOAD BROCHURE & PRICING ]
            </button>
          </div>
        </div>

      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
            <h3 className="modal-title">ACCESS PROJECT BROCHURE</h3>
            <p className="modal-desc">Enter your phone number for immediate download access.</p>
            
            <form onSubmit={handleDownload} className="modal-form">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="modal-input"
                required
                pattern="[0-9]{10}"
              />
              <button type="submit" className="terminal-btn modal-submit">[ INITIATE DOWNLOAD ]</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
