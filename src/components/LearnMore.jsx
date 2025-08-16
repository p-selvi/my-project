import React from 'react';
import '../style/LearnMore.css';

const LearnMore = () => {
    return (
        <section className="learn-more">
            <div className="container">
                <h2 className="learn-title">Explore More About SkillUp</h2>
                <p className="learn-subtitle">
                    Join thousands of learners building their future with SkillUp. Discover new opportunities, grow your skills, and become career-ready.
                </p>
                <a href="/contact" className="learn-button">Contact Us</a>
            </div>
        </section>
    );
};

export default LearnMore;
