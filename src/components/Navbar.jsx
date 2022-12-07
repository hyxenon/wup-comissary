import React from 'react'


import logo from '../assets/wesleyanLogo.png'
const Navbar = () => {
  return (
    <header className='px-12  py-1'>
        <nav className='flex items-center'>
            <div className=''>
                <img className='w-24' src={logo} alt="../assets/wesleyanLogo.png" />
            </div>
            <div className='ml-auto mr-48'>
                <ul className='flex gap-28'>
                    <li className='font-bold text-lg uppercase cursor-pointer'>Home</li>
                    <li className='font-bold text-lg uppercase cursor-pointer'>Shop</li>
                    <li className='font-bold text-lg uppercase cursor-pointer'>Cart</li>
                    <li className='font-bold text-lg uppercase cursor-pointer'>Tracking</li>
                    <li className='font-bold text-lg uppercase cursor-pointer'>Log in</li>
                    <div className='relative'>
                        <input className='bg-transparent border border-black rounded-full px-3 py-0.5 text-xs' type="text" placeholder='SEARCH BAR'/>
                        <i className="fa-solid fa-magnifying-glass text-gray-500 absolute top-1.5 right-3"></i>
                    </div>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar