import React from 'react';
import { Link } from 'react-router-dom';
import { gamesData } from '../../../data/gamesData.js';
import './GamesSection.css';

const GamesSection = () => {
  return (
    <section className="games-section" id="games">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// ARCADE</span>
          <h2 className="section-title">MINI-JEUX</h2>
          <p className="section-subtitle">
            Des jeux browser créés avec Canvas API - Style rétro arcade
          </p>
        </div>
        
        <div className="games-carousel">
          {gamesData.map((game, index) => (
            <div 
              key={game.id} 
              className={`game-card ${!game.playable ? 'coming-soon' : ''}`}
              style={{ '--accent-color': game.color, '--index': index }}
            >
              <div className="game-screen">
                <div className="game-placeholder" style={{ background: `linear-gradient(135deg, ${game.color}33, var(--color-bg-tertiary))` }}>
                  <span className="game-icon">🎮</span>
                </div>
                
                {!game.playable && (
                  <div className="game-coming-soon">
                    <span>COMING SOON</span>
                  </div>
                )}
                
                <div className="scanlines-overlay"></div>
              </div>
              
              <div className="game-info">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.description}</p>
                
                {game.playable ? (
                  <Link to={`/games/${game.id}`} className="game-play-btn">
                    <span className="play-icon">▶</span>
                    JOUER
                  </Link>
                ) : (
                  <button className="game-play-btn disabled" disabled>
                    BIENTÔT
                  </button>
                )}
              </div>
              
              <div className="game-frame-corner top-left"></div>
              <div className="game-frame-corner top-right"></div>
              <div className="game-frame-corner bottom-left"></div>
              <div className="game-frame-corner bottom-right"></div>
            </div>
          ))}
        </div>
        
        <div className="games-cta">
          <Link to="/games" className="btn btn-primary btn-glow">
            <span>🕹️ ENTRER DANS L'ARCADE</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;