import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/home" className="nav-brand h3">
        <span className="brand-text">flying</span>Chain
      </Link>
      <div>
        <Link to="/trans-queue" className="btn btn-outline-light mr-3">
          交易队列
          <span className="badge badge-light ml-2">!</span>
        </Link>
        <Link to="/setting" className="btn btn-outline-light mr-3">设置</Link>
        <Link to="/create" className="btn btn-outline-light">创建交易</Link>
      </div>
    </nav>
  );
}

export default NavBar;
