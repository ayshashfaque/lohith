import React, { useState } from 'react';
import './ProjectsPortfolio.css';

const portfolioMockups = [
  {
    id: 1,
    category: "Active Launches",
    title: "LOHITH SELVAN FLATS",
    location: "Medavakkam, Chennai",
    details: "Premium 2 & 3 BHK residential apartments built for modern city living. Swift connectivity to the OMR IT corridor, top schools, and major commercial hubs.",
    status: "CMDA Approved | 100% Vastu | Ready to Move (Q4 2026)",
    ctaText: "Explore Floor Plans",
    image: "/assets/images/flagship-launch-exterior.jpg"
  },
  {
    id: 2,
    category: "Completed Luxury",
    title: "THE COURTYARD VILLAS",
    location: "ECR, Chennai",
    details: "Bespoke, high-end architectural beachside villas. Engineered with custom structural layouts and premium imported finishes. Delivered with zero cost overruns.",
    status: "100% Handed Over",
    ctaText: "View Case Study",
    image: "/assets/images/project-courtyard-villas.jpg"
  },
  {
    id: 3,
    category: "Commercial Structural",
    title: "GRADE-A OFFICE SPACE",
    location: "OMR Phase 2, Chennai",
    details: "45,000 sq.ft. modern corporate workspace. Engineered for heavy load capacities and strict fire compliance. Handed over three weeks ahead of schedule.",
    status: "Delivered Ahead of Schedule",
    ctaText: "Enquire About Specs",
    image: "/assets/images/project-lohith-prime.jpg"
  }
];

const ProjectsPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioMockups.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === portfolioMockups.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = portfolioMockups[currentIndex];

  return (
    <section className="projects-portfolio" id="portfolio">
      
      {/* Part 1: The Top Animated Anchor Strip */}
      <div className="pp-anchor-strip">
        <div className="pp-video-layer">
          <div className="pp-css-animation"></div>
        </div>
        <div className="pp-typography-layer">
          <h2 className="pp-title">✦ PROJECTS PORTFOLIO ✦</h2>
        </div>
      </div>

      {/* Part 2: Content Carousel Layer */}
      <div className="pp-carousel-layer section-slate">
        <div className="container pp-carousel-container">
          
          <button className="pp-nav-arrow left" onClick={handlePrev} aria-label="Previous">
            &#8592;
          </button>

          <div className="pp-mockup-display">
            {/* Card Image */}
            <div className="pp-card-image-wrapper">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="pp-card-image"
              />
              <div className="pp-card-image-overlay">
                <span className="pp-card-category">✦ {currentSlide.category}</span>
              </div>
            </div>
            {/* Card Body */}
            <div className="pp-card-body">
              <h3 className="pp-mockup-title">{currentSlide.title}</h3>
              <p className="pp-mockup-location">{currentSlide.location}</p>
              <div className="pp-mockup-divider"></div>
              <p className="pp-mockup-details">{currentSlide.details}</p>
              <div className="pp-mockup-status">
                <span>{currentSlide.status}</span>
              </div>
              <button className="btn btn-gold pp-cta-btn">{currentSlide.ctaText}</button>
            </div>
          </div>

          <button className="pp-nav-arrow right" onClick={handleNext} aria-label="Next">
            &#8594;
          </button>

        </div>

        {/* Slide indicators */}
        <div className="pp-dots">
          {portfolioMockups.map((_, i) => (
            <button
              key={i}
              className={`pp-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProjectsPortfolio;
