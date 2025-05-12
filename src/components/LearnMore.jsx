import React from 'react';
import '../style/LearnMore.css';

const LearnMore = () => {
    return (
        <section className="learn-more">
            <div className="container">
                
                <div className="learn-columns">
                    <div className="learn-column">
                    <h3>Explore More About Us</h3>
                        <p>
                            Discover our mission and vision that drives innovation.
                            We believe in building for impact.
                            Join us in shaping a better future.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                    <div className="learn-column">
                    <h3>Explore More About Us</h3>
                        <p>
                            Meet our team of passionate professionals.
                            Our strength lies in collaboration and growth.
                            Get inspired by their stories.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                    <div className="learn-column">
                    <h3>Explore More About Us</h3>
                        <p>
                            Explore our services and solutions tailored for you.
                            From consulting to implementation.
                            Let’s take your goals to the next level.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnMore;
