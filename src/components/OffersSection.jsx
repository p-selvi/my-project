import React from 'react';
import '../style/OffersSection.css';

const OffersSection = () => {
  return (
    <section className="offers-section">
      <div className="container offers-container">
        
        <div className="offers-text">
          <h2>Special Offers Just For You</h2>
          <p>
            Take advantage of these exclusive offers available for a limited time. Don&apos;t miss out!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae eveniet,
            consequuntur eaque soluta suscipit consectetur?
          </p>
          <div className="offers-links">
            <a href="#offer1" className="offer-link">Free Trial</a>
            <a href="#offer2" className="offer-link">Enroll Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
