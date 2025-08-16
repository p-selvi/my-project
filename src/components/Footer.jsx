import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-logo">
            <a href="/">
              <h1>MyLogo</h1>
            </a>
          </div>
          <div className="footer-pages">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-logos">
            <a href="#"><img src="/src/assets/facebook.webp" alt="Facebook" /></a>
            <a href="#"><img src="/src/assets/twitter.jpg" alt="Twitter" /></a>
            <a href="#"><img src="/src/assets/insta.jpg" alt="Instagram" /></a>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SkillUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
