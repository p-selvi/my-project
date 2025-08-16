import React from 'react';
import '../style/Features.css';

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: 'Quick Learning',
      description: 'Bite-sized lessons to help you learn faster.',
      icon: '/images/quick-learning.png', 
    },
    {
      id: 2,
      title: 'Responsive Access',
      description: 'Study on mobile, tablet, or desktop.',
      icon: '/images/responsive.png',       
    },
    {
      id: 3,
      title: 'Safe & Reliable',
      description: 'A secure platform built for students.',
      icon: '/images/safe.png',           
    },
    {
      id: 4,
      title: 'Beginner Friendly',
      description: 'Easy navigation and structured content.',
      icon: '/images/beginner.png',   
    },
  ];

  return (
    <section className="features-section">
      <div className='container'>
        <h3 className='title'>Why Choose SkillUp?</h3>
        <h4 className='subtitle'>Easy to use and made for learners</h4>
        <div className="features-grid">
          {featureData.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
