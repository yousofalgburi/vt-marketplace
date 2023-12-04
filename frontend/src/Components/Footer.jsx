// FooterNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNav = () => {
  return (
    <footer className="footer-nav">
      <div className="footer-links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/privacy">Privacy</NavLink>
        <NavLink to="/terms">Terms</NavLink>
        <NavLink to="/cookies">Cookies</NavLink>
        <NavLink to="/help">Help</NavLink>
      </div>
      <div className="footer-rights">
        © Virginia Tech Marketplace. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterNav;
