// File: src/pages/Home.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import UserProfile from '../components/UserProfile';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`home-page ${theme}`}>
      <div className="container">
        <div className="main-content">
          <ProductList />
        </div>

        <div className="sidebar">
          <UserProfile />
          {/* Assuming Cart component is also included here, though not visible in the exact image snippet,
              it's often placed near UserProfile in a sidebar for e-commerce. 
              Based on the Home.jsx imports, Cart is intended to be used: */}
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Home;