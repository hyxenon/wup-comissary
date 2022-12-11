import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/wesleyanLogo.png";
import CartContext from "../Context/CartContext";
import LogInContext from "../Context/LogInContext";
const Navbar = ({ page }) => {
  const { cartItems } = useContext(CartContext);

  const { isLogIn, logOut } = useContext(LogInContext);
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
          <ul className="flex gap-10 xl:gap-20 2xl:gap-24 3xl:gap-28">
            <li
              className={`font-bold uppercase cursor-pointer hover:scale-125 transition-all`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`font-bold uppercase cursor-pointer hover:scale-125 transition-all ${
                page === "shop" ? "text-lightGreen" : "text-black"
              }`}
            >
              <Link to="/shop">Shop</Link>
            </li>
            <li
              className={`font-bold uppercase cursor-pointer hover:scale-125 transition-all ${
                page === "cart" ? "text-lightGreen" : "text-black"
              }`}
            >
              <Link to="/cart">Cart</Link>
            </li>
            <li
              className={`font-bold uppercase cursor-pointer hover:scale-125 transition-all ${
                page === "tracking" ? "text-lightGreen" : "text-black"
              }`}
            >
              <Link to="/tracking">Tracking</Link>
            </li>
            <li
            onClick={()=>{
              if(isLogIn === "true"){
                logOut()
                return
              }
            }}
              className={`font-bold uppercase cursor-pointer hover:scale-125 transition-all ${
                page === "login" ? "text-lightGreen" : "text-black"
              }`}
            >
              <Link to="/login">{`${isLogIn === "false" ? "login" : "logout"}`}</Link>
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
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping cursor-pointer text-lg text-gray-500 hover:scale-125 transition-all"></i>
              </Link>
              <div className="w-4 px-2.5 absolute -top-2 -right-4 border border-black rounded-full flex items-center justify-center">
                <p className="text-xs font-bold">{cartItems.length}</p>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
