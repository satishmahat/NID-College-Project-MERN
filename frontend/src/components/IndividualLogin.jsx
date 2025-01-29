import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa";

const IndividualLogin = () => {

  const [loginNumber , setLoginNumber] = useState('')
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
  
    const numberPattern = /^(98|97)\d{8}$/;

    if (!numberPattern.test(loginNumber)) {
      setError("Enter a valid 10-digit number starting with 98 or 97.");
      return;
    }

    setError("");
    navigate("/enroll/user-form"); 

  }

  return (
    <div className='flex flex-col justify-center items-center text-center h-screen bg-gray-300'>
      <div><img src="/gov.png" alt="" className='w-[150px] md:w-[200px]'/></div>
      <div className='my-4'>
        <label className='text-2xl text-blue-950'>Enter Your Mobile Number</label>
        
        <div className='relative w-full'>
        <input 
          type="text" 
          value={loginNumber} 
          onChange={(e)=> setLoginNumber(e.target.value)} 
          placeholder='9XXXXXXXXX'
          className="border-2 border-blue-950 rounded-md px-4 py-2 pr-10 mt-2 w-full text-xl" />
      
        <button className='button-css inset-y-2 mt-2 size-8  right-2 flex items-center absolute' onClick={handleLogin}>
          <FaArrowRight/>
        </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

      </div>
    </div>
  )
}

export default IndividualLogin