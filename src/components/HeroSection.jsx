import React, { useEffect, useRef, useState } from 'react';
import '../style/HeroSection.css';

const HeroSection = () => {
  const contentRef = useRef(null);
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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div
          ref={contentRef}
          className={`hero-content ${isVisible ? 'animate' : ''}`}
        >
          <h1>
            <span>Welcome to</span><br />
            <span>SkillUp</span>
          </h1>
          <p>Learn new skills anytime, anywhere.</p>
          <a href="/about">
            <button>Get Started</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
