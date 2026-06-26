import React, { useState, useRef, useEffect } from 'react';
import './TechnicalSpecsSection.css';

export default function TechnicalSpecsSection() {
  const [activeSpec, setActiveSpec] = useState('structural');
  const scrollRef = useRef(null);

  const specs = [
    {
      id: 'structural',
      title: 'Structural System',
      details: [
        'Seismic Zone III Compliant RCC Framed Structure.',
        'Anti-termite treatment at foundation level.',
        'Solid concrete blocks for inner and outer walls.',
        'Premium grade TMT steel bars for reinforcement.'
      ]
    },
    {
      id: 'finishes',
      title: 'Floor Finishes',
      details: [
        'Imported Italian Marble in living and dining areas.',
        'Anti-skid premium ceramic tiles in bathrooms.',
        'Wooden laminate flooring in master bedroom.',
        'Granite countertops in the kitchen.'
      ]
    },
    {
      id: 'sanitary',
      title: 'Sanitary & Plumbing',
      details: [
        'CPVC pipes for concealed water lines.',
        'UPVC pipes for external water lines.',
        'Kohler / Grohe premium bath fixtures.',
        'Wall-mounted EWC with concealed cisterns.'
      ]
    },
    {
      id: 'electrical',
      title: 'Electrical Infrastructure',
      details: [
        '3-phase power supply with individual meters.',
        'Concealed copper wiring (Finolex/Polycab).',
        'Modular switches (Legrand/Schneider).',
        'Provision for EV charging arrays in parking.'
      ]
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollTop;
      const sectionHeight = scrollRef.current.scrollHeight / specs.length;
      const activeIndex = Math.min(Math.floor(scrollPos / sectionHeight), specs.length - 1);
      setActiveSpec(specs[activeIndex].id);
    }
  };

  const scrollToSpec = (index) => {
    if (scrollRef.current) {
      const sectionHeight = scrollRef.current.scrollHeight / specs.length;
      scrollRef.current.scrollTo({ top: index * sectionHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="slide-section specs-section">
      <div className="geometric-grid">
        
        <div style={{ gridColumn: '1 / 13', paddingBottom: '24px' }}>
          <h2 className="section-heading">TECHNICAL SPECIFICATIONS</h2>
        </div>

        <div className="specs-layout" style={{ gridColumn: '1 / 13' }}>
          
          <div className="specs-nav">
            <div className="sticky-anchor">
              <h3 className="anchor-title">INDEX</h3>
              <ul className="anchor-list">
                {specs.map((spec, index) => (
                  <li key={spec.id}>
                    <button 
                      className={`anchor-btn ${activeSpec === spec.id ? 'active' : ''}`}
                      onClick={() => scrollToSpec(index)}
                    >
                      0{index + 1} / {spec.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="specs-content" ref={scrollRef} onScroll={handleScroll}>
            {specs.map((spec, index) => (
              <div key={spec.id} className="spec-block">
                <div className="spec-number">0{index + 1}</div>
                <h3 className="spec-title">{spec.title}</h3>
                <ul className="spec-details">
                  {spec.details.map((detail, idx) => (
                    <li key={idx} className="spec-detail-item">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
