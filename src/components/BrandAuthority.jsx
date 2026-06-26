import React from 'react';
import './BrandAuthority.css';

const BrandAuthority = () => {
  return (
    <section className="section section-odd brand-authority" id="about">
      <div className="ambient-glow"></div>
      <div className="container brand-authority-container">
        
        <div className="ba-left">
          <div className="micro-label">✦ THE LOHITH STANDARD</div>
          <h2 className="section-title">Built On Absolute Integrity</h2>
          <p className="ba-copy">
            When founder Mr. T. Balachandar started Lohith Construction in 2007, he set out to eliminate the common headaches in the construction industry—hidden costs, material dropping, and random delays. By managing our engineering pipelines completely in-house and rejecting third-party subcontractors, we ensure every build is executed flawlessly to the blueprint.
          </p>
          
          <div className="metrics-bar">
            <div className="metric">
              <span className="metric-value">20+</span>
              <span className="metric-label">Years of Excellence</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric">
              <span className="metric-value">120+</span>
              <span className="metric-label">Structures Delivered</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric">
              <span className="metric-value">15-Yr</span>
              <span className="metric-label">Structural Warranty</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric">
              <span className="metric-value">4.8★</span>
              <span className="metric-label">Average Rating</span>
            </div>
          </div>
        </div>

        <div className="ba-right">
          <div className="image-wrapper">
            <div className="gold-wireframe"></div>
            <img 
              src="/assets/images/brand-authority-interior.jpg" 
              alt="Premium interior design" 
              className="ba-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandAuthority;
