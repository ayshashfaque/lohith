import React, { useEffect, useRef, useState } from 'react';
import './GoldenCursor.css';

const GoldenCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    // Check if device supports fine mouse pointer (desktop mouse)
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) return;

    let animId;
    const mouse = { x: -100, y: -100 };
    const glowPos = { x: -100, y: -100 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Inner dot tracks mouse position directly (1:1 instant response)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = (e) => {
      setIsMouseDown(true);
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-5), newRipple]);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('btn') ||
          (target.closest && target.closest('a, button, .btn, [role="button"]')))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const animate = () => {
      // Outer trailing ring follows mouse with smooth lag / easing
      glowPos.x += (mouse.x - glowPos.x) * 0.15;
      glowPos.y += (mouse.y - glowPos.y) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.x}px, ${glowPos.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  // Clean up click ripples
  useEffect(() => {
    if (ripples.length === 0) return;
    const timer = setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);
    return () => clearTimeout(timer);
  }, [ripples]);

  return (
    <div className={`golden-cursor-wrapper ${isVisible ? 'visible' : ''}`}>
      {/* Outer trailing ring with clean radial glow */}
      <div
        ref={glowRef}
        className={`golden-cursor-glow ${isHovered ? 'hovered' : ''} ${isMouseDown ? 'active' : ''}`}
      />

      {/* Inner direct precision dot */}
      <div
        ref={dotRef}
        className={`golden-cursor-dot ${isHovered ? 'hovered' : ''} ${isMouseDown ? 'active' : ''}`}
      />

      {/* Golden light click burst ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="golden-cursor-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </div>
  );
};

export default GoldenCursor;
