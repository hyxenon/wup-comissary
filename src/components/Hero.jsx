import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col items-start w-[40%] my-24 ml-64 3xl:ml-80'>
        <h1 className='font-bold text-8xl 3xl:text-9xl'>WU-P ONLINE COMISSARY</h1>
        <p className='pl-4 mt-8 text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, enim facere. Tempore reiciendis nemo blanditiis tenetur consequatur necessitatibus? Exercitationem, culpa voluptate. Quo corporis dolorem magnam perferendis cupiditate alias, voluptatum inventore.</p>
        <button className='mx-auto mt-12 px-12 py-2 font-bold text-lg border-2 border-black rounded-xl uppercase cursor-pointer hover:scale-110 transition-all' type='button'><Link to="/shop">Shop Now</Link></button>
   </div>
  )
}

export default Hero