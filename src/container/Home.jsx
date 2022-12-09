import React from "react";
import {
  About,
  BestSeller,
  BestSellerItems,
  Hero,
  Navbar,
  SideLinks,
} from "../components";

import heroImg1 from "../assets/header1.png";
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";

const Home = () => {
  return (
    <div className="h-full relative">
      {/* Hero Image */}
      <img
        className="h-screen w-screen -z-20 absolute object-cover"
        src={heroImg1}
        alt="../assets/header1.png"
      />
      <Navbar />
      <SideLinks />
      <main className="flex flex-col relative">
        <img
          className="absolute bottom-[60rem] w-[1500px] right-0 -z-20"
          src={background1}
          alt="../assets/backgroundAbout.png"
        />
        <img
          className="absolute -bottom-20 -z-20"
          src={background2}
          alt=""
        />
        <Hero />
        <About />
        <div className="flex flex-col items-center justify-center">
          <BestSeller />
          <div className="w-[50rem] h-[500px] mt-24">
            <BestSellerItems />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
