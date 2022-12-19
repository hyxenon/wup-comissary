import React from 'react'

import shape1 from "../assets/shape1.png"
import shape2 from "../assets/shape2.png"
const About = () => {
  return (
    <div className='mt-20 3xl:mt-40 flex flex-col relative'>

        <div className='flex items-center justify-center relative z-10'>
            <h1 className='text-9xl font-bold font-alex italic opacity-20 select-none'>About Us</h1>
            <h1 className='text-6xl text-heading1 font-bold absolute font-lemonMilk'>ABOUT US</h1>
        </div>
        <div className='flex justify-center ml-20 px-20 3xl:mt-32 '>
            
            <div className='w-[48rem] h-64 flex px-4 relative'>
                <img className='w-full  absolute -z-20 object-cover' src={shape1} alt="" />
                <p className='w-[60%] h-[40%] text-sm 3xl:text-base absolute top-14 right-6'>Every enrollment it is a struggle to buy uniforms or other things that we need at the commissary due to the high volume of students, we experienced needing to come back a few times just to buy our needs. </p>
            </div>
            <div className='w-[48rem] h-64 flex px-4 relative'>
                <img className='w-full flip absolute -z-20 object-cover' src={shape2} alt="" />
                <p className='w-[60%] h-[40%] text-sm 3xl:text-base absolute top-14 left-16'>We came up with this idea so we can make the lives of each Wesleyanian easier and more convenient in buying their needs at school.</p>
            </div>
        </div>
    </div>
  )
}

export default About