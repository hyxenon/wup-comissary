import React from 'react'
import book1 from '../assets/shop/book1.png'

const CartItem = () => {
  return (
    <div className='flex justify-between px-4 py-8'>
        <div className='flex gap-4 '>
            <div className='flex w-[10rem] justify-center items-center border-2 border-black rounded-xl'>
                <img className='w-[6rem] object-cover' src={book1} alt="../assets/book1.png" />
            </div>
            <div className='w-1/3'>
                <h1 className='uppercase font-bold text-xl'>Lab Manual</h1>
                <p className='pl-1 mt-1 text-xs font-semibold uppercase'>FOR HEALTH ASSESSMENT IN NURSING SIXTH EDITION</p>
            </div>
        </div>
        <div className='w-1/4 flex flex-col px-4'>
            <h1 className='uppercase font-bold'>php 500.00</h1>
            <div className='flex items-center gap-2 ml-auto'>
                <p className='uppercase text-xs'>qty</p>
                <div className='px-5 border-2 rounded-lg border-black ml-auto'>
                        <p className='text-xs'>0</p>
                </div>
                <div className='flex gap-2'>
                <i className="fa-solid fa-plus cursor-pointer transition-all hover:scale-110"></i>
                <i className="fa-solid fa-minus cursor-pointer transition-all hover:scale-110"></i>
                </div>
            </div>
            <button className='w-1/2 ml-auto mt-4 py-1 bg-red-500 text-white text-xs font-bold rounded-xl transition-all hover:scale-110' type='button'>Delete</button>
        </div>
    </div>
  )
}

export default CartItem