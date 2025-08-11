import React from 'react';
import '../style/OffersSection.css';
import aboutImage from '../assets/about-image.webp'; 

const OffersSection = () => {
  return (
    <section className="offers-section">
      <div className="container offers-container">
        
        {/* Left side image */}
        <div className="offers-image">
          <img src={aboutImage} alt="About Platform" />
        </div>

        {/* Right side content */}
        <div className="offers-text">
          <h2>Special Offers Just For You</h2>
          <p>
            Take advantage of these exclusive offers available for a limited time. Don&apos;t miss out!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae eveniet,
            consequuntur eaque soluta suscipit consectetur?Take advantage of these exclusive offers available for a limited time. 
          </p>
          <p>
            Take advantage of these exclusive offers available for a limited time. Don&apos;t miss out!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae eveniet,
            consequuntur eaque soluta suscipit consectetur?Take advantage of these exclusive offers available for a limited time.
          </p>
          <div className="offers-links">
            <a href="/contact" className="offer-link">Free Trial</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OffersSection;
