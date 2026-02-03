import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../../data/projectsData.js';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// PROJETS</span>
          <h2 className="section-title">CRÉATIONS</h2>
        </div>
        
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <article key={project.id} className="project-card" style={{ '--index': index }}>
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.links.demo !== '#' && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        DEMO ↗
                      </a>
                    )}
                    {project.links.github !== '#' && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        GITHUB ↗
                      </a>
                    )}
                  </div>
                </div>
                <span className="project-status">{project.status}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-number">
                {String(index + 1).padStart(2, '0')}
              </div>
            </article>
          ))}
        </div>
        
        <div className="projects-cta">
          <Link to="/projects" className="btn btn-secondary">
            VOIR TOUS LES PROJETS →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;