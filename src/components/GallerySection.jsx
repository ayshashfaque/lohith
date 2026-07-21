import React, { useState, useEffect, useRef } from 'react';
import './GallerySection.css';

const galleryImages = [
  {
    src: '/projects/IMG_3314.jpeg',
    title: 'Minimalist Bedroom',
    location: 'Medavakkam, Chennai',
    desc: 'An ultra-sleek sleeping chamber featuring low-profile custom furniture and warm acoustical panel work.',
    category: 'Bedroom'
  },
  {
    src: '/projects/1 (3).jpeg',
    title: 'Luxe Lounge Suite',
    location: 'Perumbakkam, Chennai',
    desc: 'A bespoke living area featuring luxury wall paneling, custom brass accents, and recessed LED warmth.',
    category: 'Living Room'
  },
  {
    src: '/projects/IMG_3321.jpeg',
    title: 'Culinary Studio',
    location: 'Besant Nagar, Chennai',
    desc: 'Secondary gourmet arena complete with high-capacity extraction systems and bespoke islands.',
    category: 'Kitchen'
  },
  {
    src: '/projects/1 (7).jpeg',
    title: 'Executive Den',
    location: 'T Nagar, Chennai',
    desc: 'Sophisticated private study featuring leather seating, smart automation, and integrated library shelving.',
    category: 'Home Office'
  },
  {
    src: '/projects/IMG_3316.jpeg',
    title: 'Pinnacle Dining Hall',
    location: 'Anna Nagar, Chennai',
    desc: 'A grand dining room crafted with rare stonework, custom chandeliers, and elegant wall finishes.',
    category: 'Dining Room'
  },
  {
    src: '/projects/1 (1).jpeg',
    title: 'Sanctuary Ensuite',
    location: 'Perumbakkam, Chennai',
    desc: 'A spa-grade master bath highlighting floating concrete vanities, rainfall fixtures, and a walk-in glass shower.',
    category: 'Bathroom'
  },
  {
    src: '/projects/1 (6).jpeg',
    title: 'Veranda Lounge',
    location: 'Sholinganallur, Chennai',
    desc: 'Semi-outdoor relaxation deck integrating natural landscaping with premium weather-resistant finishes.',
    category: 'Outdoor'
  },
  {
    src: '/projects/jap.jpeg',
    title: 'Skyline Penthouse',
    location: 'Nungambakkam, Chennai',
    desc: 'Double-volume ceiling heights featuring premium floor-to-ceiling panoramic glass work and open-plan living.',
    category: 'Penthouse'
  },
  {
    src: '/projects/1 (2).jpeg',
    title: 'Monolithic Kitchen',
    location: 'ECR, Chennai',
    desc: 'High-end culinary space boasting marble waterfall counters, hidden storage, and professional cooking gear.',
    category: 'Kitchen'
  },
  {
    src: '/projects/1 (5).jpeg',
    title: 'Modernist Foyer',
    location: 'Velachery, Chennai',
    desc: 'A high-impact entry space with custom structural metal elements and premium geometric stone flooring.',
    category: 'Foyer'
  },
  {
    src: '/projects/1 (4).jpeg',
    title: 'Premium Living Space',
    location: 'Adyar, Chennai',
    desc: 'A thoughtfully designed living space featuring rich textures, curated lighting, and bespoke millwork.',
    category: 'Living Room'
  },
  {
    src: '/projects/1 (8).jpeg',
    title: 'Signature Suite',
    location: 'Medavakkam, Chennai',
    desc: 'A refined residential suite showcasing artful composition, bespoke cabinetry, and premium material finishes.',
    category: 'Bedroom'
  },
  {
    src: '/projects/1 (9).jpeg',
    title: 'Heritage Courtyard',
    location: 'Velachery, Chennai',
    desc: 'An elegant courtyard-inspired layout blending classical motifs with contemporary luxury detailing.',
    category: 'Outdoor'
  },
  {
    src: '/projects/1 (10).jpeg',
    title: 'Grand Master Suite',
    location: 'Perumbakkam, Chennai',
    desc: 'A lavish master bedroom retreat featuring bespoke furniture, statement lighting, and artisan wall textures.',
    category: 'Bedroom'
  },
  {
    src: '/projects/1 (11).jpeg',
    title: 'Designer Kitchen',
    location: 'Sholinganallur, Chennai',
    desc: 'A precision-crafted modular kitchen with integrated appliances, statement backsplash, and premium countertops.',
    category: 'Kitchen'
  },
  {
    src: '/projects/1 (12).jpeg',
    title: 'Refined Living Hall',
    location: 'Anna Nagar, Chennai',
    desc: 'A spacious, light-filled living hall finished with curated art, statement furniture, and ambient lighting.',
    category: 'Living Room'
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
