// File: src/pages/ProductDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Data produk dummy (sama seperti di Products.jsx)
const products = [
  { id: 1, name: 'Laptop', price: 12000000, category: 'Electronics', description: 'Laptop gaming berperforma tinggi.' },
  { id: 2, name: 'Smartphone', price: 5000000, category: 'Electronics', description: 'Smartphone dengan kamera terbaik di kelasnya.' },
  { id: 3, name: 'Headphones', price: 800000, category: 'Electronics', description: 'Headphone dengan fitur noise cancelling.' },
  { id: 4, name: 'Book', price: 150000, category: 'Education', description: 'Buku panduan lengkap React JS.' },
  { id: 5, name: 'Desk Lamp', price: 300000, category: 'Home', description: 'Lampu meja LED hemat energi.' },
];

const ProductDetail = () => {
  // Mengambil parameter ID dari URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Mencari produk berdasarkan ID
  const product = products.find(p => p.id === parseInt(id));

  // Jika produk tidak ditemukan, tampilkan pesan error
  if (!product) {
    return (
      <div className="page product-detail-page">
        <h1>Product Not Found</h1>
        <p>Produk dengan ID: {id} tidak tersedia.</p>
        <button onClick={() => navigate('/products')} className="btn btn-primary">
          Kembali ke Daftar Produk
        </button>
      </div>
    );
  }

  return (
    <div className="page product-detail-page">
      <h1>&#128717;&#65039; {product.name}</h1>
      <div className="product-detail">
        <div className="product-info">
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> Rp {product.price.toLocaleString('id-ID')}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
        
        <div className="product-actions">
          <button onClick={() => navigate('/products')} className="btn btn-secondary">
            &larr; Back to Products
          </button>
          <button className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;