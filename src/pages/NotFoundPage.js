import React from 'react';
import '../styles/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">Sorry, the page you are looking for does not exist or has been moved.</p>
        <a href="/" className="not-found-button">Go Back to Home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;