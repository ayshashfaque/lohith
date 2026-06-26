import React from 'react';
import './WhyLohithSection.css';

export default function WhyLohithSection() {
  const reasons = [
    {
      id: '01',
      title: 'Dedicated Engineer',
      desc: 'A senior site engineer is permanently assigned to your project, ensuring seamless execution and eliminating third-party miscommunication.'
    },
    {
      id: '02',
      title: 'Transparent Pricing',
      desc: 'Itemized billing and clear structural milestones. We guarantee zero hidden costs from foundation to final handover.'
    },
    {
      id: '03',
      title: 'On-time Delivery',
      desc: 'Rigorous schedule management powered by internal labor forces, ensuring your keys are handed over precisely on the promised date.'
    },
    {
      id: '04',
      title: 'Premium Materials',
      desc: 'Uncompromising selection of raw materials. From TMT steel to Italian marble, every component is rigorously tested for longevity.'
    },
    {
      id: '05',
      title: 'Real-time Updates',
      desc: 'Weekly photographic reports and direct architectural briefings keep you connected to your homes progress from anywhere in the world.'
    },
    {
      id: '06',
      title: '15-Year Warranty',
      desc: 'Our confidence in our structural integrity is backed by an industry-leading 15-year warranty on all foundational and structural elements.'
    }
  ];

  return (
    <section className="section-padding why-lohith-section">
      <div className="container">
        
        <div className="why-header">
          <h2 className="section-title">WHY LOHITH</h2>
          <p className="section-subtitle">The standard of excellence we bring to every development.</p>
        </div>

        <div className="editorial-cards-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="editorial-card">
              <div className="card-index">{reason.id}</div>
              <h3 className="card-title">{reason.title}</h3>
              <p className="card-desc">{reason.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
