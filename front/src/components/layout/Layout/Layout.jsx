import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import ScanLines from '../ScanLines/ScanLines.jsx';
import GrainEffect from '../GrainEffect/GrainEffect.jsx';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Effets d'ambiance cyberpunk */}
      <ScanLines />
      <GrainEffect />
      
      {/* Structure principale */}
      <Navbar />
      
      <main className="main-content">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;