import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../style/GridShowcase.css";

const GridShowcase = () => {
  return (
    <section className="grid-showcase">
      <div className="container">
        <h2>Our Features</h2>

        <Swiper
          modules={[Navigation,  Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false, 
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 }
          }}
        >
          <SwiperSlide>
            <div className="column">
              <p>
                SkillUp makes learning simple with bite-sized lessons that help you progress faster. Each module is focus on one concept, avoiding long and overwhelming sessions. With clear step-by-step explanations, our content is designed for busy learners who want to save time while still building strong knowledge.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="column">
              <p>
                Learn anytime, anywhere with a fully responsive platform. Whether you’re on a laptop, tablet, or phone, SkillUp ensures a smooth and mobile-friendly experience. You can continue where you left off across devices, with simple navigation and consistent performance. One platform, all devices, seamless learning.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="column">
              <p>
                Your learning journey is secure with SkillUp. Our platform is built with strong privacy protection and reliable performance, ensuring your data stays safe at all times. With tested stability and speed, you never risk losing progress, giving you complete confidence while focusing on your studies.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="column">
              <p>
                SkillUp is designed for absolute beginners. With a simple interface, step-by-step learning, and plenty of visual examples, you can start without prior experience. The content is structured to track progress clearly and remove confusion, helping you begin small and gradually grow stronger in your skills.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default GridShowcase;
