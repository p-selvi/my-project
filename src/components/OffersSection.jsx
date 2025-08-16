import React from 'react';
import '../style/OffersSection.css';
import aboutImage from '../assets/about-image.webp'; 
import { FaCheckCircle } from 'react-icons/fa'; // ✅ icon import

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
          <h2>Explore Popular Learning Paths</h2>
          <p>
            Choose from our most popular categories to begin your journey. Whether you’re just starting out or enhancing your skills, SkillUp has a course for you.
          </p>

          {/* List instead of plain paragraphs */}
          <ul className="offers-list">
            <li><FaCheckCircle className="list-icon" /> Coding Basics → Build a strong foundation in programming.</li>
            <li><FaCheckCircle className="list-icon" /> Web Development → Learn to design and build websites.</li>
            <li><FaCheckCircle className="list-icon" /> Digital Marketing → Discover strategies to grow businesses online.</li>
          </ul>

          <div className="offers-links">
            <a href="/contact" className="offer-link">Try SkillUp Free</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OffersSection;
