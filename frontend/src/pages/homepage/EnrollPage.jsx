import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { FaUser, FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const EnrollPage = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex relative">

      {/* Home Icon */}
      <button 
        className="absolute top-6 left-6 text-white bg-blue-900 p-3 rounded-full hover:bg-blue-700 shadow-md z-10 cursor-pointer"
        onClick={() => navigate("/")}
        title="Back to Home"
      >
        <FaHome className="w-8 h-8" />
      </button>

      <div className="w-full mx-auto grid md:grid-cols-2">

        <div className="w-full bg-blue-950 text-white flex flex-col items-center justify-center text-center p-8">
          <img src="/gov.png" alt="" className='w-[150px] md:w-[200px]'/>
          <h1 className='text-xl mt-2'>Government Of Nepal<br />Ministry Of Home Affairs</h1>
          <h1 className='mt-2'>Department Of National ID and Civil Registration</h1>
        </div>
        
        <div className="w-full bg-gray-300 text-black flex flex-col items-center justify-center p-8">
          <h1 className='text-xl text-gray-600 '>Welcome To</h1>
          <h1 className='text-3xl text-center'>NID Pre-Enrollment System</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 w-full mt-5'>
            <button onClick={()=> navigate("/enroll/login")} className='button-css text-xl flex items-center justify-center gap-4'><FaUser />Login For Individuals</button>
            <button onClick={()=> navigate("/enroll/admin")} className='button-css text-xl flex items-center justify-center gap-4'><RiAdminFill />Login For Admins</button>
          </div>

        </div>
      
      </div>

    </div>
  )
}

export default EnrollPage
