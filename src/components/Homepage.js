import React from 'react';
import './Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import FontAwesome component
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Header from './Header'

const Homepage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="/images/hero-bag.jpg"
          alt="Red Bag"
          className="hero-image"
        />
        <div className="hero-text">
          <p>米国。</p>
          <p>アイビーボーイ。</p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
