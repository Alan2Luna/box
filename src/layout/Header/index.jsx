import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../zapto.png';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={Logo} />
    </div>
    <div className="cart-container">
      <FontAwesomeIcon icon={faShoppingBag} className="cart" />
      <span className="cart-items">2</span>
    </div>
  </header>
);

export default Header;
