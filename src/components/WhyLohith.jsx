import React from 'react';
import './WhyLohith.css';

const values = [
  {
    title: 'Fixed Pricing',
    desc: 'No escalation clauses, no hidden material charges. The price on the contract is the final price you pay.'
  },
  {
    title: 'Daily Site Supervision',
    desc: 'Every site is supervised full-time by a qualified civil engineer, ensuring the blueprint is followed to the millimeter.'
  },
  {
    title: 'No Material Substitutions',
    desc: "We never drop a grade to save cost. Our suppliers are top-tier—Saint-Gobain, Ultratech, Jaquar—and that doesn't change mid-project."
  },
  {
    title: 'Legal & Title Clearance',
    desc: 'Our in-house legal team handles CMDA/DTCP approvals and title documentation before we break ground.'
  },
  {
    title: 'On-Time Handover',
    desc: 'We schedule every phase on a strict critical path, and put handover dates directly in the contract.'
  },
  {
    title: 'Third-Party Quality Sign-Off',
    desc: 'Before handover, an independent inspector checks the work—not just our own team.'
  }
];

const WhyLohith = () => {
  return (
    <section className="section section-slate why-lohith" id="values">
      <div className="container wl-container">
        
        <div className="wl-header">
          <div className="micro-label">✦ THE DIFFERENCE</div>
          <h2 className="section-title">Why Choose Lohith</h2>
        </div>

        <div className="wl-grid">
          {values.map((val, index) => (
            <div className="wl-card" key={index}>
              <div className="card-number">0{index + 1}</div>
              <h3 className="card-title">{val.title}</h3>
              <p className="card-desc">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyLohith;
