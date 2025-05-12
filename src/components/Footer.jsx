import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-logo">
            <h1>MyLogo</h1>
          </div>
          <div className="footer-pages">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
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
          <p>&copy; 2025 MyCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
