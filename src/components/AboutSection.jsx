import React, { useEffect, useRef, useState } from 'react';
import '../style/AboutSection.css';
import aboutImage from '../assets/about-image.webp';

const AboutSection = () => {
  const btnRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // re-trigger when leaving and re-entering
          }
        });
      },
      { threshold: 0.2 }
    );

    if (btnRef.current) {
      observer.observe(btnRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h3>About Our Platform</h3>
            <p>
              We provide efficient, scalable web solutions for startups and businesses. Our mission is to simplify development.
              We provide efficient, scalable web solutions for startups and businesses. Our mission is to simplify development.
              We provide efficient, scalable web solutions for startups and businesses. Our mission is to simplify development.
              We provide efficient, scalable web solutions for startups and businesses. Our mission is to simplify development.
            </p>
            <div
              ref={btnRef}
              className={`about-buttons ${isVisible ? 'animate-buttons' : ''}`}
            >
              <a href="/about" className="learn-button">Contact Us</a>
            </div>
          </div>
          <div className="offers-image">
            <img src={aboutImage} alt="About Platform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
