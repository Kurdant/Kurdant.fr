import React from 'react';
import { siteConfig } from '../../../data/siteConfig.js';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section">
            <h3 className="glitch-effect" data-text="KURDANT.FR">
              KURDANT.FR
            </h3>
            <p>Portfolio cyberpunk de Hugo</p>
          </div>

          {/* Links */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              {Object.entries(siteConfig.nav).map(([key, item]) => (
                <li key={key}>
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footer-section">
            <h4>Social</h4>
            <div className="social-links">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hugo Kurdant. Conçu avec passion dans l'univers cyberpunk.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;