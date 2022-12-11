import React, { useContext, useState } from 'react'
import CartContext from '../Context/CartContext'


const CartItem = ({title,price,img,category, quantity}) => {

    const { deleteToCart, addQuantity, deleteQuantity } = useContext(CartContext)

    const [sizes, setSizes] = useState([
        {
            size: "small",
            isClick: true,
        },
        {
            size: "Medium",
            isClick: false,
        },
        {
            size: "Large",
            isClick: false,
        },
        {
            size: "Extra Large",
            isClick: false,
        }
    ])

   

    const sizesElements = (
        <div className='grid grid-cols-4 bg-green-50 mt-4 '>
            <p className={`text-sm px-1 font-bold py-0.5 border text-center border-black cursor-pointer hover:bg-green-400 ${sizes[0].isClick && "bg-green-400"}`}>S</p>
            <p className='text-sm px-1 font-bold py-0.5 border text-center border-black cursor-pointer hover:bg-green-400'>M</p>
            <p className='text-sm px-1 font-bold py-0.5 border text-center border-black cursor-pointer hover:bg-green-400'>LG</p>
            <p className='text-sm px-1 font-bold py-0.5 border text-center border-black cursor-pointer hover:bg-green-400'>XL</p>
        </div>
    )
  return (
    <div className='flex justify-between px-4 py-8'>
        <div className='flex gap-4 '>
            <div className='flex w-[10rem] justify-center items-center border-2 border-black rounded-xl gradient-bg'>
                <img className='w-[6rem] object-cover ' src={img} alt="../assets/book1.png" />
            </div>
            <div className='w-[10rem]'>
                <h1 className='uppercase font-bold text-xl'>{category}</h1>
                <p className='pl-1 mt-1 text-xs font-semibold uppercase'>{title}</p>
                {category === "uniform" ? sizesElements : null}
            </div>
        </div>
        <div className='w-[10rem] flex flex-col px-4'>
            <h1 className='uppercase font-bold'>php {price}</h1>
            <div className='flex items-center gap-2 ml-auto'>
                <p className='uppercase text-xs'>qty</p>
                <div className='px-5 border-2 rounded-lg border-black ml-auto'>
                        <p className='text-xs'>{quantity}</p>
                </div>
                <div className='flex gap-2'>
                <i onClick={()=> addQuantity(title)} className="fa-solid fa-plus cursor-pointer transition-all hover:scale-110"></i>
                <i onClick={()=> deleteQuantity(title,quantity)} className="fa-solid fa-minus cursor-pointer transition-all hover:scale-110"></i>
                </div>
            </div>
            <button onClick={()=> deleteToCart(title)} className='w-1/2 ml-auto mt-4 py-1 bg-red-500 text-white text-xs font-bold rounded-xl transition-all hover:scale-110' type='button'>Delete</button>
        </div>
    </div>
  )
}

export default CartItem