import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa";

const AdminLogin = () => {

  const [adminUsername , setAdminUsername] = useState('');

  const handleAdminLogin = () => {

  }

  return (
    <div className='flex flex-col justify-center items-center text-center h-screen bg-gray-300'>
      <div><img src="/gov.png" alt="" className='w-[150px] md:w-[200px]'/></div>
      <div className='my-4'>
        <label className='text-2xl text-blue-950'>Enter Your UserName</label>
        
        <div className='relative w-full'>
        <input 
          type="text" 
          value={adminUsername} 
          onChange={(e)=> setAdminUsername(e.target.value)} 
          className='border-2 border-blue-950 rounded-md px-4 py-2 pr-10 mt-2 w-full text-xl' />
      
        <button className='button-css inset-y-2 mt-2 size-8  right-2 flex items-center absolute' onClick={handleAdminLogin}>
          <FaArrowRight/>
        </button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin