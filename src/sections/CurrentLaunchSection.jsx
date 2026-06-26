import React, { useState } from 'react';
import './CurrentLaunchSection.css';

export default function CurrentLaunchSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [phone, setPhone] = useState('');

  const handleDownload = (e) => {
    e.preventDefault();
    if (/^[0-9]{10}$/.test(phone)) {
      alert("Brochure download started!");
      setModalOpen(false);
      setPhone('');
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  return (
    <section className="section-padding launch-section">
      <div className="container">
        
        <h2 className="section-title">CURRENT LAUNCH</h2>
        
        <div className="launch-card">
          <div className="launch-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
              alt="Lohith Selvan Flats Medavakkam" 
              className="launch-image" 
            />
          </div>
          
          <div className="launch-content">
            <h3 className="project-name">LOHITH SELVAN FLATS</h3>
            <p className="project-location">Medavakkam, Chennai</p>
            
            <div className="project-badges">
              <span className="badge">Ready to Move</span>
              <span className="badge">CMDA Approved</span>
              <span className="badge">RERA Approved</span>
              <span className="badge">Home Loan Ready</span>
              <span className="badge">Vastu Compliant</span>
            </div>
            
            <p className="project-description">
              Experience the pinnacle of residential engineering in our latest flagship development. Designed for modern families demanding uncompromising structural integrity and premium finishes. Limited inventory available.
            </p>
            
            <button className="btn-primary" onClick={() => setModalOpen(true)}>
              Download Brochure
            </button>
          </div>
        </div>

      </div>

      {modalOpen && (
        <div className="brochure-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="brochure-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalOpen(false)}>&times;</button>
            <h3 className="modal-heading">Access Project Brochure</h3>
            <p className="modal-subheading">Enter your phone number for immediate access to floor plans and pricing.</p>
            
            <form onSubmit={handleDownload} className="modal-form">
              <div className="input-group">
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  pattern="[0-9]{10}"
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Initiate Download</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
