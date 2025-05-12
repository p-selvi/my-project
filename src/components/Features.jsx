import React from 'react';
import '../style/Features.css';

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: 'Fast Performance',
      description: 'Experience lightning-fast load times.',
      link: '#',
    },
    {
      id: 2,
      title: 'Responsive Design',
      description: 'Looks great on any device.',
      link: '#',
    },
    {
      id: 3,
      title: 'Secure Platform',
      description: 'Your data is protected with top-tier security.',
      link: '#',
    },
    {
      id: 4,
      title: 'User Friendly',
      description: 'Easy to navigate and simple to use.',
      link: '#',
    },
  ];

  return (
    <section className="features-section">
    <div className='container'>
    <div className="features-grid">
        {featureData.map((feature) => (
          <div key={feature.id} className="feature-item">
            <div className="feature-icon">🔵</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <a href={feature.link}>Learn More →</a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Features;
