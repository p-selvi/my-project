import React from 'react';
import '../style/Features.css';

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: 'Fast Performance',
      description: 'Easy to navigate and simple to use.',
      link: '#',
    },
    {
      id: 2,
      title: 'Responsive Design',
      description: 'Easy to navigate and simple to use.',
      link: '#',
    },
    {
      id: 3,
      title: 'Secure Platform',
      description: 'Easy to navigate and simple to use.',
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
        <h3 className='title'>About Our Platform</h3>
        <h4 className='subtitle'>Easy to navigate and simple to use</h4>
        <div className="features-grid">
          {featureData.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon">🔵</div>
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
