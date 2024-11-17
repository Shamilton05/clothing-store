import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import FontAwesome component
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
      <>
        {/* Header */}
        <header className="BabylonHeader">
        <nav className="nav-links">
            <a href="#">Collection</a>
            <a href="#">Journal</a>
            <a href="#">Brand</a>
            <a href="#">Stores</a>
          </nav>
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            rice country
          </div>
          <div className="account-links">
            <a href="#">Support</a>
            <a href="#">Wishlist</a>
            <a href="#">Account</a>
            <a href="#" className="shopping-cart-link">
              <span>Basket</span>
              <FontAwesomeIcon icon={faShoppingBag} className="shopping-cart-icon" />
            </a>
            
          </div>
        </header>
        </>
    );
};

export default Header;