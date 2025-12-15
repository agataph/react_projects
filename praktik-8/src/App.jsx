// File: src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import komponen layout dan pages
import Layout from './components/Layout';
import Home from './pages/Home'; 
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail'; 
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper untuk semua halaman */}
        <Route path="/" element={<Layout />}>
          
          {/* Rute Halaman Utama (Home) */}
          <Route index element={<Home />} /> 
          
          {/* Rute Halaman Statis */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Rute Produk */}
          <Route path="products" element={<Products />} />
          {/* Rute Produk Detail (dinamis berdasarkan ID) */}
          <Route path="products/:id" element={<ProductDetail />} />
          
          {/* Rute Catch-all (404 Not Found) */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;