import React, { useState, useEffect } from 'react';
import './Footer.css';

const testimonials = [
  {
    quote: "The attention to structural detail is unparalleled. They delivered our bespoke villa in ECR exactly on schedule, with zero cost overruns.",
    author: "Dr. Vikram S.",
    role: "Client, Courtyard Villas"
  },
  {
    quote: "Lohith Construction brings a level of corporate transparency rarely seen in residential real estate. Flawless execution from blueprint to handover.",
    author: "Priya R.",
    role: "Client, Lohith Prime"
  },
  {
    quote: "We chose them for their absolute refusal to compromise on core materials. The 15-year warranty isn't just paper; it's the build quality speaking.",
    author: "Arjun M.",
    role: "Client, Custom Residential"
  }
];

const faqs = [
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

const Footer = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <>
      <section className="section section-odd social-proof-faq">
        <div className="container spf-container">
          
          <div className="testimonials-col">
            <div className="micro-label">✦ CLIENT ENDORSEMENTS</div>
            <div className="testimonial-carousel">
              {testimonials.map((test, index) => (
                <div 
                  key={index} 
                  className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
                >
                  <p className="testimonial-quote">"{test.quote}"</p>
                  <div className="testimonial-author">
                    <span className="author-name">{test.author}</span>
                    <span className="author-role">{test.role}</span>
                  </div>
                </div>
              ))}
              <div className="carousel-indicators">
                {testimonials.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`indicator ${idx === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(idx)}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div className="faq-col">
            <div className="micro-label">✦ FREQUENTLY ASKED</div>
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <button 
                    className={`faq-question ${openFaq === index ? 'open' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <footer className="footer section-even">
        <div className="container footer-container">
          
          <div className="footer-col brand-col">
            <h3 className="footer-logo">LOHITH</h3>
            <p className="footer-tagline">Building Beyond Lifetimes.</p>
            <p className="footer-cert">RERA Registered.</p>
          </div>
          
          <div className="footer-col links-col">
            <h4>Divisions</h4>
            <a href="#">Residential Luxury</a>
            <a href="#">Commercial Structural</a>
            <a href="#">Custom Villas</a>
          </div>
          
          <div className="footer-col links-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Engineering Standard</a>
            <a href="#">Careers</a>
            <a href="https://www.instagram.com/lohithconstruction/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>

        </div>
        
        <div className="footer-bottom">
          <div className="container fb-container">
            <p>© 2026 Lohith Construction Co. All rights reserved.</p>
            <p><a href="https://www.instagram.com/intellex.web/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>meet the developers</a></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
