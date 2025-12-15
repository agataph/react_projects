import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  // ulStyle ini bisa dihapus atau di-override oleh CSS global
  // Kita akan menggunakan CSS eksternal sekarang
  // const ulStyle = { /* ... */ }; 

  return (
    <nav className="app-nav"> {/* Tambahkan class "app-nav" */}
      <ul className="nav-list"> {/* Tambahkan class "nav-list" */}
        <li className="nav-item"><Link to="/" className="nav-link">Dashboard</Link></li>
        <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
        <li className="nav-item">
          {isAuthenticated ? (
            <Link to="/logout" className="nav-link">Logout</Link>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;