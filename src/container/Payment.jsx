import React, { useState } from "react";
import { Navbar, SideLinks } from "../components";
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";

const Payment = () => {
  const [debitCards, setDebitCards] = useState(false);

  const [gcash, setGcash] = useState(false);

  const [cod, setCod] = useState(false);

  const debitClick = () => {
    setDebitCards((oldData) => !oldData);
    setGcash(false);
    setCod(false);
  };

  const gcashClick = () => {
    setGcash((oldData) => !oldData);
    setDebitCards(false);
    setCod(false);
  };

  const codClick = () => {
    setCod((oldData) => !oldData);
    setDebitCards(false);
    setGcash(false);
  };

  const debitElements = (
    <div
      className={`transition-all duration-400 ${
        debitCards ? "visible h-[200px] opacity-100" : "invisible h-0 opacity-0"
      }`}
    >
      <div className="w-full h-0.5 bg-black mt-3"></div>

      <div className="py-1 mt-2">
        <h1 className="font-bold text-xs uppercase ml-2">cardholder name</h1>
        <input
          className="w-full text-sm px-2 py-0.5 border-2 border-black rounded-xl"
          type="text"
        />
      </div>

      <div className="py-1 ">
        <h1 className="font-bold text-xs uppercase ml-2">cardholder number</h1>
        <input
          className="w-full text-sm px-2 py-0.5 border-2 border-black rounded-xl"
          type="text"
        />
      </div>

      <div className="py-1 flex gap-8 mt-1">
        <div className="w-1/2 flex flex-col">
          <h1 className="font-bold text-xs uppercase ml-2">expiration date</h1>

          <div className="flex justify-between w-1/3 gap-4">
            <input
              className="w-[8rem] text-sm px-2 py-0.5 border-2 border-black rounded-xl"
              placeholder="MM"
              type="text"
            />
            <input
              className="w-[8rem]  text-sm px-2 py-0.5 border-2 border-black rounded-xl"
              placeholder="YYYY"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xs uppercase ml-2">cvv</h1>
          <input
            className="w-1/2 text-sm px-2 py-0.5 border-2 border-black rounded-xl"
            type="text"
          />
        </div>
      </div>
    </div>
  );

  const gcashElements = (
    <div
      className={`transition-all duration-400 ${
        gcash ? "visible h-[200px] opacity-100" : "invisible h-0 opacity-0"
      }`}
    >
      <div className="w-full h-0.5 bg-black mt-3"></div>

      <div className="py-1 mt-2">
        <h1 className="font-bold text-xs uppercase ml-2">name</h1>
        <input
          className="w-full text-sm px-2 py-0.5 border-2 border-black rounded-xl"
          type="text"
        />
      </div>

      <div className="py-1 ">
        <h1 className="font-bold text-xs uppercase ml-2">phone number</h1>
        <input
          className="w-full text-sm px-2 py-0.5 border-2 border-black rounded-xl"
          type="text"
        />
      </div>

      <div className="py-1 ">
        <h1 className="font-bold text-xs uppercase ml-2">pin number</h1>
        <input
          className="w-[7rem] text-sm px-2 py-0.5 border-2 border-black rounded-xl"
          type="password"
        />
      </div>
    </div>
  );

  const codElements = (
    <div
      className={`transition-all duration-400 ${
        cod ? "visible h-[200px] opacity-100" : "invisible h-0 opacity-0"
      }`}
    >
      <div className="w-full h-0.5 bg-black mt-3"></div>
      <div className="py-1 mt-2">
        <h1 className="font-bold text-xs uppercase ml-2">full name</h1>
        <input
          className="w-full text-sm px-2 py-0.5 border-2 border-black rounded-xl"
          type="text"
        />
      </div>

      <div className="py-1 ">
        <h1 className="font-bold text-xs uppercase ml-2">complete address</h1>
        <input
          className="w-full text-sm px-2 py-0.5 border-2 border-black rounded-xl"
          type="text"
        />
      </div>
      <div className="py-1 flex gap-8 mt-1">
        <div className="w-1/2 flex flex-col">
          <h1 className="font-bold text-xs uppercase ml-2">city</h1>

          <input
            className="w-full text-sm px-2 py-0.5 border-2 border-black rounded-xl"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xs uppercase ml-2">postal code</h1>
          <input
            className="w-[8rem] text-sm px-2 py-0.5 border-2 border-black rounded-xl"
            type="text"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
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
        <div className="relative ">
          <div className="absolute -bottom-3 right-2 shadow-2xl -z-10 bg-white w-[50rem] h-[45rem]   flex  items-center justify-center rounded-xl"></div>
          <div className="absolute -bottom-6 right-4 shadow-2xl -z-20 bg-white w-[50rem] h-[45rem]  flex  items-center justify-center rounded-xl"></div>
          <div className="bg-white w-[50rem] h-[45rem] border border-black box-shadow filter drop-shadow-2xl flex  items-center justify-center rounded-xl">
            <div className="w-[90%] h-[90%] border-8 border-lightYellow rounded-md relative flex flex-col  justify-between py-8 px-8">
              <div className="bg-lightYellow w-[35%] flex items-center justify-center px-2 absolute left-[14.5rem] -top-6">
                <h1 className="uppercase font-bold text-3xl">your cart</h1>
              </div>
              {/* MODE OF PAYMENT */}
              <div className="w-full">
                <div className="border-2 border-black rounded-xl w-full mt-8 px-4 py-2 flex flex-col semi-shadow">
                  <div
                    onClick={debitClick}
                    className="flex justify-between w-full cursor-pointer"
                  >
                    <h1 className="uppercase font-bold text-sm">
                      Credit or debit cards
                    </h1>
                    <div className="w-5 h-5 border-2 border-black rounded-full"></div>
                  </div>
                  {debitElements}
                </div>

                <div className="border-2 border-black rounded-xl w-full mt-4 px-4 py-2 flex flex-col semi-shadow">
                  <div
                    onClick={gcashClick}
                    className="flex justify-between w-full cursor-pointer"
                  >
                    <h1 className="uppercase font-bold text-sm">
                      online payment (gcash)
                    </h1>
                    <div className="w-5 h-5 border-2 border-black rounded-full"></div>
                  </div>
                  {gcashElements}
                </div>
                <div className="border-2 border-black rounded-xl w-full mt-4 px-4 py-2 flex flex-col semi-shadow">
                  <div
                    onClick={codClick}
                    className="flex justify-between w-full cursor-pointer"
                  >
                    <h1 className="uppercase font-bold text-sm">
                      cash on delivery
                    </h1>
                    <div className="w-5 h-5 border-2 border-black rounded-full"></div>
                  </div>
                  {codElements}
                </div>
              </div>
              <div className="w-1/2 semi-shadow border rounded-md py-2 px-4">
                <div className="flex justify-between px-2 py-1">
                  <h1 className="font-bold text-sm uppercase">subtotal</h1>
                  <p className="font-bold text-sm uppercase">php. 1800</p>
                </div>
                <div className="flex justify-between px-2 py-1">
                  <h1 className="font-bold text-sm uppercase">shipping</h1>
                  <p className="font-bold text-sm uppercase">php. 180</p>
                </div>
                <div className="w-full h-0.5 bg-black my-1"></div>
                <div className="flex justify-between px-2 py-2">
                  <h1 className="font-bold text-sm uppercase">
                    estimated total:
                  </h1>
                  <p className="font-bold text-sm uppercase">php. 2600</p>
                </div>
              </div>

              <div className="bg-lightYellow w-[40%] flex items-center justify-center px-2 absolute right-6 -bottom-4 rounded-lg cursor-pointer hover:scale-110 transition-all">
                <h1 className="uppercase font-bold text-xl">checkout</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
