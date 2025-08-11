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
                This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="column">
              <p>
                This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="column">
              <p>
                This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="column">
              <p>
                This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. This is the second paragraph under the second column. Here, you
                can describe the second feature or offer. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default GridShowcase;
