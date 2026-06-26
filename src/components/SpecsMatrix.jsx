import React from 'react';
import './SpecsMatrix.css';

const SpecsMatrix = () => {
  return (
    <section className="section section-odd specs-matrix" id="materials">
      <div className="container sm-container">
        
        <div className="sm-header">
          <div className="micro-label">✦ MATERIAL ARCHITECTURE</div>
          <h2 className="section-title">The Master Specification</h2>
          <p className="sm-subtitle">
            We partner exclusively with global industry leaders to ensure every fixture, surface, and structural element meets uncompromising standards of luxury and durability.
          </p>
        </div>

        <div className="sm-columns">
          
          <div className="sm-col">
            <h3 className="sm-col-title">Structure & Enclosure</h3>
            <ul className="sm-list">
              <li>
                <span className="spec-item">Glazing & Glasswork</span>
                <span className="spec-brand">Saint-Gobain</span>
              </li>
              <li>
                <span className="spec-item">Cement & Concrete</span>
                <span className="spec-brand">Ultratech Premium</span>
              </li>
              <li>
                <span className="spec-item">Steel Reinforcement</span>
                <span className="spec-brand">JSW Neosteel Fe-550</span>
              </li>
              <li>
                <span className="spec-item">Exterior Protective Paint</span>
                <span className="spec-brand">Asian Paints Apex Ultima</span>
              </li>
            </ul>
          </div>

          <div className="sm-col">
            <h3 className="sm-col-title">Surface & Flooring</h3>
            <ul className="sm-list">
              <li>
                <span className="spec-item">Living / Dining Tiles</span>
                <span className="spec-brand">Kajaria Eternity 800x800mm</span>
              </li>
              <li>
                <span className="spec-item">Master Bedroom</span>
                <span className="spec-brand">Premium Engineered Wood</span>
              </li>
              <li>
                <span className="spec-item">Kitchen Countertops</span>
                <span className="spec-brand">Galaxy Black Granite</span>
              </li>
              <li>
                <span className="spec-item">Balcony & Wet Areas</span>
                <span className="spec-brand">Somany Anti-Skid Ceramic</span>
              </li>
            </ul>
          </div>

          <div className="sm-col">
            <h3 className="sm-col-title">Plumbing & Electrical</h3>
            <ul className="sm-list">
              <li>
                <span className="spec-item">Sanitaryware</span>
                <span className="spec-brand">Kohler Modern Wall-Hung</span>
              </li>
              <li>
                <span className="spec-item">CP Fittings & Showers</span>
                <span className="spec-brand">Jaquar Artize Collection</span>
              </li>
              <li>
                <span className="spec-item">Modular Switches</span>
                <span className="spec-brand">Legrand / Schneider Electric</span>
              </li>
              <li>
                <span className="spec-item">Concealed Wiring</span>
                <span className="spec-brand">Finolex Fire-Retardant</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SpecsMatrix;
