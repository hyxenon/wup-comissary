import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/wesleyanLogo.png";
const Navbar = ({ page }) => {
  return (
    <header className="px-12  py-4">
      <nav className="flex items-center">
        <div className="">
          <img
            className="w-16 xl:w-20 2xl:w-24"
            src={logo}
            alt="../assets/wesleyanLogo.png"
          />
        </div>
        <div className="ml-auto 2xl:mr-20 3xl:mr-48">
          <ul className="flex xl:gap-20 2xl:gap-24 3xl:gap-28">
            <li className={`font-bold uppercase cursor-pointer`}>
              <Link to="/">Home</Link>
            </li>
            <li
              className={`font-bold uppercase cursor-pointer ${
                page === "shop" ? "text-lightGreen" : "text-black"
              }`}
            >
              <Link to="/shop">Shop</Link>
            </li>
            <li
              className={`font-bold uppercase cursor-pointer ${
                page === "cart" ? "text-lightGreen" : "text-black"
              }`}
            >
              <Link to="/cart">Cart</Link>
            </li>
            <li
              className={`font-bold uppercase cursor-pointer ${
                page === "tracking" ? "text-lightGreen" : "text-black"
              }`}
            >
              <Link to="/tracking">Tracking</Link>
            </li>
            <li
              className={`font-bold uppercase cursor-pointer ${
                page === "login" ? "text-lightGreen" : "text-black"
              }`}
            >
              <Link to="/login">Login</Link>
            </li>
            <div className="relative">
              <input
                className="bg-transparent border border-black rounded-full px-3 py-0.5 text-xs"
                type="text"
                placeholder="SEARCH BAR"
              />
              <i className="fa-solid fa-magnifying-glass text-gray-500 absolute top-1.5 right-3"></i>
            </div>
            <div className="relative">
              <i className="fa-solid fa-cart-shopping cursor-pointer text-lg text-gray-500"></i>
              <div className="w-4 absolute -top-2 -right-2 border border-black rounded-full flex items-center justify-center">
                <p className="text-xs font-bold">0</p>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
