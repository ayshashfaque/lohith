import React, { useState } from 'react';
import './TestimonialsSection.css';

// Generates a data-URI SVG avatar with the reviewer's initials
const buildInitialsAvatar = (name) => {
  const words = name.trim().split(/\s+/);
  const initials = words.length >= 2
    ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#0e1014"/>
      <rect x="1" y="1" width="198" height="198" fill="none" stroke="%23ffb300" stroke-width="1.5"/>
      <text
        x="100" y="115"
        font-family="Georgia, serif"
        font-size="72"
        fill="%23ffb300"
        text-anchor="middle"
        dominant-baseline="middle"
        letter-spacing="4"
      >${initials}</text>
    </svg>`;

  return `data:image/svg+xml,${svg.trim().replace(/\n\s*/g, ' ')}`;
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mr. Raghavan & Family",
      project: "Lohith Prime, Adyar",
      rating: 5,
      quote: "The level of transparency we experienced was unprecedented. They didn't just build us a house; they engineered a sanctuary for our family without a single hidden cost.",
      thumbnail: "/assets/ChatGPT Image Jun 25, 2026, 03_12_38 PM.png"
    },
    {
      id: 2,
      name: "Mrs. Meenakshi",
      project: "The Courtyard Villas, ECR",
      rating: 5,
      quote: "What impressed me most was the dedicated engineer on site. Every question was answered immediately, and the material quality exceeded our expectations.",
      thumbnail: "/assets/e793362f-54cc-4119-816a-b481497e2aee.png"
    },
    {
      id: 3,
      name: "Aru A",
      project: "Verified Client",
      rating: 5,
      quote: "Superior quality, customer friendly and on time delivery.",
      thumbnail: null
    },
    {
      id: 4,
      name: "Isaivani S",
      project: "Verified Client",
      rating: 5,
      quote: "Prompt service and professional approach throughout the build process.",
      thumbnail: null
    },
    {
      id: 5,
      name: "Kathir S",
      project: "Verified Client",
      rating: 4,
      quote: "Good experience overall, satisfied with the execution.",
      thumbnail: null
    },
    {
      id: 6,
      name: "Srini Vasan",
      project: "Verified Client",
      rating: 5,
      quote: "Excellent construction quality and reliable management.",
      thumbnail: null
    },
    {
      id: 7,
      name: "Mani",
      project: "Verified Client",
      rating: 5,
      quote: "Highly professional team. The finishing standards are highly commendable.",
      thumbnail: null
    },
    {
      id: 8,
      name: "Karthikeyan G R S",
      project: "Verified Client",
      rating: 5,
      quote: "Great attention to structural detail and reliable delivery timelines.",
      thumbnail: null
    }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const activeT = testimonials[activeIndex];

  // Resolve thumbnail — use real photo if available, else render initials SVG
  const resolvedThumbnail = activeT.thumbnail ?? buildInitialsAvatar(activeT.name);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        viewBox="0 0 24 24"
        className={`star-icon ${index < rating ? 'filled' : 'empty'}`}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <section className="section-padding testimonials-section">
      <div className="container">

        <div className="testimonials-header">
          <h2 className="section-title">CLIENT REVIEWS</h2>
        </div>

        <div className="testimonial-carousel">
          <div className="testimonial-video-col">
            <div className="video-thumbnail-wrapper">
              <img
                src={resolvedThumbnail}
                alt={activeT.name}
                className={`video-thumbnail${!activeT.thumbnail ? ' avatar-mode' : ''}`}
              />
              {/* Only show play button for entries that have a real photo */}
              {activeT.thumbnail && (
                <div className="play-button-overlay">
                  <div className="play-triangle"></div>
                </div>
              )}
            </div>
          </div>

          <div className="testimonial-content-col">
            <div className="testimonial-rating">
              {renderStars(activeT.rating)}
            </div>

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