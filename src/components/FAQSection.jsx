import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primary specialize in premium construction and design projects across Chennai, with active developments in major hubs like Medavakkam, Anna Nagar, Perumbakkam, Sholinganallur, Madipakkam, T Nagar, and Adyar."
  },
  {
    question: "Do you offer interior design services as well?",
    answer: "Yes! We have a dedicated interior design division that handles complete premium residential and commercial interior spaces, tailored entirely to modern aesthetic standards."
  },
  {
    question: "Can we view your ongoing and completed projects?",
    answer: "Absolutely. Our interactive project portfolio highlights our structural work and layouts across different locations, featuring detailed project titles and exact municipal regions."
  },
  {
    question: "How do you handle project tracking and updates?",
    answer: "We ensure complete transparency. All active developments are regularly tracked, and we utilize direct communication channels to keep you updated on milestones, resource allocation, and timelines."
  },
  {
    question: "How can we get in touch or book a consultation?",
    answer: "You can easily connect with our team directly through the floating WhatsApp chat widget located at the bottom-right corner of your screen, or by using our quick contact form."
  },
  {
    question: "How does the 15-year structural warranty function?",
    answer: "Our warranty covers all core structural elements—including the foundation, columns, and load-bearing walls. In the unlikely event of any structural defect, our team will rectify it at zero cost to you."
  },
  {
    question: "Do you assist with coordinating home loans?",
    answer: "Yes. Our in-house legal team ensures flawless title clearance and directly helps clients coordinate with major national banks (SBI, HDFC, ICICI) to streamline the loan approval process."
  },
  {
    question: "Do you take on renovation projects?",
    answer: "While we specialize in large-scale new builds, we do review complex, large-scale structural renovations on a case-by-case basis. Reach out to our engineering team to discuss your project."
  }
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="section section-even faq-section" id="faq">
      <div className="container faq-container-width">
        
        <div className="faq-section-header">
          <div className="micro-label">✦ FREQUENTLY ASKED</div>
          <h2 className="section-title faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Quick responses to key service, project execution, and consultation enquiries.</p>
        </div>

        <div className="faq-accordion-container">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-card-item ${openFaq === index ? 'faq-item-expanded' : ''}`} 
              key={index}
            >
              <button 
                className={`faq-question-btn ${openFaq === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon-indicator">{openFaq === index ? '−' : '+'}</span>
              </button>
              
              <div className={`faq-answer-wrapper ${openFaq === index ? 'open' : ''}`}>
                <div className="faq-answer-inner">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
