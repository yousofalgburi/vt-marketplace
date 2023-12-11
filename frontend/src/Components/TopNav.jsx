// TopNav.js
import React, { useState } from 'react';
import '../App.css';
import { NavLink, useNavigate } from 'react-router-dom';

const TopNav = ({ vtLogo, goToItemsPage }) => {
  return (
    <div className="App">
      <nav className="topnav">
        <div className="nav-content">
          <img src={vtLogo} alt="VT Logo" className="vt-logo" />
          <NavLink to="/home" activeClassName="active">Home</NavLink>
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
          <NavLink to="/buying" activeClassName="active">Buying</NavLink>
          <NavLink to="/sell_page" activeClassName="active">Selling</NavLink>
          <NavLink to="/trust-and-safety" activeClassName="active">Trust & Safety</NavLink>
        </div>
        <button className="marketplace-button" onClick={goToItemsPage}>
          GO TO MARKETPLACE
        </button>
      </nav>
    </div>
  );
};

export default TopNav;
