import React, { useState, useEffect, useRef } from 'react';
import './GallerySection.css';

const galleryImages = [
  {
    src: '/projects/IMG_3312.jpeg',
    title: 'Luxe Lounge Suite',
    location: 'Adyar, Chennai',
    desc: 'A bespoke living area featuring luxury wall paneling, custom brass accents, and recessed LED warmth.',
    category: 'Living Room'
  },
  {
    src: '/projects/IMG_3313.jpeg',
    title: 'Monolithic Kitchen',
    location: 'ECR, Chennai',
    desc: 'High-end culinary space boasting marble waterfall counters, hidden storage, and professional cooking gear.',
    category: 'Kitchen'
  },
  {
    src: '/projects/IMG_3314.jpeg',
    title: 'Minimalist Bedroom',
    location: 'Anna Nagar, Chennai',
    desc: 'An ultra-sleek sleeping chamber featuring low-profile custom furniture and acoustical panel work.',
    category: 'Bedroom'
  },
  {
    src: '/projects/IMG_3315.jpeg',
    title: 'Executive Den',
    location: 'T Nagar, Chennai',
    desc: 'Sophisticated private study featuring leather seating, smart automation, and integrated library shelving.',
    category: 'Home Office'
  },
  {
    src: '/projects/IMG_3316.jpeg',
    title: 'Pinnacle Dining Hall',
    location: 'Sholinganallur, Chennai',
    desc: 'A grand dining room crafted with rare onyx stonework, custom chandeliers, and mirrored walls.',
    category: 'Dining Room'
  },
  {
    src: '/projects/IMG_3317.jpeg',
    title: 'Veranda Lounge',
    location: 'Medavakkam, Chennai',
    desc: 'Semi-outdoor relaxation deck integrating natural landscaping with premium weather-resistant finishes.',
    category: 'Outdoor'
  },
  {
    src: '/projects/IMG_3318.jpeg',
    title: 'Sanctuary Ensuite',
    location: 'Perumbakkam, Chennai',
    desc: 'A spa-grade master bath highlighting floating concrete vanities, rainfall fixtures, and walk-in glass shower.',
    category: 'Bathroom'
  },
  {
    src: '/projects/IMG_3319.jpeg',
    title: 'Modernist Foyer',
    location: 'Velachery, Chennai',
    desc: 'A high-impact entry space with custom structural metal elements and premium geometric stone flooring.',
    category: 'Foyer'
  },
  {
    src: '/projects/IMG_3320.jpeg',
    title: 'Skyline Penthouse',
    location: 'Nungambakkam, Chennai',
    desc: 'Double-volume ceiling heights featuring premium floor-to-ceiling panoramic glass work.',
    category: 'Penthouse'
  },
  {
    src: '/projects/IMG_3321.jpeg',
    title: 'Culinary Studio',
    location: 'Besant Nagar, Chennai',
    desc: 'Secondary gourmet arena complete with high-capacity extraction systems and bespoke islands.',
    category: 'Kitchen'
  }
];

const GalleryCard = ({ img, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggleFlip = (e) => {
    // Toggle state for touch screens or tap controls
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`gallery-item ${isFlipped ? 'flipped' : ''}`}
      onClick={handleToggleFlip}
      style={{ transitionDelay: `${(index % 5) * 80}ms` }}
    >
      <div className="gallery-card-inner">
        {/* Front Face: Image Only */}
        <div className="gallery-card-front">
          <img
            src={img.src}
            alt={img.title}
            loading="lazy"
            className="gallery-img"
          />
        </div>

        {/* Back Face: Details */}
        <div className="gallery-card-back">
          <div className="gallery-back-content">
            <span className="gallery-card-tag">{img.category}</span>
            <h3 className="gallery-card-title">{img.title}</h3>
            <span className="gallery-card-location">📍 {img.location}</span>
            <div className="gallery-divider" />
            <p className="gallery-card-desc">{img.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function GallerySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('gallery-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="gallery-section" id="gallery">
      <div className="gallery-ambient-glow" />
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">Gallery</h2>
          <p className="gallery-subheading">
            A balanced grid showcase of premium architectural interior spaces, exhibiting detail and design.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <GalleryCard key={i} img={img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
