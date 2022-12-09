import React from "react";
import { Navbar, SideLinks } from "../components";
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Navbar page={"cart"}/>
      <SideLinks />
      <img className="absolute -z-20 top-0 right-0" src={background1} alt="" />
      <img
        className="absolute -z-20 bottom-0 left-0"
        src={background2}
        alt=""
      />

      <main className="flex justify-center items-center mt-8 mb-20">
        <div className="relative ">
          <div className="absolute -bottom-3 right-2 shadow-2xl -z-10 bg-white w-[45rem] h-[40rem] 3xl:w-[50rem] 3xl:h-[45rem]   flex  items-center justify-center rounded-xl"></div>
          <div className="absolute -bottom-6 right-4 shadow-2xl -z-20 bg-white w-[45rem] h-[40rem] 3xl:w-[50rem] 3xl:h-[45rem]  flex  items-center justify-center rounded-xl"></div>
          <div className="bg-white w-[45rem] h-[40rem] 3xl:w-[50rem] 3xl:h-[45rem] border border-black box-shadow filter drop-shadow-2xl flex  items-center justify-center rounded-xl">
            <div className=" w-[90%] h-[90%] 3xl:w-[90%] 3xl:h-[90%] border-8 border-lightYellow rounded-md relative flex flex-col  items-center gap-4">
              <div className="bg-lightYellow w-[35%] flex items-center justify-center px-2 absolute left-[14.5rem] -top-6">
                <h1 className="uppercase font-bold text-3xl">your cart</h1>
              </div>
              <div className="w-full grow overflow-y-scroll">
                <CartItem />
                <CartItem />
                
              </div>
              <div className="w-full px-8 py-8 border-y-2 border-black mt-1.5">
                <div className="flex justify-between py-2">
                  <h1 className="uppercase font-bold text-sm">subtotal:</h1>
                  <p className="font-bold text-sm">PHP 880.00</p>
                </div>
                <div className="flex justify-between py-2">
                  <h1 className="uppercase font-bold text-sm">shipping:</h1>
                  <p className="font-bold text-sm">PHP 100.00</p>
                </div>
              </div>
              <div className="flex justify-between py-8 px-8 w-full">
                <h1 className="uppercase font-bold text-sm">estimated total:</h1>
                <p className="font-bold text-sm">PHP 980.00</p>
              </div>
              <div className="bg-lightYellow 3xl:w-[40%] flex items-center justify-center px-2 absolute left-[14.5rem] -bottom-5 cursor-pointer hover:scale-110 transition-all">
                <h1 className="uppercase font-bold text-xl"><Link to="/cart/payment">continue to payment</Link></h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
