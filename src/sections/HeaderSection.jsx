import React, { useState } from 'react';
import './HeaderSection.css';

export default function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = [
    { label: 'Home', id: 'hero-section' },
    { label: 'Estimate', id: 'free-estimate' },
    { label: 'Story', id: 'our-story' },
    { label: 'Projects', id: 'current-launch' },
    { label: 'Plans', id: 'floor-plans' },
    { label: 'Why Us', id: 'why-lohith' },
    { label: 'Materials', id: 'materials' },
    { label: 'Completed', id: 'projects' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header className="header-section">
      <div className="container header-inner">
        <div className="logo">LOHITH</div>
        <nav className="nav-links desktop-only">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id); }}>{l.label}</a>
          ))}
        </nav>
        <button className="btn-primary header-cta" onClick={() => scrollTo('free-estimate')}>Request Free Estimate</button>
        <button className="hamburger mobile-only" onClick={toggleMenu} aria-label="Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}>
          <div className="mobile-menu" onClick={e => e.stopPropagation()}>
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id); }}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
