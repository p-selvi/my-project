import React from 'react';
import '../style/LearnMore.css';

const LearnMore = () => {
    return (
        <section className="learn-more">
            <div className="container">
                <h2 className="learn-title">Explore More About Us</h2>
                <p className="learn-subtitle">
                    Discover our mission, vision, and the passionate people behind our success.
                    Join us in shaping a better future together.
                </p>
                <a href="/contact" className="learn-button">Contact Us</a>
            </div>
        </section>
    );
};

export default LearnMore;
