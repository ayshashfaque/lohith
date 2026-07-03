import React, { useState, useEffect } from 'react';
import './ProjectsPortfolio.css';

const projectsData = [
  {
    id: "lohith-selvan",
    name: "Lohith Selvan Flats",
    location: "Medavakkam, Chennai",
    status: "On-Going",
    config: "3 BHK Only",
    images: [
      "/projects/bc5ea388-f91a-4d9c-9c3b-a7c45e653aec.jpeg",
      "/projects/527b63bd-fa3a-42a7-a24f-185e3eefb05a.jpeg"
    ],
    isSoldOut: false
  },
  {
    id: "happy-homes",
    name: "Happy Homes",
    location: "Perumbakkam, Chennai",
    status: "On-Going",
    config: "3 BHK Only",
    images: [
      "/projects/IMG_2758.jpeg",
      "/projects/IMG_2759.jpeg"
    ],
    isSoldOut: false
  },
  {
    id: "dar-al-barakah",
    name: "Dar Al-Barakah",
    location: "Perumbakkam, Chennai",
    status: "On-Going",
    config: "2 BHK & 3 BHK",
    images: [
      "/projects/4be8e3c9-f4b4-40a2-85f9-dedb3bd184a3.jpeg",
      "/projects/a2558bee-ed7c-4bf8-8268-340e9fb6c962.jpeg"
    ],
    isSoldOut: false
  },
  {
    id: "individual-villa",
    name: "Individual House",
    location: "Anna Nagar, Chennai",
    status: "Completed",
    config: "Premium Villa",
    images: [
      "/projects/IMG_2760.jpeg",
      "/projects/IMG_2761.jpeg",
      "/projects/IMG_2762.jpeg"
    ],
    isSoldOut: true
  }
];

const ProjectsPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [currentIndex]);

  const handlePrevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const imagesCount = projectsData[currentIndex].images.length;
    setImageIndex((prev) => (prev === 0 ? imagesCount - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const imagesCount = projectsData[currentIndex].images.length;
    setImageIndex((prev) => (prev === imagesCount - 1 ? 0 : prev + 1));
  };

  const currentProject = projectsData[currentIndex];

  const getWhatsAppLink = (projectName) => {
    const text = encodeURIComponent(`Hi Lohith Construction, I am interested in knowing more about the "${projectName}" project.`);
    return `https://wa.me/919381034355?text=${text}`;
  };

  return (
    <section className="projects-portfolio" id="portfolio">
      
      {/* Part 1: Top Animated Anchor Strip */}
      <div className="pp-anchor-strip">
        <div className="pp-video-layer">
          <div className="pp-css-animation"></div>
        </div>
        <div className="pp-typography-layer">
          <h2 className="pp-title">PROJECT PORTFOLIO</h2>
        </div>
      </div>

      {/* Part 2: Content Carousel Layer */}
      <div className="pp-carousel-layer">
        <div className="container pp-carousel-container">
          
          <button className="pp-nav-arrow left" onClick={handlePrevProject} aria-label="Previous Project">
            &#8592;
          </button>

          <div className={`pp-mockup-display ${currentProject.isSoldOut ? 'sold-out-card' : ''}`}>
            
            {/* Image Column (Left) */}
            <div className="pp-card-image-wrapper">
              <img
                src={currentProject.images[imageIndex]}
                alt={`${currentProject.name} Render ${imageIndex + 1}`}
                className="pp-card-image"
              />

              {currentProject.isSoldOut && (
                <div className="sold-out-typography-overlay">
                  <div className="sold-out-mask-text">SOLD OUT</div>
                </div>
              )}

              {currentProject.images.length > 1 && (
                <>
                  <button className="pp-img-arrow left" onClick={handlePrevImage} aria-label="Previous Image">&#8249;</button>
                  <button className="pp-img-arrow right" onClick={handleNextImage} aria-label="Next Image">&#8250;</button>
                  <div className="pp-img-dots">
                    {currentProject.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`pp-img-dot ${idx === imageIndex ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setImageIndex(idx); }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content Column (Right) */}
            <div className="pp-card-body">
              <h3 className="pp-mockup-title">{currentProject.name}</h3>
              
              {/* Grouped meta row: Location • Config • Status */}
              <div className="pp-mockup-meta">
                <span className="pp-meta-location">📍 {currentProject.location}</span>
                <span className="pp-meta-separator">•</span>
                <span className="pp-meta-config">{currentProject.config}</span>
                <span className="pp-meta-separator">•</span>
                {currentProject.status === "On-Going" ? (
                  <span className="pp-meta-status ongoing">⟳ On-Going</span>
                ) : (
                  <span className="pp-meta-status completed">✓ Completed</span>
                )}
              </div>

              <div className="pp-mockup-divider"></div>

              {/* Single unified CTA */}
              <div className="pp-actions-group">
                <a 
                  href={getWhatsAppLink(currentProject.name)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-gold pp-cta-btn"
                >
                  Inquire Now
                </a>
              </div>
            </div>

          </div>

          <button className="pp-nav-arrow right" onClick={handleNextProject} aria-label="Next Project">
            &#8594;
          </button>

        </div>

        <div className="pp-dots">
          {projectsData.map((_, i) => (
            <button
              key={i}
              className={`pp-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProjectsPortfolio;
