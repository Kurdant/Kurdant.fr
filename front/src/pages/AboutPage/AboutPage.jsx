import React from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../../data/aboutData.js';
import { skillsData } from '../../data/skillsData.js';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section avec Profil */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            {/* Carte d'identité complète */}
            <div className="profile-card">
              <div className="profile-header">
                <span className="profile-tag">PROFILE_SYSTEM</span>
                <span className="profile-status">
                  <span className="status-dot"></span>
                  {aboutData.availability}
                </span>
              </div>
              
              <div className="profile-avatar">
                <div className="avatar-frame-large">
                  <div className="avatar-placeholder-large">
                    <span>HK</span>
                  </div>
                  <div className="avatar-scan-line"></div>
                </div>
              </div>
              
              <div className="profile-info">
                <h1 className="profile-name">{aboutData.name}</h1>
                <p className="profile-title">{aboutData.title}</p>
                <p className="profile-tagline">{aboutData.tagline}</p>
                <p className="profile-location">📍 {aboutData.location}</p>
              </div>
              
              <div className="profile-stats-grid">
                {Object.entries(aboutData.stats).map(([key, value]) => (
                  <div key={key} className="profile-stat">
                    <span className="stat-value-large">{value}</span>
                    <span className="stat-label-small">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="profile-barcode">
                <span>SUBJECT_A-01</span>
                <div className="barcode-lines">
                  ||||| ||| |||| || ||||| ||| |||| |
                </div>
              </div>
            </div>
            
            {/* Bio Section */}
            <div className="bio-section">
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="terminal-title">ABOUT.txt</span>
                  <div className="terminal-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="terminal-body">
                  <p className="terminal-text">
                    <span className="text-prompt">{'>'}</span> Initializing profile...
                  </p>
                  <div className="bio-content">
                    {aboutData.longBio.split('\n').map((paragraph, index) => 
                      paragraph.trim() && (
                        <p key={index} className="bio-paragraph">{paragraph.trim()}</p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences détaillée */}
      <section className="skills-detailed-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">// COMPÉTENCES</span>
            <h2 className="section-title">STACK TECHNIQUE</h2>
          </div>
          
          <div className="skills-grid">
            {skillsData.categories.map((category, catIndex) => (
              <div key={catIndex} className="skill-category-card">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.name}</h3>
                </div>
                
                <div className="skills-list-detailed">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item-detailed">
                      <div className="skill-header-detailed">
                        <div className="skill-name-wrapper">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-detailed">
                        <div 
                          className="skill-progress-detailed" 
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="skill-glow"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Objectifs */}
      <section className="goals-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">// OBJECTIFS</span>
            <h2 className="section-title">MISSION EN COURS</h2>
          </div>
          
          <div className="goals-grid">
            {aboutData.goals.map((goal, index) => (
              <div key={index} className="goal-card" style={{ '--index': index }}>
                <div className="goal-number">0{index + 1}</div>
                <p className="goal-text">{goal}</p>
                <div className="goal-status">
                  <span className="status-bar"></span>
                  <span className="status-text">IN PROGRESS</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Intérêts */}
      <section className="interests-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">// PASSIONS</span>
            <h2 className="section-title">AU-DELÀ DU CODE</h2>
          </div>
          
          <div className="interests-cloud">
            {aboutData.interests.map((interest, index) => (
              <div 
                key={index} 
                className="interest-bubble"
                style={{ 
                  '--delay': `${index * 0.1}s`,
                  '--size': `${0.8 + Math.random() * 0.4}`
                }}
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">
              INTÉRESSÉ PAR MON PROFIL ?
            </h2>
            <p className="cta-text">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-glow">
                <span>ME CONTACTER</span>
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                <span>VOIR MES PROJETS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
