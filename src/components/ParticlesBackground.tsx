'use client'
import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle properties
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }> = [];

    const PARTICLE_COUNT = 30;
    const PARTICLE_RADIUS = 1.5;
    const PARTICLE_SPEED = 0.3;

    // Create particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * PARTICLE_RADIUS,
        vx: (Math.random() - 0.5) * PARTICLE_SPEED,
        vy: (Math.random() - 0.5) * PARTICLE_SPEED,
      });
    }

    // Draw dark gradient with pink glow
    const drawGradient = () => {
      // Background gradient (dark)
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, '#000000');
      bgGradient.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Pink glow in top-right
      const glowGradient = ctx.createRadialGradient(
        canvas.width * 0.8, // x0 - moved to top right
        canvas.height * 0.2, // y0
        0, // r0
        canvas.width * 0.8, // x1
        canvas.height * 0.2, // y1
        canvas.width * 0.6 // r1
      );
      
      glowGradient.addColorStop(0, 'rgba(255, 182, 193, 0.15)'); // Baby pink center
      glowGradient.addColorStop(0.3, 'rgba(255, 192, 203, 0.1)'); // Lighter pink
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Fade to transparent

      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    const animate = () => {
      // Clear with very dark background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.95)'; // More opaque for darker look
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGradient();

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle (very subtle white)
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
      });

      // Draw connecting lines (very subtle pink)
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 182, 193, ${0.1 * (1 - distance / 100)})`; // Baby pink lines
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ParticlesBackground;