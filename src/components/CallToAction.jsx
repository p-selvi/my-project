import React from 'react';
import '../style/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className='container'>
        <h2>Make Your Move Today</h2>
        <div className="cta-columns">
          <div className="cta-column cta-column-1">
            <p>This is the first column, occupying 80% of the width. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe est tempore quisquam, expedita vel rem nemo quae totam quis in incidunt omnis, qui dolorum, quam cum. Pariatur aliquid ad quos.</p>
          </div>
          <div className="cta-column cta-column-2">
            <p>This is the second column, occupying 40% of the width. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, commodi!</p>
          </div>
        </div>
        <div className="cta-row">
          <div className="cta-column cta-column-3">
            <p>First column of 40% width. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nobis fuga voluptate quas modi nemo dolor aspernatur nisi sed veritatis.</p>
          </div>
          <div className="cta-column cta-column-4">
            <p>Second column of 40% width. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusantium magni aperiam libero iure consequatur. Blanditiis dolores officia nemo voluptates!</p>
          </div>
          <div className="cta-column cta-column-5">
            <p>Third column of 40% width. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque commodi non eaque fugit mollitia impedit ab perspiciatis consequatur iure quasi.</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default CallToAction;
