import React from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../../../data/aboutData.js';
import { skillsData } from '../../../data/skillsData.js';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// À PROPOS</span>
          <h2 className="section-title">QUI SUIS-JE ?</h2>
        </div>
        
        <div className="about-grid">
          {/* Fiche d'identité cyberpunk */}
          <div className="identity-card">
            <div className="card-header">
              <span className="card-tag">SUBJECT_A-01</span>
              <span className="card-status">● ONLINE</span>
            </div>
            
            <div className="card-avatar">
              <div className="avatar-frame">
                <div className="avatar-placeholder">
                  <span>HK</span>
                </div>
              </div>
            </div>
            
            <div className="card-info">
              <h3 className="card-name">{aboutData.name}</h3>
              <p className="card-title">{aboutData.title}</p>
              <p className="card-location">📍 {aboutData.location}</p>
            </div>
            
            <div className="card-stats">
              {Object.entries(aboutData.stats).map(([key, value]) => (
                <div key={key} className="card-stat">
                  <span className="card-stat-value">{value}</span>
                  <span className="card-stat-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                </div>
              ))}
            </div>
            
            <div className="card-barcode">
              ||||| ||| |||| || ||||| |||
            </div>
          </div>
          
          {/* Contenu texte */}
          <div className="about-content">
            <p className="about-bio">{aboutData.shortBio}</p>
            
            <div className="about-interests">
              <h4>Centres d'intérêt</h4>
              <div className="interest-tags">
                {aboutData.interests.map((interest, index) => (
                  <span key={index} className="interest-tag">{interest}</span>
                ))}
              </div>
            </div>
            
            {/* Skills Preview */}
            <div className="skills-preview">
              <h4>Compétences clés</h4>
              {skillsData.categories.slice(0, 2).map((category, catIndex) => (
                <div key={catIndex} className="skill-category">
                  <span className="category-name">{category.icon} {category.name}</span>
                  <div className="skills-list">
                    {category.skills.slice(0, 3).map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-header">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn btn-secondary about-cta">
              VOIR PROFIL COMPLET →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;