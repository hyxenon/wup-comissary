import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import uniform1 from '../assets/uniform1.png'
import book1 from '../assets/book1.png'

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
            <img src={uniform1} alt="../assets/uniform1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
          <img src={book1} alt="../assets/book1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
          <img src={uniform1} alt="../assets/uniform1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
          <img src={book1} alt="../assets/book1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
          <img src={uniform1} alt="../assets/uniform1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
          <img src={book1} alt="../assets/book1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
          <img src={uniform1} alt="../assets/uniform1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
          <img src={book1} alt="../assets/book1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 border-black flex justify-center items-center">
          <img src={uniform1} alt="../assets/uniform1.png" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperTest;
