import React from 'react'

import shape1 from "../assets/shape1.png"
import shape2 from "../assets/shape2.png"
const About = () => {
  return (
    <div className='mt-40 flex flex-col relative'>

        <div className='flex items-center justify-center relative z-10'>
            <h1 className='text-9xl font-bold font-hughs italic opacity-20 select-none'>About Us</h1>
            <h1 className='text-7xl text-heading1 font-bold absolute font-lemonMilk'>About Us</h1>
        </div>
        <div className='flex justify-center mt-32'>
            
            <div className='w-[40rem] h-64 flex px-4 relative'>
                <img className='w-full  absolute -z-20 object-cover' src={shape1} alt="" />
                <p className='w-[60%] h-[40%] absolute top-14 right-6 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime ut itaque! Quam inventore obcaecati a temporibus error, voluptate quia veniam vel amet sequi cum quibusdam magnam. Quisquam, voluptatibus asperiores.</p>
            </div>
            <div className='w-[40rem] h-64 flex px-4 relative'>
                <img className='w-full flip absolute -z-20 object-cover' src={shape2} alt="" />
                <p className='w-[60%] h-[40%] absolute top-14 left-16 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime ut itaque! Quam inventore obcaecati a temporibus error, voluptate quia veniam vel amet sequi cum quibusdam magnam. Quisquam, voluptatibus asperiores.</p>
            </div>
        </div>
    </div>
  )
}

export default About