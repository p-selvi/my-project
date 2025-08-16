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
            setIsVisible(false); 
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
            <h3>About SkillUp</h3>
            <p>
              SkillUp is an online learning hub created to make education simple and accessible for everyone. Whether you are a student, a professional, or someone curious to learn new things, our platform provides high-quality tutorials across coding, design, marketing, and more.
            </p>
            <p>
              We believe learning should be flexible, engaging, and practical. That’s why our courses are built in short, structured modules that fit into your daily routine. With SkillUp, you can start small, progress at your own pace, and achieve big goals over time.
            </p>
            <div
              ref={btnRef}
              className={`about-buttons ${isVisible ? 'animate-buttons' : ''}`}
            >
              <a href="/about" className="learn-button">Start Learning</a>
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
