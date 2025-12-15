import React, { useState } from 'react';
import './App.css';

// Import gambar dari assets
import adminImg from './assets/admin.png';
import userImg from './assets/user1.png';
import laptopImg from './assets/laptop.png';
import phoneImg from './assets/phone.png';
import bookImg from './assets/book.png';
import mouseImg from './assets/mouse.png';
import othersImg from './assets/others.png';

import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';
import ProductList from './components/ProductList/ProductList';
import Button from './components/Button/Button';

function App() {
    const [currentUser] = useState({
        name: 'Admin',
        avatar: adminImg
    });

    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Ahmad Rizki',
            email: 'ahmad@example.com',
            role: 'Admin',
            avatar: userImg,
            isActive: true
        },
        {
            id: 2,
            name: 'Sari Dewi',
            email: 'sari@example.com',
            role: 'User',
            avatar: userImg,
            isActive: true
        },
        {
            id: 3,
            name: 'Budi Santoso',
            email: 'budi@example.com',
            role: 'Moderator',
            avatar: userImg,
            isActive: false
        }
    ]);

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Laptop Lenovo LOQ',
            price: 13000000,
            category: 'Electronics',
            image: laptopImg,
            stock: 5
        },
        {
            id: 2,
            name: 'Smartphone Infinix Hot 11s nfc',
            price: 3200000,
            category: 'Electronics',
            image: phoneImg,
            stock: 0
        },
        {
            id: 3,
            name: 'Buku Pemrograman React',
            price: 150000,
            category: 'Books',
            image: bookImg,
            stock: 10
        },
        {
            id: 4,
            name: 'Mouse Wireless Logitech',
            price: 250000,
            category: 'Electronics',
            image: mouseImg,
            stock: 15
        }
    ]);

    const handleEditUser = (userId) => {
        alert(`Edit user dengan ID: ${userId}`);
    };

    const handleDeleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const handleAddToCart = (product) => {
        alert(`Menambahkan ${product.name} ke keranjang`);
    };

    const handleAddNewUser = () => {
        const newUser = {
            id: users.length + 1,
            name: `User Baru ${users.length + 1}`,
            email: `user${users.length + 1}@example.com`,
            role: 'User',
            avatar: userImg,
            isActive: true
        };
        setUsers([...users, newUser]);
    };

    const handleAddNewProduct = () => {
        const newProduct = {
            id: products.length + 1,
            name: `Produk Baru ${products.length + 1}`,
            price: Math.floor(Math.random() * 1000000) + 100000,
            category: 'Other',
            image: othersImg,
            stock: Math.floor(Math.random() * 20)
        };
        setProducts([...products, newProduct]);
    };

    return (
        <div className="App">
            <Header
                title="Dashboard Admin"
                subtitle="Manajemen Pengguna & Produk"
                user={currentUser}
            />
            
            <main className="dashboard-main">
                {/* Stats Cards */}
                <div className="stats-container">
                    <div className="stat-card">
                        <div className="stat-icon">👥</div>
                        <div className="stat-info">
                            <h3>{users.length}</h3>
                            <p>Total Pengguna</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">📦</div>
                        <div className="stat-info">
                            <h3>{products.length}</h3>
                            <p>Total Produk</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">🛒</div>
                        <div className="stat-info">
                            <h3>{products.filter(p => p.stock > 0).length}</h3>
                            <p>Produk Tersedia</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">👤</div>
                        <div className="stat-info">
                            <h3>{users.filter(u => u.isActive).length}</h3>
                            <p>User Aktif</p>
                        </div>
                    </div>
                </div>

                {/* User Management Section */}
                <section className="dashboard-section">
                    <div className="section-header">
                        <div className="section-title">
                            <h2>Manajemen Pengguna</h2>
                            <span className="badge">{users.length} users</span>
                        </div>
                        <Button
                            variant="success"
                            onClick={handleAddNewUser}
                        >
                            + Tambah User
                        </Button>
                    </div>

                    <div className="users-grid">
                        {users.map(user => (
                            <UserCard
                                key={user.id}
                                user={user}
                                onEdit={handleEditUser}
                                onDelete={handleDeleteUser}
                            />
                        ))}
                    </div>
                </section>

                {/* Product Management Section */}
                <section className="dashboard-section">
                    <div className="section-header">
                        <div className="section-title">
                            <h2>Katalog Produk</h2>
                            <span className="badge">{products.length} products</span>
                        </div>
                        <Button
                            variant="primary"
                            onClick={handleAddNewProduct}
                        >
                            + Tambah Produk
                        </Button>
                    </div>
                    <ProductList
                        products={products}
                        onAddToCart={handleAddToCart}
                    />
                </section>
            </main>
        </div>
    );
}

export default App;