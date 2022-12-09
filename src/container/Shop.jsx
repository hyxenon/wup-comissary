import React from "react";
import { Navbar, SideLinks } from "../components";
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";
import uniform1 from '../assets/uniform1.png'
import book1 from '../assets/book1.png'

const Shop = () => {
  return (
    <div className="overflow-hidden relative min-h-screen">
      <Navbar />
      <SideLinks />
      <img
        className="absolute left-0 -top-40 -z-20 w-[1300px]"
        src={background2}
        alt="../assets/background2.png"
      />
      <img
        className="absolute right-0 bottom-0 -z-20"
        src={background1}
        alt="../assets/background1.png"
      />
      <main className="mt-8 grid grid-cols-[20%_80%]">
        
        <div className="mt-20">
          <ul className="flex flex-col items-end gap-4">
            <li className="font-bold uppercase cursor-pointer">Category</li>
            <li className="font-bold uppercase cursor-pointer">Department</li>
            <li className="font-bold uppercase cursor-pointer">Books</li>
            <li className="font-bold uppercase cursor-pointer">Others</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-12 ">
          <h1 className="uppercase text-3xl font-bold">Best Sellers</h1>
          <div className="grid grid-cols-3 gap-8">
            <div className="w-[200px] h-[300px] border-2 border-black rounded-xl">
              <img className="w-full h-full" src={uniform1} alt="" />
            </div>
            <div className="w-[200px] h-[300px] border-2 border-black rounded-xl">
              <img src={book1} alt="" />
            </div>
            <div className="w-[200px] h-[300px] border-2 border-black rounded-xl">
              <img className="w-full h-full" src={uniform1} alt="" />
            </div>
            <div className="w-[200px] h-[300px] border-2 border-black rounded-xl">
              <img src={book1} alt="" />
            </div>
            <div className="w-[200px] h-[300px] border-2 border-black rounded-xl">
              <img className="w-full h-full" src={uniform1} alt="" />
            </div>
            <div className="w-[200px] h-[300px] border-2 border-black rounded-xl">
              <img src={book1} alt="" />
            </div>
            <div className="w-[200px] h-[300px] border-2 border-black rounded-xl">
              <img className="w-full h-full" src={uniform1} alt="" />
            </div>
            <div className="w-[200px] h-[300px] border-2 border-black rounded-xl">
              <img src={book1} alt="" />
            </div>
            <div className="w-[200px] h-[300px] border-2 border-black rounded-xl">
              <img className="w-full h-full" src={uniform1} alt="" />
            </div>
            <div className="w-[200px] h-[300px] border-2 border-black rounded-xl">
              <img src={book1} alt="" />
            </div>
          
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Shop;
