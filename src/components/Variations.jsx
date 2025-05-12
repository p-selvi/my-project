import React from 'react';
import '../style/Variations.css';

const Variations = () => {
  return (
    <section className="variations-section">
      <div className='container'>
      <div className="variations-content">
        <h5>Section Title</h5>
        <h3>Main Heading for Variations Section</h3>
        <p>
          This is the first line of the paragraph.<br />
          Here is the second line for more detail.<br />
          The third line gives additional context.<br />
          And the fourth line completes the thought.
        </p>
        <div className="variations-actions">
          <button>Explore More</button>
          <a href="#">Learn More</a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Variations;
