import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import uniform1 from '../assets/uniform1.png'
import book1 from '../assets/book1.png'
import menspolo from '../assets/menspolo.jpg'

const SwiperTest = () => {
  return (
    <>
      <Swiper
          slidesPerView={2.5}
          spaceBetween={70}
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[ Navigation]}
          className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 px-2 border-black flex flex-col justify-around items-center rounded-2xl">
            <div className="relative">
            <img src={uniform1} alt="../assets/uniform1.png" />
            {/* <h1 className="absolute bottom-0 left-1/3 font-bold">PE UNIFORM</h1> */}
            </div>
            
            <h1>PHP 400.00</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 px-2 border-black flex flex-col justify-around items-center rounded-2xl">
            
          <div className="w-[13.5rem] relative">
          <img className="" src={book1} alt="../assets/book1.png" />
          {/* <h1 className="absolute bottom-0 left-8 font-bold">NURSING BOOK</h1> */}
          </div>
          
          <h1>PHP 700.00</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 px-2 border-black flex flex-col justify-around items-center rounded-2xl">
          <div className="relative">
          <img src={menspolo} alt="../assets/uniform1.png" />
          {/* <h1 className="absolute bottom-0 left-20 font-bold">MEN'S POLO</h1> */}
          </div>
          
          <h1>PHP 500</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 px-2 border-black flex flex-col justify-around items-center rounded-2xl">
            <div className="relative">
            <img src={uniform1} alt="../assets/uniform1.png" />
            {/* <h1 className="absolute bottom-0 left-1/3 font-bold">PE UNIFORM</h1> */}
            </div>
            
            <h1>PHP 400.00</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 px-2 border-black flex flex-col justify-around items-center rounded-2xl">
            
          <div className="w-[13.5rem] relative">
          <img className="" src={book1} alt="../assets/book1.png" />
          <h1 className="absolute bottom-0 left-8 font-bold">NURSING BOOK</h1>
          </div>
          
          <h1>PHP 700.00</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[400px] bg-white border-2 px-2 border-black flex flex-col justify-around items-center rounded-2xl">
          <div className="relative">
          <img src={menspolo} alt="../assets/uniform1.png" />
          {/* <h1 className="absolute bottom-0 left-20 font-bold">MEN'S POLO</h1> */}
          </div>
          
          <h1>PHP 500</h1>
          </div>
        </SwiperSlide>
        
       
      
       
      
      </Swiper>
    </>
  );
};

export default SwiperTest;
