import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../Context/CartContext";
import LogInContext from "../Context/LogInContext";

const ShopItems = ({img, price, title, category}) => {

  const {addToCart} = useContext(CartContext)

  const { isLogIn } = useContext(LogInContext)

  const navigate = useNavigate()
  return (
    <div className="bg-white px-4 py-4 w-[200px] 3xl:w-[16rem] h-[350px] 3xl:h-[20.5rem]  border border-black rounded-xl flex flex-col items-center justify-center semi-shadow">
      <div className="flex justify-center items-center border w-[11rem] h-[15rem]  3xl:w-[13rem] 3xl:h-[16rem] px-2 py-2 rounded-xl semi-shadow gradient-bg">
          <img className="w-[90%] object-cover" src={img} alt={img} />
      </div>
      <h1 className="font-bold text-sm text-center mt-4">{title}</h1>
      <div className="flex justify-around items-center mt-4 w-full">
        <p className="text-sm font-bold">PHP. {price}</p>
        <i onClick={()=>{ 
          if(isLogIn === "false"){
            navigate("/login")
            return
          }
          addToCart(category, title, price, img)
          }} className="fa-solid fa-cart-shopping cursor-pointer text-gray-500 hover:scale-125 hover:text-lightGreen transition-all"></i>
      </div>
    </div>
  );
};

export default ShopItems;
