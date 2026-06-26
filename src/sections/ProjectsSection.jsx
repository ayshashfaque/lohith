import React from 'react';
import './ProjectsSection.css';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Lohith Prime',
      location: 'Adyar, Chennai',
      area: '45,000 Sq.Ft',
      status: 'Completed 2024',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'The Courtyard Villas',
      location: 'ECR, Chennai',
      area: '12,000 Sq.Ft',
      status: 'Completed 2023',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Lohith Heights',
      location: 'Velachery, Chennai',
      area: '85,000 Sq.Ft',
      status: 'Completed 2022',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Aura Commercial',
      location: 'OMR, Chennai',
      area: '120,000 Sq.Ft',
      status: 'Completed 2021',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section className="section-padding projects-section">
      <div className="container">
        
        <div className="projects-header">
          <h2 className="section-title">COMPLETED PROJECTS</h2>
          <p className="section-subtitle">Explore a selection of our landmark developments across Chennai.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-thumbnail" />
                <div className="project-overlay">
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span>{project.location}</span>
                  <span className="separator">•</span>
                  <span>{project.area}</span>
                  <span className="separator">•</span>
                  <span className="status">{project.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
