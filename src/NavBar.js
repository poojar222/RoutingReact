import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-brand">
        Animal Kingdom
      </div>
      <div className="nav-links">
        <Link to="/tiger" className="nav-link">Tiger</Link>
        <Link to="/bear" className="nav-link">Bear</Link>
        <Link to="/lion" className="nav-link">Lion</Link>
      </div>
    </div>
  );
};

export default NavBar;