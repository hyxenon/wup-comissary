import React from "react";

const ShopItems = ({img, price}) => {
  return (
    <div className="bg-white w-[200px] 3xl:w-[16rem] h-[300px] 3xl:h-[20.5rem]  border border-black rounded-xl flex flex-col items-center justify-center semi-shadow">
      <div className="flex justify-center items-center border w-[11rem] h-[15rem]  3xl:w-[13rem] 3xl:h-[16rem] px-2 py-2 rounded-xl semi-shadow gradient-bg">
          <img className="w-[90%] object-cover" src={img} alt={img} />
      </div>
      
      <div className="flex justify-around items-center mt-4 w-full">
        <p className="text-sm font-bold">PHP. {price}</p>
        <i className="fa-solid fa-cart-shopping cursor-pointer text-gray-500"></i>
      </div>
    </div>
  );
};

export default ShopItems;
