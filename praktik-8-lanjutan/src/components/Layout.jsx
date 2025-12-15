// components/Layout.jsx (MODIFIKASI)

import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from './Nav';

const Layout = () => {
  return (
    // Tambahkan class "app-layout"
    <div className="app-layout"> 
      <header className="app-header"> {/* Tambahkan class "app-header" */}
        <h1 className="app-title">My Application</h1> {/* Tambahkan class "app-title" */}
        <Nav />
      </header>
      <main className="app-main"> {/* Tambahkan class "app-main" */}
        <Outlet />
      </main>
      <footer className="app-footer"> {/* Tambahkan class "app-footer" */}
        <p>&copy; 2025 My Application</p>
      </footer>
    </div>
  );
};

export default Layout;