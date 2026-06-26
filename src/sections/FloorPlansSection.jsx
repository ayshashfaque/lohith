import React, { useState } from 'react';
import './FloorPlansSection.css';

export default function FloorPlansSection() {
  const [activePlan, setActivePlan] = useState('TYPE_A');

  const plans = [
    { id: 'TYPE_A', name: 'Type A Layout', specs: '3 BHK | 1850 Sq.Ft | North Facing' },
    { id: 'TYPE_B', name: 'Type B Layout', specs: '3 BHK | 1920 Sq.Ft | East Facing' },
    { id: 'TYPE_C', name: 'Type C Layout', specs: '4 BHK Duplex | 2800 Sq.Ft | South Facing' }
  ];

  return (
    <section className="section-padding floor-plans-section">
      <div className="container">
        
        <div className="floor-plans-header">
          <h2 className="section-title">FLOOR PLANS</h2>
          <p className="section-subtitle">Meticulously engineered spaces designed for optimal light, ventilation, and family living.</p>
        </div>

        <div className="floor-plans-split">
          
          {/* Left Panel: Selectors */}
          <div className="plan-selectors">
            {plans.map(plan => (
              <button 
                key={plan.id}
                className={`plan-selector-btn ${activePlan === plan.id ? 'active' : ''}`}
                onClick={() => setActivePlan(plan.id)}
              >
                <span className="plan-name">{plan.name}</span>
                <span className="plan-specs">{plan.specs}</span>
              </button>
            ))}
          </div>

          {/* Right Panel: Blueprint Display */}
          <div className="plan-display">
            <div className="blueprint-container">
              <svg viewBox="0 0 800 600" className="vector-blueprint" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="none" stroke="var(--border-color)" strokeWidth="2" />
                <path d="M 100 100 L 700 100 L 700 500 L 100 500 Z" fill="none" stroke="rgba(255, 179, 0, 0.2)" strokeWidth="1" strokeDasharray="10 5" />
                <line x1="100" y1="300" x2="700" y2="300" stroke="var(--border-color)" strokeWidth="1" />
                <line x1="400" y1="100" x2="400" y2="500" stroke="var(--border-color)" strokeWidth="1" />
                <text x="400" y="300" fill="var(--text-secondary)" fontSize="24" textAnchor="middle" alignmentBaseline="middle" fontFamily="var(--font-display)">
                  {plans.find(p => p.id === activePlan)?.name.toUpperCase()} PREVIEW
                </text>
              </svg>
            </div>
            
            <div className="plan-action">
              <button className="btn-secondary">
                Request Quote For This Layout
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
