import React from 'react';
import './OurStorySection.css';

export default function OurStorySection() {
  return (
    <section className="section-padding story-section">
      <div className="container">
        
        <div className="story-editorial-split">
          <div className="story-image-col">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
              alt="Lohith Construction Craftsmanship" 
              className="editorial-image"
            />
          </div>
          
          <div className="story-content-col">
            <h2 className="editorial-heading">BUILDING BEYOND LIFETIMES</h2>
            
            <div className="editorial-text">
              <p>
                Founded in 2007 by Mr. T. Balachandar, Lohith Construction was born out of a singular obsession: to eliminate the compromises found in standard residential development. We believe your home is your ultimate legacy.
              </p>
              <p>
                Our clients trust us because we operate differently. We do not rely on variable third-party subcontractors. Every project is meticulously managed by our internal engineering leadership, ensuring uncompromising material science and execution.
              </p>
              <p>
                <strong>Transparency is our foundation.</strong> From raw material procurement to final handover, you have complete visibility into the process. No hidden costs, no compromised timelines, just pure architectural excellence.
              </p>
            </div>
            
            <div className="signature">
              <span className="sign-name">Mr. T. Balachandar</span>
              <span className="sign-title">Founder & Chief Engineer</span>
            </div>
          </div>
        </div>

        <div className="metrics-grid">
          <div className="metric-item">
            <span className="metric-number">20+</span>
            <span className="metric-label">Years Experience</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">120+</span>
            <span className="metric-label">Completed Projects</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">50+</span>
            <span className="metric-label">Luxury Homes</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">15 YRS</span>
            <span className="metric-label">Structural Warranty</span>
          </div>
        </div>

      </div>
    </section>
  );
}
