import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const SwiperTest = () => {
  return (
    <>
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
            <h1 className="text-5xl text-black">1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
            <h1 className="text-5xl text-black">2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
            <h1 className="text-5xl text-black">3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
            <h1 className="text-5xl text-black">4</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
            <h1 className="text-5xl text-black">5</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
            <h1 className="text-5xl text-black">6</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
            <h1 className="text-5xl text-black">7</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
            <h1 className="text-5xl text-black">8</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
            <h1 className="text-5xl text-black">9</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperTest;
