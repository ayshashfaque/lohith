import React, { useEffect } from 'react';
import initParticles from '../utils/particleEngine';

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('particle-bg');
    if (canvas) {
      initParticles(canvas);
    }
  }, []);

  return <canvas id="particle-bg" />;
};

export default ParticleBackground;
