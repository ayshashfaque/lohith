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

    const captureFirstFrame = () => {
      canvas.width = video.videoWidth || 1920;
      canvas.height = video.videoHeight || 1080;
      try {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      } catch (e) {
        // Fallback if video isn't ready
      }
    };

    const handlePlaying = () => {
      canvas.style.display = 'none';
    };

    video.addEventListener('loadeddata', captureFirstFrame);
    video.addEventListener('playing', handlePlaying);

    // Play video automatically
    const playVideo = () => {
      video.play().then(() => {
        canvas.style.display = 'none';
      }).catch(() => {});
    };
    
    // Trigger video play
    if (video.readyState >= 2) {
      captureFirstFrame();
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo);
      video.addEventListener('loadedmetadata', playVideo);
    }

    // Touch/click interaction fallback to bypass low-power mode or strict autoplay restrictions
    const enablePlayOnTouch = () => {
      if (video.paused) {
        video.play().then(() => {
          canvas.style.display = 'none';
          cleanupTouchListeners();
        }).catch(() => {});
      } else {
        cleanupTouchListeners();
      }
    };

    const cleanupTouchListeners = () => {
      document.removeEventListener('touchstart', enablePlayOnTouch);
      document.removeEventListener('click', enablePlayOnTouch);
    };

    document.addEventListener('touchstart', enablePlayOnTouch, { passive: true });
    document.addEventListener('click', enablePlayOnTouch, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
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
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('playing', handlePlaying);
      cleanupTouchListeners();
      observer.disconnect();
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        
        {/* Layer 1: Filtered Background Video & Canvas static poster */}
        <div className="hero-media-wrapper hero-video-card">
          <canvas ref={canvasRef} className="hero-frame-canvas" aria-hidden="true" />
          <video
            ref={videoRef}
            className="hero-video"
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
            disableRemotePlayback
            x-webkit-airplay="deny"
          >
            <source src="/assets/videos/no.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Layer 2: Legibility Shield (smooth charcoal gradient) */}
        <div className="hero-legibility-shield" aria-hidden="true" />

        {/* Layer 3: Typography & Content */}
        <div className="hero-content">
          <div className="hero-typography">
            <div className="hero-label">✦ ESTABLISHED 2007</div>
            <h1 className="hero-title">LOHITH CONSTRUCTION</h1>
            <p className="hero-subtitle">
              Chennai’s No.1 Construction Company.
            </p>
          </div>
          <div className="hero-actions">
            <a href="#connect" className="btn btn-hero-primary">Request Estimate</a>
            <a href="#portfolio" className="btn btn-hero-secondary">VIEW PROJECTS</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
