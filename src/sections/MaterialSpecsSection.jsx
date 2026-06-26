import React from 'react';
import './MaterialSpecsSection.css';

export default function MaterialSpecsSection() {
  const specs = [
    { category: 'Structure', detail: 'Seismic Zone III compliant RCC framed structure using premium TMT.' },
    { category: 'Flooring', detail: 'Imported Italian Marble in living spaces. Premium anti-skid ceramic tiles in wet areas.' },
    { category: 'Doors', detail: 'Solid Teak wood main door. Flush doors with premium veneer finishes internally.' },
    { category: 'Windows', detail: 'Heavy-duty UPVC or Aluminum double-glazed soundproof windows.' },
    { category: 'Electrical', detail: 'Concealed fire-resistant copper wiring with modular Schneider/Legrand switches.' },
    { category: 'Plumbing', detail: 'Kohler/Grohe CP fittings. Wall-mounted EWC with concealed cisterns.' },
    { category: 'Paint', detail: 'Premium emulsion paint over putty finish for interiors. Weather-proof exterior paint.' },
    { category: 'Steel', detail: 'Fe550 Grade TMT bars ensuring maximum tensile strength.' },
    { category: 'Concrete', detail: 'Ready-mix concrete of M25/M30 grades tailored for load-bearing walls.' },
    { category: 'Waterproofing', detail: 'Multi-layer chemical waterproofing in all bathrooms, balconies, and terraces.' },
    { category: 'EV Charging', detail: 'Dedicated provisions for 3-phase high-speed EV chargers in parking.' }
  ];

  return (
    <section className="section-padding specs-section">
      <div className="container">
        
        <div className="specs-editorial-layout">
          <div className="specs-header-col">
            <h2 className="section-title">MATERIAL SPECIFICATIONS</h2>
            <p className="specs-subtitle">
              We do not compromise on the unseen. Every material selected is tested for longevity, safety, and aesthetic timelessness.
            </p>
          </div>
          
          <div className="specs-list-col">
            {specs.map((spec, index) => (
              <div key={index} className="spec-row">
                <h3 className="spec-category">{spec.category}</h3>
                <p className="spec-detail">{spec.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
