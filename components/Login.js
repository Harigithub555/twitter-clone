import React from 'react'

import Image from 'next/image';

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    
         <div className="grid grid-cols-2 pl-[120px]">
      <div className=" h-screen grid place-items-center">

       <>
    <div style={{
      zIndex:-1,
      position:"fixed",
      width:"100vw",
      height:"100vh",
    }}>

   
    <Image
      src="/twitterx.png"
      alt="twitterx"
      layout="fill"
      objectFit ="cover"
     />
    
     </div>
     </>
      </div>
      
      <div className="grid   bg-white">
        <img className='h-[80px] w-[80px] m-5 text-sky-600'src="./twitterwx.png " alt=''></img>
        <div className='px-8 mt-10 items-center'>
          <span className='text-7xl  font-bold text-black '>
          Happening now
        </span>
          </div>
          <div className='px-8 mt-[100px] items-center'>
             <span className='text-3xl font-bold text-black'>
          Join Twitter today.
        </span>
          </div>
       
      
        
        <div className=''>
        <div className="flex gap-4 bg-[#fff] mb-[60px] mx-[40px] px-10 py-5 my-[30px] mr-[300px] border border-gray-300 rounded-3xl hover:bg-sky-50 items-center  cursor-pointer"
                onClick={() => signIn("google")}
        >
          <FcGoogle className="text-[30px] " />
          SignIn with Google
        </div>
        </div>
      </div>
      </div>
    

    
  )
}

export default Login



