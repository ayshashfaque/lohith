import React, { useState } from 'react';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mr. Raghavan & Family",
      project: "Lohith Prime, Adyar",
      quote: "The level of transparency we experienced was unprecedented. They didn't just build us a house; they engineered a sanctuary for our family without a single hidden cost.",
      thumbnail: "/assets/ChatGPT Image Jun 25, 2026, 03_12_38 PM.png"
    },
    {
      id: 2,
      name: "Mrs. Meenakshi",
      project: "The Courtyard Villas, ECR",
      quote: "What impressed me most was the dedicated engineer on site. Every question was answered immediately, and the material quality exceeded our expectations.",
      thumbnail: "/assets/e793362f-54cc-4119-816a-b481497e2aee.png"
    }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  
  const activeT = testimonials[activeIndex];

  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        
        <div className="testimonials-header">
          <h2 className="section-title">CLIENT TESTIMONIALS</h2>
        </div>

        <div className="testimonial-carousel">
          <div className="testimonial-video-col">
            <div className="video-thumbnail-wrapper">
              <img src={activeT.thumbnail} alt={activeT.name} className="video-thumbnail" />
              <div className="play-button-overlay">
                <div className="play-triangle"></div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-content-col">
            <blockquote className="testimonial-quote">
              "{activeT.quote}"
            </blockquote>
            
            <div className="testimonial-author">
              <h4 className="author-name">{activeT.name}</h4>
              <p className="author-project">{activeT.project}</p>
            </div>

            <div className="carousel-controls">
              <button className="nav-btn prev-btn" onClick={handlePrev}>&larr; PREV</button>
              <button className="nav-btn next-btn" onClick={handleNext}>NEXT &rarr;</button>
            </div>
            
            <div className="testimonials-action" style={{ marginTop: '48px' }}>
              <button className="btn-secondary">Read More Stories</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
