import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page home-page">
      <h1>&#127968; Welcome to Our Website!</h1>
      <p>Ini adalah halaman home menggunakan React Router.</p>

      <div className="feature-cards">
        {/* Card 1: About Us */}
        <div className="card">
          <h3>&#128214; About Us</h3>
          <p>Pelajari lebih lanjut tentang perusahaan kami.</p>
          <Link to="/about" className="btn btn-primary">
            Learn More
          </Link>
        </div>

        {/* Card 2: Products */}
        <div className="card">
          <h3>&#128717;&#65039; Products</h3>
          <p>Jelajahi koleksi produk kami!</p>
          <Link to="/products" className="btn btn-primary">
            View Products
          </Link>
        </div>

        {/* Card 3: Contact */}
        <div className="card">
          <h3>&#128222; Contact</h3>
          <p>Hubungi kami untuk informasi lebih lanjut.</p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;