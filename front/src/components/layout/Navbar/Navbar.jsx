import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../../data/siteConfig.js';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-brand">
          <span className="glitch-effect" data-text="KURDANT.FR">
            KURDANT.FR
          </span>
        </Link>

        {/* Navigation Links */}
        <div className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          {Object.entries(siteConfig.nav).map(([key, item]) => (
            <Link
              key={key}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;