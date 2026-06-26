import React from 'react';
import './CredibilitySection.css';

export default function CredibilitySection() {
  return (
    <section className="slide-section credibility-section">
      <div className="geometric-grid">
        <div style={{ gridColumn: '1 / 13', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          <div className="performance-bar">
            <div className="stat-item">
              <span className="stat-value">20+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">120+</span>
              <span className="stat-label">Projects Completed Across Chennai</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">50+</span>
              <span className="stat-label">Happy Families</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Est. 2007</span>
              <span className="stat-label">Founded by Mr. T. Balachandar</span>
            </div>
          </div>

          <div className="value-pillars">
            <div className="pillar-panel">
              <div className="pillar-icon">01</div>
              <h3 className="pillar-title">Technical Rigor</h3>
              <p className="pillar-desc">
                Uncompromising engineering standards. From seismic compliance to superior material science, every structural element is designed for longevity and resilience. No third-party subcontractor variance.
              </p>
            </div>
            <div className="pillar-panel">
              <div className="pillar-icon">02</div>
              <h3 className="pillar-title">Client Transparency</h3>
              <p className="pillar-desc">
                Clear documentation, precise milestones, and absolute honesty in every transaction. We believe an informed client is our best partner in creating landmarks that stand the test of time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
