import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="error-content">
          <h1 className="glitch-effect" data-text="404">
            404
          </h1>
          <h2>Page not found</h2>
          <p>La page que vous cherchez n'existe pas dans cette réalité cyberpunk.</p>
          <Link to="/" className="btn btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;