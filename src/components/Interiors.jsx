import React from 'react';
import './Interiors.css';

const interiorDesigns = [
  {
    image: "/projects/IMG_3312.jpeg",
    title: "Luxe Lounge Suite",
    subtitle: "Warm Oak & Brass accents",
    variant: "variant-1"
  },
  {
    image: "/projects/IMG_3313.jpeg",
    title: "Monolithic Kitchen",
    subtitle: "Brushed Steel & Charcoal Marble",
    variant: "variant-2"
  },
  {
    image: "/projects/IMG_3314.jpeg",
    title: "Minimalist Bedroom",
    subtitle: "Soft Textures & Ambient Shadow Play",
    variant: "variant-3"
  },
  {
    image: "/projects/IMG_3315.jpeg",
    title: "Executive Den",
    subtitle: "Deep Walnut Panels & Recessed Lighting",
    variant: "variant-1"
  },
  {
    image: "/projects/IMG_3315 (1).jpeg",
    title: "Atrium Gallery",
    subtitle: "Floating Steps & High Ceilings",
    variant: "variant-2"
  },
  {
    image: "/projects/IMG_3316.jpeg",
    title: "Pinnacle Dining Hall",
    subtitle: "Glass-morphic Table & Chandelier",
    variant: "variant-3"
  },
  {
    image: "/projects/IMG_3317.jpeg",
    title: "Veranda Lounge",
    subtitle: "Indoor Palms & Woven Screen",
    variant: "variant-1"
  },
  {
    image: "/projects/IMG_3318.jpeg",
    title: "Sanctuary Ensuite",
    subtitle: "Matte Black Fixtures & Terrazzo",
    variant: "variant-2"
  },
  {
    image: "/projects/IMG_3319.jpeg",
    title: "Modernist Foyer",
    subtitle: "Architectural Pivoting Portal",
    variant: "variant-3"
  },
  {
    image: "/projects/IMG_3320.jpeg",
    title: "Skyline Penthouse",
    subtitle: "Double-height Glazing & Concrete Loft",
    variant: "variant-1"
  },
  {
    image: "/projects/IMG_3321.jpeg",
    title: "Culinary Studio",
    subtitle: "Seamless White Quartz Countertop",
    variant: "variant-2"
  }
];

const Interiors = () => {
  return (
    <section className="interiors-page" id="interiors">
      <div className="interiors-header">
        <h2 className="interiors-title">LOHITH INTERIORS</h2>
        <p className="interiors-subheading">
          Explore our exclusive gallery of bespoke interior designs, where clean geometric lines meet warm luxury lighting.
        </p>
      </div>
      <div className="interiors-grid">
        {interiorDesigns.map((item, idx) => (
          <div key={idx} className={`interior-card ${item.variant}`}>
            <div className="interior-img-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="interior-img"
                loading="lazy"
              />
              <div className="interior-overlay" />
            </div>
            <div className="interior-details">
              <h3 className="interior-headline">{item.title}</h3>
              <span className="interior-subtitle">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interiors;
