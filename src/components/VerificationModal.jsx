import React, { useContext } from 'react'
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";
import otp from '../assets/otp.png'
import LogInContext from '../Context/LogInContext';

const VerificationModal = () => {

  const { setModal } = useContext(LogInContext)
  
  return (
    <div className='bg-gray-300 bg-opacity-90 w-full h-full z-[99] fixed flex items-center justify-center'>
        <div className='bg-white px-12 flex flex-col items-center border-4 rounded-2xl border-black w-[30rem] h-[34rem] relative overflow-hidden'>
            <img className='absolute -top-12' src={background1} alt="../assets/background1.png" />
            <img className='absolute -bottom-12' src={background2} alt="../assets/background2.png" />
            <div className='w-6 h-6 rounded-full bg-red-500 absolute right-8 top-5 cursor-pointer z-10 hover:scale-110 transition-all flex items-center justify-center'>
                 <i onClick={()=> setModal(false)} className="fa-solid fa-x font-bold text-xs text-white"></i>
            </div>
            
            <h1 className='font-bold mt-8 text-3xl uppercase z-10'>verification code</h1>
            <img className='z-10 mt-8' src={otp} alt="../assets/otp.png" />
            <p className='font-bold mt-8 uppercase px-4'>we have sent a 5-digit code to your wesleyan email to verify that it is you</p>
            <div className='grid grid-cols-5 mt-16 w-full items-center justify-center gap-4 z-10'>
                    <div className='bg-white border-2 w-16 h-16 semi-shadow rounded-xl'>
                        <input className='outline-none text-2xl font-bold text-center w-full h-full' type="text" maxLength={1}/>
                    </div>
                     <div className='bg-white border-2 w-16 h-16 semi-shadow rounded-xl'>
                        <input className='outline-none text-2xl font-bold text-center w-full h-full' type="text" maxLength={1}/>
                    </div>
                     <div className='bg-white border-2 w-16 h-16 semi-shadow rounded-xl'>
                         <input className='outline-none text-2xl font-bold text-center w-full h-full' type="text" maxLength={1}/>
                    </div>
                     <div className='bg-white border-2 w-16 h-16 semi-shadow rounded-xl'>
                         <input className='outline-none text-2xl font-bold text-center w-full h-full' type="text" maxLength={1}/>
                    </div>
                     <div className='bg-white border-2 w-16 h-16 semi-shadow rounded-xl'>
                         <input className='outline-none text-2xl font-bold text-center w-full h-full' type="text" maxLength={1}/>
                    </div>
            </div>
            <p className='uppercase font-bold text-sm ml-auto mt-auto z-10'>didn't get the code? <span className='text-lightGreen cursor-pointer'>resend code</span></p>
        </div>
    </div>
  )
}

export default VerificationModal