import React, { useState } from 'react';
import './FAQSection.css';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you handle both architectural design and construction?",
      answer: "Yes. We offer an end-to-end turnkey solution. Our in-house architects design the spaces, and our dedicated engineering teams execute the construction, ensuring zero translation loss between blueprint and reality."
    },
    {
      question: "How do you ensure transparency in pricing?",
      answer: "We provide a completely itemized bill of quantities before construction begins. You will know exactly what brand of cement, steel, and fittings are being used. We do not use escalation clauses for our core materials."
    },
    {
      question: "What is the typical timeline for a luxury villa?",
      answer: "A standard premium villa of 4,000 Sq.Ft takes approximately 12 to 14 months from foundation to handover. We guarantee delivery dates contractually and provide weekly progress reports."
    },
    {
      question: "Do you offer warranties on your construction?",
      answer: "Absolutely. We provide an industry-leading 15-year structural warranty and a 1-year comprehensive warranty on all electrical and plumbing fixtures."
    },
    {
      question: "Can we visit your ongoing sites?",
      answer: "Yes, we encourage it. Seeing our active construction sites is the best way to understand our commitment to quality and safety. Contact us to schedule a curated site visit."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding faq-section">
      <div className="container">
        
        <div className="faq-header">
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-subtitle">Clarity and transparency before we break ground.</p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon"></span>
              </button>
              <div className="faq-answer-wrapper" style={{ maxHeight: openIndex === index ? '200px' : '0' }}>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
