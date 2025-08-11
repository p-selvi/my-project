import React from 'react';
import '../style/Variations.css';
import aboutImage from '../assets/about-image.webp';

const Variations = () => {
  return (
    <section className="variations-section">
      <div className='container variations-container'>

        {/* Right Side Content */}
        <div className="variations-content">
          <h3>Main Heading for Variations Section</h3>
          <h4>Section Title</h4>
          <p>
            This is the first line of the paragraph.
            Here is the second line for more detail.
            The third line gives additional context.
            And the fourth line completes the thought. This is the first line of the paragraph.
            Here is the second line for more detail.
            The third line gives additional context.
            And the fourth line completes the thought. This is the first line of the paragraph.
            Here is the second line for more detail. Here is the second line for more detail.
            The third line gives additional context.
            And the fourth line completes the thought.
            The third line gives additional context.
            And the fourth line completes the thought.
          </p>
          <div className="variations-actions">
            <a href="/about" className="learn-button">Contact Us</a>
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
