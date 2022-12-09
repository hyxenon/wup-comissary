import React from 'react'

const SideLinks = () => {
  return (
    <div className='flex flex-col items-center w-64 h-full absolute 2xl:ml-12 3xl:ml-16'>
        <h1 className='rotate-[270deg] font-extrabold mt-20'>WU-P COMISSARY</h1>
        <div className='w-0.5 h-40 bg-black mt-20'></div>
        {/* Line */}
        <div className='flex flex-col items-center gap-4 my-8'>
        <i className="fa-brands fa-facebook-f font-bold cursor-pointer text-xl"></i>
        <i className="fa-brands fa-twitter font-bold cursor-pointer text-xl"></i>
        <i className="fa-brands fa-instagram font-bold cursor-pointer text-xl"></i>
        </div>
        {/* Line */}
        <div className='w-0.5 h-full bg-black'></div>
    </div>
  )
}

export default SideLinks