import React, { useState, useEffect } from 'react';
import './Footer.css';

const testimonials = [
  {
    quote: "The level of transparency we experienced was unprecedented. They didn't just build us a house; they engineered a sanctuary for our family without a single hidden cost.",
    author: "Mr. Raghavan & Family",
    role: "Lohith Prime, Adyar",
    rating: 5
  },
  {
    quote: "What impressed me most was the dedicated engineer on site. Every question was answered immediately, and the material quality exceeded our expectations.",
    author: "Mrs. Meenakshi",
    role: "The Courtyard Villas, ECR",
    rating: 5
  },
  {
    quote: "Superior quality, customer friendly and on time delivery.",
    author: "Aru A",
    role: "Verified Client",
    rating: 5
  },
  {
    quote: "Prompt service and professional approach throughout the build process.",
    author: "Isaivani S",
    role: "Verified Client",
    rating: 5
  },
  {
    quote: "Good experience overall, satisfied with the execution.",
    author: "Kathir S",
    role: "Verified Client",
    rating: 4
  },
  {
    quote: "Excellent construction quality and reliable management.",
    author: "Srini Vasan",
    role: "Verified Client",
    rating: 5
  },
  {
    quote: "Highly professional team. The finishing standards are highly commendable.",
    author: "Mani",
    role: "Verified Client",
    rating: 5
  },
  {
    quote: "Great attention to structural detail and reliable delivery timelines.",
    author: "Karthikeyan G R S",
    role: "Verified Client",
    rating: 5
  }
];

// Render 5 SVG stars — gold filled, translucent empty
const StarRating = ({ rating }) => (
  <div className="endorsement-stars">
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} viewBox="0 0 24 24" className={`e-star ${i < rating ? 'filled' : 'empty'}`}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);



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
            <div className="micro-label">✦ CUSTOMER TESTIMONIALS</div>
            <div className="testimonial-carousel">
              {testimonials.map((test, index) => (
                <div 
                  key={index} 
                  className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
                >
                  <StarRating rating={test.rating} />
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
