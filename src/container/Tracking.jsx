import React from "react";
import { Navbar, SideLinks } from "../components";
import tracking from "../assets/tracking.jpg";
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";

const Tracking = () => {
  return (
    <div className="overflow-hidden h-screen ">
      <Navbar />
      <SideLinks />
      <img
        className="absolute top-0 -z-20"
        src={background2}
        alt="../assets/background2.png"
      />
      <img
        className="absolute bottom-0 right-0 -z-20"
        src={background1}
        alt="../assets/background1.png"
      />

      <main className="flex justify-center items-center mt-8">
        <div className="bg-white w-[50rem] h-[45rem] border box-shadow filter drop-shadow-2xl flex  items-center justify-center rounded-xl">
          <div className="w-[90%] h-[90%] border-8 border-lightYellow rounded-md relative flex flex-col justify-center items-center gap-4">
            <div className="bg-lightYellow w-[45%] flex items-center justify-center px-2 absolute left-48 -top-6">
              <h1 className="uppercase font-bold text-3xl">Tracking Order</h1>
            </div>
            <div className="flex items-center justify-center mt-4">
              <img
                className="border-2 border-black rounded-xl semi-shadow"
                src={tracking}
                alt="../assets/tracking.jpg"
              />
            </div>
            <div className="w-[95%] h-[12rem]  semi-shadow rounded-xl grid grid-cols-2 gap-20 mt-4">
              <div className="flex flex-col pl-8 py-2">
                <h1 className="uppercase font-bold text-lg">
                  order number :1231682681
                </h1>
                <div className="flex justify-between mt-1.5">
                  <div className="flex flex-col justify-center items-center gap-2 ml-2">
                    <h1 className="uppercase text-sm font-bold">date</h1>
                    <p className="text-xs font-semibold">12/02/2022</p>
                    <p className="text-xs font-semibold">12/03/2022</p>
                    <p className="text-xs font-semibold">12/04/2022</p>
                    <p className="text-xs font-semibold">12/05/2022</p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 ">
                    <h1 className="uppercase text-sm font-bold">time</h1>
                    <p className="text-xs font-semibold">12:30</p>
                    <p className="text-xs font-semibold">2:30</p>
                    <p className="text-xs font-semibold">4:30</p>
                    <p className="text-xs font-semibold">6:30</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-4 py-2 items-center">
                <h1 className="uppercase font-bold text-lg">
                  status:delivered
                </h1>
                <div className="flex flex-col gap-2 mt-1.5">
                  <h1 className="uppercase text-center font-bold text-sm">
                    location
                  </h1>
                  <p className="uppercase text-xs font-semibold">
                    your order has been delivered
                  </p>
                  <p className="uppercase text-xs font-semibold">
                    your order is at freedom park
                  </p>
                  <p className="uppercase text-xs font-semibold">
                    your order is at wesleyan
                  </p>
                  <p className="uppercase text-xs font-semibold">
                    your order has been pickup by our logistic partner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tracking;
