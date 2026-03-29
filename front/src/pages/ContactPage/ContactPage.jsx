import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Configuration EmailJS - REMPLACER PAR TES VRAIS IDS
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',      // À remplacer
        'YOUR_TEMPLATE_ID',     // À remplacer
        form.current,
        'YOUR_PUBLIC_KEY'       // À remplacer
      );

      console.log('Email envoyé:', result.text);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset le status après 5 secondes
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('Erreur d\'envoi:', error);
      setStatus('error');
      setErrorMessage(error.text || 'Erreur lors de l\'envoi du message');
      
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <span className="page-tag">// CONTACT</span>
            <h1 className="page-title">
              ENTRONS EN<br/>
              <span className="highlight-gradient">CONNEXION</span>
            </h1>
            <p className="page-description">
              Projet, collaboration, opportunité ou simple discussion tech ?<br/>
              Envoyez-moi un message, je réponds généralement sous 24h.
            </p>
          </div>
          
          {/* Décoration Grid */}
          <div className="hero-grid-bg">
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            {/* Left Side - Contact Info */}
            <div className="contact-info-side">
              <div className="info-card">
                <div className="info-header">
                  <span className="info-tag">CONTACT_INFO</span>
                  <div className="status-indicator">
                    <span className="status-dot"></span>
                    <span className="status-text">Disponible</span>
                  </div>
                </div>
                
                <div className="info-content">
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-details">
                      <span className="info-label">Email</span>
                      <a href="mailto:contact@kurdant.fr" className="info-value">
                        contact@kurdant.fr
                      </a>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-details">
                      <span className="info-label">Localisation</span>
                      <span className="info-value">France 🇫🇷</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">⏰</div>
                    <div className="info-details">
                      <span className="info-label">Réponse</span>
                      <span className="info-value">Sous 24h</span>
                    </div>
                  </div>
                </div>
                
                <div className="info-divider"></div>
                
                <div className="social-links">
                  <span className="social-label">Retrouvez-moi sur</span>
                  <div className="social-buttons">
                    <a 
                      href="https://github.com/kurdant" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                    >
                      <span className="social-icon">💻</span>
                      GitHub
                    </a>
                    <a 
                      href="https://linkedin.com/in/kurdant" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                    >
                      <span className="social-icon">💼</span>
                      LinkedIn
                    </a>
                    <a 
                      href="https://twitter.com/kurdant" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                    >
                      <span className="social-icon">🐦</span>
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
              
              {/* FAQ rapide */}
              <div className="quick-faq">
                <h3 className="faq-title">Questions Fréquentes</h3>
                <div className="faq-list">
                  <div className="faq-item">
                    <span className="faq-q">→ Vous êtes disponible pour un projet ?</span>
                    <span className="faq-a">Oui, freelance disponible immédiatement.</span>
                  </div>
                  <div className="faq-item">
                    <span className="faq-q">→ Délai de réponse ?</span>
                    <span className="faq-a">24h maximum, souvent bien moins.</span>
                  </div>
                  <div className="faq-item">
                    <span className="faq-q">→ Type de missions ?</span>
                    <span className="faq-a">Full-stack, frontend React, ou backend Node.js.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-side">
              <div className="form-card">
                <div className="form-header">
                  <span className="form-tag">MESSAGE_TERMINAL</span>
                  <div className="form-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                
                <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        NOM / PSEUDO
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">
                        EMAIL
                        <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">
                      SUJET
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de votre message"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">
                      MESSAGE
                      <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos besoins, ou posez votre question..."
                      rows="6"
                      required
                      disabled={status === 'sending'}
                    ></textarea>
                    <span className="char-count">{formData.message.length} caractères</span>
                  </div>
                  
                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="form-message success">
                      <span className="message-icon">✓</span>
                      <span>Message envoyé avec succès ! Je vous réponds très vite.</span>
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <div className="form-message error">
                      <span className="message-icon">✗</span>
                      <span>{errorMessage || 'Erreur lors de l\'envoi. Réessayez ou contactez-moi par email.'}</span>
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className={`submit-btn ${status === 'sending' ? 'loading' : ''}`}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="loading-spinner"></span>
                        ENVOI EN COURS...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">→</span>
                        ENVOYER LE MESSAGE
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="contact-alternative">
        <div className="container">
          <div className="alternative-card">
            <h3 className="alternative-title">Préférez une approche directe ?</h3>
            <p className="alternative-text">
              Envoyez-moi directement un email à 
              <a href="mailto:contact@kurdant.fr" className="email-link"> contact@kurdant.fr</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
