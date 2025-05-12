import React from 'react';
import '../style/InfoBlock.css';
import logo from '../assets/logo.png';

const InfoBlock = () => {
  return (
    <section className="info-block">
      <div className='container'>
      <h3>Welcome to Info Section</h3>
      <p className="description">
        This is an informative paragraph that spans up to six lines.
        It provides useful insights and guidance. You can explain the purpose of your service,
        highlight features, or offer details about your organization. This is a key area
        to grab user attention with well-written content that is centered and clear.
      </p>

      <hr className="divider" />

      <div className="info-columns">
        {[1, 2, 3].map((item) => (
          <div className="info-column" key={item}>
            <div className="icon-text">
              <img src={logo} alt="icon" className="info-icon" />
              <div>
                <h4>Heading {item}</h4>
                <p>This is a short description explaining feature {item} in detail.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default InfoBlock;
