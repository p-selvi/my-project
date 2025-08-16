import React from 'react';
import '../style/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className='container'>
        <h2>Make Your Move Today</h2>
        <div className="cta-columns">
          <div className="cta-column cta-column-1">
            <p>SkillUp helps you begin your journey with confidence by providing simple and engaging courses. Each module is carefully structured to make learning easy and enjoyable. You can progress step by step without feeling stressed or overloaded. With consistency, you’ll see your skills grow stronger each day.</p>
          </div>
          <div className="cta-column cta-column-2">
            <p>Our flexible learning system allows you to study at your own pace, whenever and wherever it suits you best. There’s no pressure of strict deadlines or rigid schedules.</p>
          </div>
        </div>
        <div className="cta-row">
          <div className="cta-column cta-column-3">
            <p>Interactive lessons make even the toughest topics simple to understand. With practical examples and exercises, you can learn concepts faster and retain them longer. This approach helps transform knowledge into real-world skills. You’ll be able to apply what you learn with confidence and clarity.</p>
          </div>
          <div className="cta-column cta-column-4">
            <p>With progress tracking tools, you can easily see how far you’ve come. Each completed module shows your improvement step by step. Celebrating these small wins keeps you motivated throughout the journey. Every milestone achieved becomes proof of your hard work and dedication.</p>
          </div>
          <div className="cta-column cta-column-5">
            <p>SkillUp awards certificates that highlight your achievements and expertise. These certificates serve as a strong proof of your skills for future opportunities. They help you stand out from others in competitive environments. With SkillUp, your learning journey opens doors to exciting career.</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default CallToAction;
