import React from 'react';
import '../style/InfoBlock.css';
import logo from '../assets/logo.png';

const InfoBlock = () => {
  return (
    <section className="info-block">
      <div className="container">
        <h3>Welcome to SkillUp</h3>
        <p className="description">
          SkillUp is your trusted platform for modern learning. With practical courses,
          structured modules, and interactive resources, we make education simple,
          effective, and accessible for everyone. Whether you’re preparing for a career,
          upgrading your skills, or exploring new fields, our learning paths are designed
          to guide you step by step.
        </p>

        <hr className="divider" />

        <div className="info-columns">
          <div className="info-column">
            <div className="icon-text">
              <img src={logo} alt="icon" className="info-icon" />
              <div>
                <h4>Simple Learning</h4>
                <p>Bite-sized lessons that focus on one concept at a time, making learning clear and easy.</p>
              </div>
            </div>
          </div>

          <div className="info-column">
            <div className="icon-text">
              <img src={logo} alt="icon" className="info-icon" />
              <div>
                <h4>Expert Content</h4>
                <p>Courses crafted by professionals to ensure practical knowledge.</p>
              </div>
            </div>
          </div>

          <div className="info-column">
            <div className="icon-text">
              <img src={logo} alt="icon" className="info-icon" />
              <div>
                <h4>Flexible Access</h4>
                <p>Learn at your own pace, anytime, anywhere, across devices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
