import React from "react";
import {
  About,
  BestSeller,
  BestSellerItems,
  Hero,
  Navbar,
  SideLinks,
} from "../components";
import heroImg from "../assets/header.jpg";
import background1 from "../assets/backgroundAbout.png";
import backgroundBestSellers from "../assets/backgroundBestSellers.png";

const Home = () => {
  return (
    <div className="h-full relative">
      {/* Hero Image */}
      <img
        className="h-screen w-screen -z-20 absolute opacity-40 object-cover"
        src={heroImg}
        alt=""
      />
      <Navbar />
      <SideLinks />
      <main className="flex flex-col relative">
        <img
          className="absolute bottom-[60rem] w-[1700px] right-0 -z-20"
          src={background1}
          alt="../assets/backgroundAbout.png"
        />
        <img
          className="absolute -bottom-20 -z-20"
          src={backgroundBestSellers}
          alt=""
        />
        <Hero />
        <About />
        <div className="flex flex-col items-center justify-center">
          <BestSeller />
          <div className="w-[1000px] h-[500px] mt-24">
            <BestSellerItems />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
