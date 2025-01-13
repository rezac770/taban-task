import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Slider = () => {
  return (
    <>
      <div className="slider">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src="../src/assets/slider/Group 15903.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../src/assets/slider/Group 15902.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
