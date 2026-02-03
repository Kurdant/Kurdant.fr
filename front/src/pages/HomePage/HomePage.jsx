import React from 'react';
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  BlogSection,
  GamesSection,
  ContactSection
} from '../../components/sections/index.jsx';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <GamesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;