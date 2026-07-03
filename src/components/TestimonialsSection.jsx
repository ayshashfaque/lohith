import React, { useState, useEffect, useRef } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    quote: "Wonderful service from start to finish. Our Munnar trip was perfectly organized and deeply relaxing.",
    author: "Anjali Nair",
    role: "Verified Buyer",
    rating: 5
  },
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

const StarRating = ({ rating }) => (
  <div className="t-stars">
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} viewBox="0 0 24 24" className={`t-star ${i < rating ? 'filled' : 'empty'}`}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Responsive items-per-view detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalSlides, isPaused]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="section section-odd testimonials-section" id="testimonials">
      <div className="container">
        
        {/* Review rating header summary */}
        <div className="testimonials-header">
          <div className="endorsement-headline-badge">
            <span className="stars-glow">⭐⭐⭐⭐⭐</span>
            <span className="badge-text">Based on 100+ Happy Homeowners</span>
          </div>
          <h2 className="section-title testimonials-title">CLIENT ENDORSEMENTS</h2>
          <p className="testimonials-subheading">Unfiltered testimonials highlighting our structural precision and absolute cost-transparency.</p>
        </div>

        {/* Carousel Container */}
        <div 
          className="testimonials-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <button className="t-nav-arrow left" onClick={handlePrev} aria-label="Previous testimonials">
            &#8592;
          </button>

          <div className="t-cards-window">
            <div 
              className="t-cards-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {testimonials.map((item, idx) => (
                <div 
                  key={idx} 
                  className="t-card"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="t-card-content">
                    <StarRating rating={item.rating} />
                    <p className="t-quote">"{item.quote}"</p>
                    <div className="t-author-details">
                      <span className="t-name">{item.author}</span>
                      <span className="t-role">{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="t-nav-arrow right" onClick={handleNext} aria-label="Next testimonials">
            &#8594;
          </button>

        </div>

        {/* Carousel indicators */}
        <div className="t-indicators">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              className={`t-indicator ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide group ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
