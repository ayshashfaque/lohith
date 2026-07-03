import React, { useEffect, useRef } from 'react';
import './AirplaneGridView.css';

const AirplaneGridView = () => {
  const canvasRef = useRef(null);
  
  // Track mouse coordinates for cursor trail and mouse parallax
  const mouseRef = useRef({ x: 0, y: 0, rawX: 0, rawY: 0 });
  const trailRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let scrollY = window.scrollY;
    let frameCount = 0;

    // Handle viewport resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Track scroll
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track mouse
    const handleMouseMove = (e) => {
      // Capture actual positions
      mouseRef.current.rawX = e.clientX;
      mouseRef.current.rawY = e.clientY;
      
      // Interpolated parallax mouse
      mouseRef.current.x = (e.clientX - window.innerWidth / 2);
      mouseRef.current.y = (e.clientY - window.innerHeight / 2);

      // Spawn golden trail particles
      const particleCount = 2; // spawn a couple of particles per move event for density
      for (let i = 0; i < particleCount; i++) {
        trailRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          alpha: 1.0,
          size: 4 + Math.random() * 5,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          decay: 0.015 + Math.random() * 0.015
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Node count and grid configurations
    const fgNodeCount = 60;
    const bgNodeCount = 120;
    const maxConnectionDist = 200; // maximum distance for connection links

    // Helper to generate random coordinates mapping outside the bounds
    const getRandomCoord = (limit) => {
      return (Math.random() * (limit + 400)) - 200;
    };

    // 1. Foreground Web Nodes (larger, brighter, interactive)
    const fgNodes = [];
    for (let i = 0; i < fgNodeCount; i++) {
      fgNodes.push({
        baseX: Math.random() * (window.innerWidth + 200) - 100,
        baseY: Math.random() * (window.innerHeight + 1000) - 100,
        x: 0,
        y: 0,
        size: 1.2 + Math.random() * 1.0, // 1.2px to 2.2px
        isAmber: Math.random() < 0.20, // 20% subset are warm amber
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        phaseSpeed: 0.005 + Math.random() * 0.01,
        driftRange: 30 + Math.random() * 30, // floating range
        breathPhase: Math.random() * Math.PI * 2,
        breathSpeed: 0.01 + Math.random() * 0.015,
        baseOpacity: 0.45 + Math.random() * 0.25, // primary resting opacity (boosted)
        opacity: 0
      });
    }

    // 2. Deep Matrix Web Nodes (dense, dim, microscopic background)
    const bgNodes = [];
    for (let i = 0; i < bgNodeCount; i++) {
      bgNodes.push({
        baseX: Math.random() * (window.innerWidth + 200) - 100,
        baseY: Math.random() * (window.innerHeight + 1500) - 100,
        x: 0,
        y: 0,
        size: 0.6 + Math.random() * 0.6, // 0.6px to 1.2px
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        phaseSpeed: 0.002 + Math.random() * 0.004,
        driftRange: 15 + Math.random() * 15,
        opacity: 0.15 + Math.random() * 0.15
      });
    }

    // Active firing pulses list
    let activePulses = [];
    const triggerFiringPulse = () => {
      if (activePulses.length >= 6) return;

      // Select a random foreground node
      const startIdx = Math.floor(Math.random() * fgNodes.length);
      const startNode = fgNodes[startIdx];

      // Find nearby nodes
      const neighbors = [];
      fgNodes.forEach((node, idx) => {
        if (idx === startIdx) return;
        const dx = node.x - startNode.x;
        const dy = node.y - startNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxConnectionDist) {
          neighbors.push(node);
        }
      });

      if (neighbors.length === 0) return;

      // Select target neighbor
      const endNode = neighbors[Math.floor(Math.random() * neighbors.length)];
      
      activePulses.push({
        startNode,
        endNode,
        progress: 0,
        speed: 0.02 + Math.random() * 0.025,
        color: startNode.isAmber ? 'rgba(245, 158, 11, 0.9)' : 'rgba(255, 255, 255, 0.9)'
      });
    };

    // Animation Loop
    const draw = () => {
      // Clear with background transparency so it overlay-blends
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      // Trigger neural signals
      if (Math.random() < 0.018) {
        triggerFiringPulse();
      }

      // Parallax offsets
      const deepScrollOffset = scrollY * 0.1;
      const foreScrollOffset = scrollY * 0.3;
      
      // Low-latency mouse shift
      const mouseParallaxX = mouseRef.current.x * 0.02;
      const mouseParallaxY = mouseRef.current.y * 0.02;

      // ─── Step 1: Draw Deep Matrix Web Nodes (Background Layer) ───
      ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
      bgNodes.forEach(node => {
        // Drift math using sine/cosine offsets
        const driftX = Math.sin(frameCount * node.phaseSpeed + node.phaseX) * node.driftRange;
        const driftY = Math.cos(frameCount * node.phaseSpeed + node.phaseY) * node.driftRange;
        
        node.x = node.baseX + driftX;
        node.y = node.baseY + driftY - deepScrollOffset;

        ctx.globalAlpha = node.opacity;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0; // reset

      // Update positions for Foreground Web Nodes
      fgNodes.forEach(node => {
        const driftX = Math.sin(frameCount * node.phaseSpeed + node.phaseX) * node.driftRange;
        const driftY = Math.cos(frameCount * node.phaseSpeed + node.phaseY) * node.driftRange;
        
        // Add scroll and mouse parallax displacement
        node.x = node.baseX + driftX + mouseParallaxX;
        node.y = node.baseY + driftY - foreScrollOffset + mouseParallaxY;

        // Breathe luminescence cycle
        const breathe = Math.sin(frameCount * node.breathSpeed + node.breathPhase) * 0.12;
        node.opacity = Math.max(0.08, node.baseOpacity + breathe);
      });

      // ─── Step 2: Draw Connecting Axons (Foreground links) ───
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'; // visible organic lines
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      
      for (let i = 0; i < fgNodes.length; i++) {
        const nodeA = fgNodes[i];
        for (let j = i + 1; j < fgNodes.length; j++) {
          const nodeB = fgNodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDist) {
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
          }
        }
      }
      ctx.stroke();

      // ─── Step 3: Draw Active Firing Pulses ───
      activePulses.forEach((pulse, index) => {
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          activePulses.splice(index, 1);
          return;
        }

        const x = pulse.startNode.x + (pulse.endNode.x - pulse.startNode.x) * pulse.progress;
        const y = pulse.startNode.y + (pulse.endNode.y - pulse.startNode.y) * pulse.progress;

        ctx.fillStyle = pulse.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = pulse.color;
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0; // reset glow
      });

      // ─── Step 4: Draw Foreground Synaptic Nodes ───
      fgNodes.forEach(node => {
        const glowColor = node.isAmber 
          ? `rgba(245, 158, 11, ${node.opacity + 0.1})` 
          : `rgba(255, 255, 255, ${node.opacity})`;
          
        ctx.fillStyle = glowColor;

        if (node.isAmber) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = 'rgba(245, 158, 11, 0.6)';
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0; // reset
      });

      // ─── Step 5: Draw Interactive Golden Cursor Trail ───
      const trail = trailRef.current;
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.alpha -= p.decay;
        p.size -= 0.08;
        p.x += p.vx;
        p.y += p.vy;

        if (p.alpha <= 0 || p.size <= 0) {
          trail.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha * 0.75})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0; // reset

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="airplane-grid-canvas" />;
};

export default AirplaneGridView;
