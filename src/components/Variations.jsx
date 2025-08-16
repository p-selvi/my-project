import React from 'react';
import '../style/Variations.css';
import aboutImage from '../assets/about-image.webp';
import { FaCheckCircle } from 'react-icons/fa';

const Variations = () => {
  return (
    <section className="variations-section">
      <div className="container variations-container">

        <div className="variations-content">
          <h3>Why Learning with SkillUp Works</h3>
          <h4>Make Your Move Today</h4>
          <ul className="variations-list">
            <li>
              <FaCheckCircle className="list-icon" />
              Start Learning Now → Access free and premium courses.
            </li>
            <li>
              <FaCheckCircle className="list-icon" />
              Track Your Progress → Monitor your learning with progress tools.
            </li>
            <li>
              <FaCheckCircle className="list-icon" />
              Get Certified → Receive certificates to showcase your achievements.
            </li>
          </ul>
          <div className="variations-actions">
            <a href="/about" className="learn-button">Join Now</a>
          </div>
        </div>

        <div className="variations-image">
          <img src={aboutImage} alt="About Platform" />
        </div>
        
      </div>
    </section>
  );
};

export default Variations;
