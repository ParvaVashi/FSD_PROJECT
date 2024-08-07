import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
        <nav className="navbar-menu">
          <a href="#properties">Properties</a>
          <a href="#contact">Contact</a>
          <a href="#add-property">Add Property</a>
          <a href="#login" className="login">Login</a> {/* Add login class */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
