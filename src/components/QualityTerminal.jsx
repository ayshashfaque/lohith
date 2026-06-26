import React, { useState } from 'react';
import './QualityTerminal.css';

const tabData = [
  {
    id: 'sub-structure',
    title: '01. Sub-Structure Integrity',
    specs: [
      { label: 'Soil Testing', value: 'Geotechnical Analysis Certified' },
      { label: 'Foundation', value: 'Deep Pile / Raft Framework' },
      { label: 'Anti-Termite', value: 'Pre-construction chemical treatment' },
      { label: 'Concrete Mix', value: 'RMC M25 Grade blended with integrated liquid waterproofing compounds' }
    ]
  },
  {
    id: 'super-structure',
    title: '02. Super-Structure Framework',
    specs: [
      { label: 'Steel Reinforcement', value: 'Certified JSW Neosteel Fe-550 High-Strength Rebar' },
      { label: 'Curing Discipline', value: 'Strict 14-day daily-logged wet curing process managed by on-site engineers' },
      { label: 'Wall Infrastructure', value: 'Insulated AAC blocks for a lighter overall structural load and better thermal insulation' }
    ]
  },
  {
    id: 'premium-finishing',
    title: '03. Premium Finishing Standards',
    specs: [
      { label: 'Wall Artistry', value: 'Triple-coat interior putty work & Asian Paints Apex Ultima weather-proof exterior coats' },
      { label: 'Architectural Flooring', value: 'Kajaria Eternity 800x800mm living room tiles & warm engineered wood for bedrooms' },
      { label: 'Advanced Waterproofing', value: 'Multi-layered membrane waterproofing on all wet areas and terraces with a 10-year leak-proof warranty' },
      { label: 'Electrical', value: 'Concealed fire-retardant Finolex wiring paired with sleek Legrand modular switches' },
      { label: 'Final Quality Check', value: 'Independent structural inspection and complete snag sign-off before handover' }
    ]
  }
];

const QualityTerminal = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section section-odd quality-terminal" id="engineering">
      <div className="container qt-container">

        <div className="qt-header">

          <h2 className="section-title">ENGINEERING STANDARDS</h2>
          <p className="qt-subtitle">
            Explore the structural integrity and premium material specifications embedded at every layer of a Lohith build.
          </p>
        </div>

        <div className="qt-dashboard">

          <div className="qt-sidebar">
            {tabData.map((tab, index) => (
              <button
                key={tab.id}
                className={`qt-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="tab-progress">
                  <div className="progress-line"></div>
                </div>
                <span className="tab-title">{tab.title}</span>
              </button>
            ))}
          </div>

          <div className="qt-viewer">
            <div className="viewer-header">
              <h3>{tabData[activeTab].title}</h3>
              <span className="status-badge">VERIFIED STANDARD</span>
            </div>

            <div className="viewer-content">
              {tabData[activeTab].specs.map((spec, i) => (
                <div className="spec-row" key={i}>
                  <div className="spec-label">{spec.label}</div>
                  <div className="spec-value">{spec.value}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default QualityTerminal;
