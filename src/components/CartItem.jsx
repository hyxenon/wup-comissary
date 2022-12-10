import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'


const CartItem = ({title,price,img,category, quantity}) => {

    const { deleteToCart } = useContext(CartContext)

  return (
    <div className='flex justify-between px-4 py-8'>
        <div className='flex gap-4 '>
            <div className='flex w-[10rem] justify-center items-center border-2 border-black rounded-xl gradient-bg'>
                <img className='w-[6rem] object-cover ' src={img} alt="../assets/book1.png" />
            </div>
            <div className='w-1/3'>
                <h1 className='uppercase font-bold text-xl'>{category}</h1>
                <p className='pl-1 mt-1 text-xs font-semibold uppercase'>{title}</p>
            </div>
        </div>
        <div className='w-1/4 flex flex-col px-4'>
            <h1 className='uppercase font-bold'>php {price}</h1>
            <div className='flex items-center gap-2 ml-auto'>
                <p className='uppercase text-xs'>qty</p>
                <div className='px-5 border-2 rounded-lg border-black ml-auto'>
                        <p className='text-xs'>{quantity}</p>
                </div>
                <div className='flex gap-2'>
                <i className="fa-solid fa-plus cursor-pointer transition-all hover:scale-110"></i>
                <i className="fa-solid fa-minus cursor-pointer transition-all hover:scale-110"></i>
                </div>
            </div>
            <button onClick={()=> deleteToCart(title)} className='w-1/2 ml-auto mt-4 py-1 bg-red-500 text-white text-xs font-bold rounded-xl transition-all hover:scale-110' type='button'>Delete</button>
        </div>
    </div>
  )
}

export default CartItem