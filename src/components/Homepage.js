import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <>
      {/* Header */}
      <header className="BabylonHeader">
        <div className="logo">kapital</div>
        <nav className="nav-links">
          <a href="#">Collection</a>
          <a href="#">Journal</a>
          <a href="#">Brand</a>
          <a href="#">Stores</a>
        </nav>
        <div className="account-links">
          <a href="#">Support</a>
          <a href="#">Wishlist</a>
          <a href="#">Account</a>
          <a href="#">Basket</a>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="/images/hero-bag.jpg"
          alt="Red Bag"
          className="hero-image"
        />
        <div className="hero-text">
          <p>心が踊る。</p>
          <p>私だけのキャンバス。</p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
