import React from 'react'
import { FaHome } from "react-icons/fa";

const EnrollNavbar = () => {



  return (

    <div>

    <div className='flex justify-between px-6 sm:px-16 py-4'>
        
        <div className='flex gap-3'>
        <div className='flex justify-center items-center'><img src="/gov.png" alt="" className=' w-[100px]'/></div>
        <div className='flex flex-col justify-center'>
            <p className='text-sm text-blue-800'>Government of Nepal</p>
            <p className='font-semibold text-blue-800'>Ministry of Home Affair</p>
            <p className='font-semibold text-red-700'>Department of national ID and Civil Registration</p>
        </div>
        </div>

        <div className='flex justify-center items-center'>
            <img src="/nepal-flag.png" alt="" className=' w-[40px] hidden sm:block'/>
        </div>
    </div>

    <div className='flex items-center mx-6 sm:mx-16 py-1 px-2 md:px-4 gap-2 bg-blue-800 text-white'>
        <FaHome size={18}/>
        <h1 className='text-2sm'>Home</h1>
    </div>
        
    </div>
  )
}

export default EnrollNavbar