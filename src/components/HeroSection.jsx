import React from 'react';
import '../style/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className='container'>
      <div className="hero-content">
        <h1>
          <span>Welcome to</span><br />
          <span>My Website</span>
        </h1>
        <p>Your gateway to modern web experiences.</p>
        <button>Get Started</button>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
