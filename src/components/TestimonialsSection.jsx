import React, { useEffect, useRef } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    quote: "The level of transparency we experienced was unprecedented. They didn't just build us a house; they engineered a sanctuary for our family without a single hidden cost.",
    author: "Mr. Raghavan & Family",
    initial: "R",
    role: "Homeowner",
    title: "Exceptional Quality",
    rating: 5,
  },
  {
    quote: "What impressed me most was the dedicated engineer on site. Every question was answered immediately, and the material quality exceeded our expectations.",
    author: "Mrs. Meenakshi",
    initial: "M",
    role: "Property Developer",
    title: "Outstanding Workmanship",
    rating: 5,
  },
  {
    quote: "Superior quality, customer friendly and on time delivery. The professional approach they maintained throughout the construction was outstanding.",
    author: "Aru A",
    initial: "A",
    role: "Commercial Client",
    title: "Highly Recommended",
    rating: 5,
  },
  {
    quote: "Prompt service and professional approach throughout the build process. Their team managed the project flawlessly from planning to final handover.",
    author: "Isaivani S",
    initial: "I",
    role: "Residential Project",
    title: "Professional Team",
    rating: 5,
  },
  {
    quote: "Good experience overall, satisfied with the execution. They adhered to the schedule and completed the key milestones exactly when promised.",
    author: "Kathir S",
    initial: "K",
    role: "Industrial Project",
    title: "Delivered on Time",
    rating: 5,
  },
  {
    quote: "Excellent construction quality and reliable management. The structural integrity and finishing standards are truly commendable.",
    author: "Srini Vasan",
    initial: "S",
    role: "Renovation Client",
    title: "Excellent Construction Service",
    rating: 5,
  },
  {
    quote: "Highly professional team. The finishing standards are highly commendable, and their cost-transparency made the entire process stress-free.",
    author: "Mani",
    initial: "M",
    role: "Business Owner",
    title: "Reliable & Trustworthy",
    rating: 5,
  },
  {
    quote: "Great attention to structural detail and reliable delivery timelines. I would suggest Lohith Construction to anyone looking for hassle-free building.",
    author: "Karthikeyan G R S",
    initial: "K",
    role: "Homeowner",
    title: "Highly Recommended",
    rating: 5,
  },
];

const badgeColors = [
  '#d4af37', // Gold
  '#1a365d', // Dark Blue
  '#2f855a', // Green
  '#4a5568', // Grey
  '#dd6b20', // Orange
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

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 179, 0, 0.3)';
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 179, 0, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="t-particle-canvas" />;
};

const TestimonialsSection = () => {
  return (
    <section className="t-section" id="testimonials">
      <ParticleCanvas />
      <div className="container">
        <div className="t-header">
          <h2 className="t-title">Trusted by Our Clients</h2>
          <p className="t-subheading">
            See what homeowners, businesses, and developers have to say about our quality workmanship and reliable service.
          </p>
        </div>

        <div className="t-grid">
          {testimonials.map((item, index) => {
            const badgeBg = badgeColors[index % badgeColors.length];
            return (
              <div key={index} className="t-card">
                <div className="t-badge-container">
                  <div className="t-initial-badge" style={{ backgroundColor: badgeBg }}>
                    {item.initial}
                  </div>
                </div>
                <div className="t-stars-wrapper">
                  <StarRating rating={item.rating} />
                </div>
                <h4 className="t-card-title">{item.title}</h4>
                <p className="t-quote">"{item.quote}"</p>
                <div className="t-client-info">
                  <span className="t-client-name">{item.author}</span>
                  <span className="t-client-role">{item.role}</span>
                </div>
              </div>
            );
          })}

          {/* View More Reviews Card */}
          <a
            href="https://www.google.com/search?q=lohith+construction+chennai+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="t-card t-card-viewmore"
          >
            <div className="t-viewmore-icon-wrapper">
              <svg className="t-viewmore-arrow" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div className="t-viewmore-text">
              <h3 className="t-viewmore-heading">View More</h3>
              <p className="t-viewmore-sub">Read More Client Reviews</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
