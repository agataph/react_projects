// File: src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Maaf, halaman yang Anda cari tidak tersedia.</p>
        
        <div className="action-buttons">
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;