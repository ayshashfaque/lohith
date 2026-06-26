import React, { useRef, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');

    // ── Step 1: Capture first frame as soon as the browser has it ──
    const captureFirstFrame = () => {
      canvas.width = video.videoWidth || 1920;
      canvas.height = video.videoHeight || 1080;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      // Canvas now holds the exact first frame — it acts as a static poster
      canvas.style.opacity = '1';
    };

    // ── Step 2: Fade canvas out once the video begins playing ──
    const fadeOutCanvas = () => {
      canvas.style.transition = 'opacity 0.4s ease';
      canvas.style.opacity = '0';
    };

    // loadeddata fires when frame 0 is available (before full load)
    video.addEventListener('loadeddata', captureFirstFrame);
    video.addEventListener('playing', fadeOutCanvas);

    // ── Step 3: IntersectionObserver — restart + play when in view ──
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset canvas opacity so it shows the first frame again on re-entry
            canvas.style.transition = 'none';
            canvas.style.opacity = '1';
            video.currentTime = 0;
            video.play().catch(() => { });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener('loadeddata', captureFirstFrame);
      video.removeEventListener('playing', fadeOutCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      {/*
        Canvas sits above the video and holds frame 0 as a static image.
        It starts invisible (opacity:0 in CSS) and is set to 1 once
        captureFirstFrame() runs — then fades to 0 when the video plays.
        This eliminates the black flash entirely.
      */}
      <canvas ref={canvasRef} className="hero-frame-canvas" aria-hidden="true" />

      <video
        ref={videoRef}
        className="hero-video"
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/video_202606251435.mp4" type="video/mp4" />
      </video>

      <div className="hero-content container">
        <div className="micro-label">✦ ESTABLISHED 2007</div>
        <h1 className="hero-title">LOHITH CONSTRUCTION</h1>
        <p className="hero-subtitle">
          Chennai's No.1 Construction Company.
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
