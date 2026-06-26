import React, { useState } from 'react';
import './DiscoveryHub.css';

const DiscoveryHub = () => {
  const [activeToggle, setActiveToggle] = useState('estimate');

  return (
    <section className="section section-even discovery-hub" id="connect">
      <div className="container">
        
        <div className="dh-header">
          <h2 className="section-title">Initiate Your Project</h2>
        </div>

        <div className="dh-glass-panel">
          
          <div className="dh-toggle-switch">
            <button 
              className={`toggle-btn ${activeToggle === 'estimate' ? 'active' : ''}`}
              onClick={() => setActiveToggle('estimate')}
            >
              Get Digital Estimate
            </button>
            <button 
              className={`toggle-btn ${activeToggle === 'headquarters' ? 'active' : ''}`}
              onClick={() => setActiveToggle('headquarters')}
            >
              Visit Headquarters
            </button>
          </div>

          <div className="dh-content-area">
            {activeToggle === 'estimate' ? (
              <form className="dh-form">
                <div className="form-grid">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" className="tn-input" placeholder="Enter your full name" />
                  </div>
                  <div className="input-group">
                    <label>Phone Number</label>
                    <input type="tel" className="tn-input" placeholder="+91" />
                  </div>
                  <div className="input-group">
                    <label>Plot Location (City/Area)</label>
                    <input type="text" className="tn-input" placeholder="e.g. OMR, Chennai" />
                  </div>
                  <div className="input-group">
                    <label>Plot Size (Sq.Ft)</label>
                    <input type="number" className="tn-input" placeholder="e.g. 2400" />
                  </div>
                </div>
                <div className="form-submit">
                  <button type="button" className="btn btn-gold btn-full">Generate Structural Estimate</button>
                </div>
              </form>
            ) : (
              <div className="dh-hq">
                <div className="hq-details">
                  <h3 className="hq-title">Corporate Office</h3>
                  <p className="hq-address">
                    42, Tech-Noir Boulevard,<br/>
                    OMR Phase 1, Chennai,<br/>
                    Tamil Nadu 600119
                  </p>
                  
                  <div className="hq-contact">
                    <div className="hq-contact-item">
                      <span className="hq-label">Direct Line:</span>
                      <span className="hq-value">+91 98765 43210</span>
                    </div>
                    <div className="hq-contact-item">
                      <span className="hq-label">Email:</span>
                      <span className="hq-value">engineering@lohith.com</span>
                    </div>
                  </div>
                  
                  <button className="btn btn-ghost">Get Directions</button>
                </div>
                <div className="hq-map">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.653456789!2d80.223456!3d12.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzE1LjYiTiA4MMKwMTMnMjQuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default DiscoveryHub;
