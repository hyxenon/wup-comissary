import React, { useContext } from "react";
import { Navbar, SideLinks, VerificationModal } from "../components";
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";
import logo2 from "../assets/logo2.png";

import LogInContext from "../Context/LogInContext";

const Signup = () => {

  const {modal,setModal} = useContext(LogInContext) 

  return (
    <div className="h-screen">
      {/*-------- Modal---------- */}
      {modal && <VerificationModal />}
      <Navbar />
      <SideLinks />
      <img
        className="absolute right-0 -top-[19rem] w-[1800px] object-cover -z-10"
        src={background1}
        alt="../assets/background1.png"
      />
      <img
        className="absolute bottom-8 object-cover -z-10"
        src={background2}
        alt="../assets/background2.png"
      />
      <main className="flex justify-center items-center mt-10 3xl:mt-20">
        <div className="flex w-[50rem] 3xl:w-[60rem] h-[40rem] border bg-white box-shadow filter drop-shadow-2xl rounded-xl relative overflow-hidden">
          <img
            className="absolute bottom-0 -left-20 w-5/6 -z-10 opacity-60"
            src={logo2}
            alt="../assets/logo2.png"
          />
          <div className="w-1/2 h-full"></div>
          <div className="absolute bottom-1 right-5">
            <p className="text-xs uppercase font-bold">note: type in your institutional email so we can know that it is you</p>
          </div>
          <div className="flex flex-col mt-20 w-3/6 pl-20">
            <h1 className="font-bold mx-auto text-3xl">SIGN UP</h1>
            <form onSubmit={(e)=>{
              e.preventDefault()
              setModal(true)
          
            }} className="flex flex-col mt-16 w-full justify-center">
              <label className="font-bold text-lg" htmlFor="username">
                USERNAME
              </label>
              <input
                className="px-2 py-2 w-5/6 border-b-2 border-black outline-none"
                id="username"
                type="text"
                required
              />
              <label className="font-bold text-lg mt-8" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="px-2 py-2 w-5/6 border-b-2 border-black outline-none"
                id="password"
                type="password"
                required
              />
               <label className="font-bold text-lg mt-8" htmlFor="wesleyanEmail">
                WESLEYAN EMAIL
              </label>
              <input
                className="px-2 py-2 w-5/6 border-b-2 border-black outline-none"
                id="wesleyanEmail"
                type="email"
                required
              />
              <button
                className="font-bold text-lg border-2 mx-auto mt-16 border-black px-12 py-1 rounded-xl hover:scale-110 transition-all"
                type="submit"
              >
                VERIFY
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
