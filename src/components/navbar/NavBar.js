import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="nav-brand h3">
        <span className="brand-text">xxf</span>Chain
      </Link>
      <div>
        <Link to="/setting" className="btn btn-outline-light mr-3">设置</Link>
        <Link to="/create" className="btn btn-outline-light">创建交易</Link>
      </div>
    </nav>
  );
}

export default NavBar;
