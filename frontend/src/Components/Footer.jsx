// FooterNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNav = () => {
  return (
    <div className="App">
      <nav className="footer-nav">
        <div className="nav-content">
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/privacy" activeClassName="active">Privacy</NavLink>
          <NavLink to="/terms" activeClassName="active">Terms</NavLink>
          <NavLink to="/cookies" activeClassName="active">Cookies</NavLink>
          <NavLink to="/help" activeClassName="active">Help</NavLink>
        </div>
        <div className="footer-rights">
          © Virginia Tech Marketplace. All Rights Reserved.
        </div>
      </nav>
    </div>
  );
};

export default FooterNav;
