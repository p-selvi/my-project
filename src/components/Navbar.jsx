import React from "react";
import "../style/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>MyLogo</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
