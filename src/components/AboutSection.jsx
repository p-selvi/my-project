import React from 'react';
import '../style/AboutSection.css';
import aboutImage from '../assets/about.webp'; 

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h3>About Our Platform</h3>
            <p>
              We provide efficient, scalable web solutions for startups and businesses. Our mission is to simplify development.
            </p>
            <div className="about-sub-columns">
              <div>
                <h4>What We Offer</h4>
                <p>Custom web development services tailored to your needs.</p>
              </div>
            </div>
            <div className="about-buttons">
              <button className="btn-primary">Learn More</button>
              <button className="btn-secondary">Get in Touch</button>
            </div>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Platform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
