import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const canvasRef = useRef(null);
  
  // Animation wireframe globe
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let rotation = 0;
    
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;
      
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.6;
      
      // Cercle extérieur
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      
      // Lignes horizontales (latitudes)
      for (let i = -3; i <= 3; i++) {
        const y = centerY + (radius * i / 4);
        const halfWidth = Math.sqrt(radius * radius - Math.pow(radius * i / 4, 2));
        
        ctx.beginPath();
        ctx.ellipse(centerX, y, halfWidth, halfWidth * 0.1, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Lignes verticales (longitudes) avec rotation
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI / 4) + rotation;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * Math.abs(Math.cos(angle)), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Crosshairs
      ctx.globalAlpha = 0.4;
      ctx.strokeStyle = '#ff00ff';
      ctx.beginPath();
      ctx.moveTo(centerX - radius - 20, centerY);
      ctx.lineTo(centerX + radius + 20, centerY);
      ctx.moveTo(centerX, centerY - radius - 20);
      ctx.lineTo(centerX, centerY + radius + 20);
      ctx.stroke();
      
      // Coins de visée
      const corners = [
        { x: centerX - radius, y: centerY - radius },
        { x: centerX + radius, y: centerY - radius },
        { x: centerX - radius, y: centerY + radius },
        { x: centerX + radius, y: centerY + radius }
      ];
      
      corners.forEach(corner => {
        ctx.beginPath();
        const size = 15;
        const dirX = corner.x < centerX ? 1 : -1;
        const dirY = corner.y < centerY ? 1 : -1;
        ctx.moveTo(corner.x, corner.y);
        ctx.lineTo(corner.x + size * dirX, corner.y);
        ctx.moveTo(corner.x, corner.y);
        ctx.lineTo(corner.x, corner.y + size * dirY);
        ctx.stroke();
      });
      
      rotation += 0.003;
      animationId = requestAnimationFrame(drawGlobe);
    };
    
    resize();
    window.addEventListener('resize', resize);
    drawGlobe();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          DISPONIBLE POUR OPPORTUNITÉS
        </div>
        
        <h1 className="hero-title">
          <span className="hero-title-line">HUGO</span>
          <span className="hero-title-line hero-title-accent" data-glitch="KURDANT">KURDANT</span>
        </h1>
        
        <p className="hero-subtitle">
          <span className="typing-effect">DÉVELOPPEUR JUNIOR</span>
        </p>
        
        <p className="hero-description">
          Passionné par le code, l'univers cyberpunk et la création d'expériences web immersives.
          Spécialisé React & Backend.
        </p>
        
        <div className="hero-cta">
          <Link to="/contact" className="btn btn-primary btn-glow">
            <span>ME CONTACTER</span>
          </Link>
          <Link to="/about" className="btn btn-secondary">
            <span>EN SAVOIR +</span>
          </Link>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">15+</span>
            <span className="stat-label">Projets</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">3+</span>
            <span className="stat-label">Années passion</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">∞</span>
            <span className="stat-label">Cafés</span>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;