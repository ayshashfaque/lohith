import React from 'react';
import './ProjectsPortfolio.css';

const projectsData = [
  {
    id: "lohith-selvan",
    name: "Lohith Selvan Flats",
    location: "Medavakkam, Chennai",
    image: "/projects/bc5ea388-f91a-4d9c-9c3b-a7c45e653aec.jpeg",
    isSoldOut: false
  },
  {
    id: "happy-homes",
    name: "Happy Homes",
    location: "Perumbakkam, Chennai",
    image: "/projects/IMG_2758.jpeg",
    isSoldOut: false
  },
  {
    id: "dar-al-barakah",
    name: "Dar Al-Barakah",
    location: "Perumbakkam, Chennai",
    image: "/projects/4be8e3c9-f4b4-40a2-85f9-dedb3bd184a3.jpeg",
    isSoldOut: false
  },
  {
    id: "individual-villa",
    name: "Individual House",
    location: "Anna Nagar, Chennai",
    image: "/projects/IMG_2760.jpeg",
    isSoldOut: true
  }
];

const ProjectsPortfolio = () => {
  const getWhatsAppLink = (projectName) => {
    const text = encodeURIComponent(`Hi Lohith Construction, I am interested in knowing more about the "${projectName}" project.`);
    return `https://wa.me/919381034355?text=${text}`;
  };

  // Duplicate elements to create a seamless infinite marquee effect
  const marqueeData = [...projectsData, ...projectsData, ...projectsData, ...projectsData];

  return (
    <section className="projects-portfolio" id="portfolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">PROJECT PORTFOLIO</h2>
      </div>

      <div className="portfolio-marquee-container">
        <div className="portfolio-marquee-track">
          {marqueeData.map((project, idx) => (
            <a
              key={idx}
              href={getWhatsAppLink(project.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card"
            >
              <div className="portfolio-img-wrapper">
                <img
                  src={project.image}
                  alt={project.name}
                  className="portfolio-img"
                  loading="lazy"
                />
                {project.isSoldOut && (
                  <div className="portfolio-soldout-badge">SOLD OUT</div>
                )}
              </div>
              <div className="portfolio-details">
                <h3 className="portfolio-headline">{project.name}</h3>
                <span className="portfolio-location">📍 {project.location}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
