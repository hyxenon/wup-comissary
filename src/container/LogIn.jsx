import React, { useContext } from "react";
import { Navbar, SideLinks } from "../components";
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";
import logo2 from "../assets/logo2.png";
import logo from "../assets/wesleyanLogo.png";

import LogInContext from "../Context/LogInContext";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { handleChange, formSubmit } = useContext(LogInContext);

  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <Navbar page={"login"} />
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

          <div className="flex flex-col mt-20 w-3/6 pl-20">
            <h1 className="font-bold mx-auto text-3xl">LOGIN</h1>
            <form
              onSubmit={(e) => {
                navigate("/shop");
                formSubmit(e);
              }}
              className="flex flex-col mt-16 w-full justify-center"
            >
              <label className="font-bold text-lg" htmlFor="username">
                USERNAME
              </label>
              <input
                className="px-2 py-2 w-5/6 border-b-2 border-black outline-none"
                id="username"
                type="text"
                required
                onChange={(e) => handleChange(e)}
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

              <div className="flex flex-col mt-12 justify-center items-center gap-4">
                <button
                  className="font-bold border-2 mx-auto  border-black px-12 py-1 rounded-xl hover:scale-110 transition-all"
                  type="submit"
                >
                  LOGIN
                </button>
                <h1 className="font-bold text-sm">OR</h1>

                <div className="relative hover:scale-110 transition-all">
                  <button
                    className="bg-lightButton text-white font-bold  border-2 mx-auto semi-shadow px-12 py-1 rounded-xl"
                    type="button"
                  >
                    <Link to="/signup">
                    Sign Up
                    </Link>
                  </button>
                  <img className="w-12 absolute -right-3 -top-1.5" src={logo} alt="wesleyan logo" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LogIn;
