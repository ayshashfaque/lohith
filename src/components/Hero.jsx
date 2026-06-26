import React, { useRef, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Restart from the beginning every time the hero scrolls back into view
            video.currentTime = 0;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section" id="home">
      <video
        ref={videoRef}
        className="hero-video"
        muted
        playsInline
        preload="auto"
        /* No loop, no poster, no autoPlay — IntersectionObserver handles playback */
      >
        <source src="/assets/video_202606251435.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-content container">
        <div className="micro-label">✦ ESTABLISHED 2007</div>
        <h1 className="hero-title">LOHITH CONSTRUCTION</h1>
        <p className="hero-subtitle">
          Chennai's Premier Architectural Construction & Luxury Engineering Firm. We build custom luxury apartments and structural villas engineered to last for generations—backed by a 15-year structural warranty and handled by an entirely in-house team with zero subcontracting.
        </p>
        <div className="hero-actions">
          <button className="btn btn-gold">Request Estimate</button>
          <button className="btn btn-ghost">VIEW PROJECTS</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
