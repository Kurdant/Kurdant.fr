import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulation d'envoi (à remplacer par vraie API)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Side - CTA */}
          <div className="contact-cta">
            <span className="section-tag">// CONTACT</span>
            <h2 className="contact-title">
              TRAVAILLONS<br/>
              <span className="highlight">ENSEMBLE</span>
            </h2>
            
            <p className="contact-description">
              Vous avez un projet en tête ? Une opportunité à proposer ? 
              Ou juste envie de discuter tech et cyberpunk ?
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">EMAIL</span>
                <a href="mailto:contact@kurdant.fr" className="contact-value">
                  contact@kurdant.fr
                </a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">LOCALISATION</span>
                <span className="contact-value">France 🇫🇷</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">STATUT</span>
                <span className="contact-value status-available">
                  <span className="status-dot"></span>
                  Disponible
                </span>
              </div>
            </div>
            
            <div className="social-links-contact">
              <a href="https://github.com/kurdant" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/kurdant" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://twitter.com/kurdant" target="_blank" rel="noopener noreferrer" className="social-link">
                Twitter
              </a>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <span className="form-tag">MESSAGE_TERMINAL</span>
              <div className="form-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">NOM / PSEUDO</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Entrez votre nom..."
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${status === 'sending' ? 'loading' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span>ENVOI EN COURS...</span>
                ) : status === 'success' ? (
                  <span>✓ MESSAGE ENVOYÉ</span>
                ) : (
                  <span>ENVOYER →</span>
                )}
              </button>
              
              {status === 'success' && (
                <p className="success-message">
                  Merci ! Je vous réponds rapidement. 🚀
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="contact-decoration">
        <div className="grid-lines"></div>
      </div>
    </section>
  );
};

export default ContactSection;