import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [adminUsername, setAdminUsername] = useState('');
    const [error, setError] = useState('');
  

  // Allowed admin usernames
  const allowedAdmins = ["akriti28549", "ajit28548", "satish28584"];

  const handleAdminLogin = () => {
    if (allowedAdmins.includes(adminUsername)) {
      // Store authentication details
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("authExpiration", (Date.now() + 3600000).toString()); // 1-hour expiry
      localStorage.setItem("adminUsername", adminUsername);

      navigate("/admindashboard"); // Redirect to admin dashboard
    } else {
      setError("Access Denied: Invalid Username");
    }
  };

  return (
    <div className='flex flex-col justify-center items-center text-center h-screen bg-gray-300'>
      <div><img src="/gov.png" alt="Logo" className='w-[150px] md:w-[200px]' /></div>
      <div className='my-4'>
        <label className='text-2xl text-blue-950'>Enter Your Username</label>
        
        <div className='relative w-full'>
          <input 
            type="text" 
            value={adminUsername} 
            onChange={(e) => setAdminUsername(e.target.value)} 
            className='border-2 border-blue-950 rounded-md px-4 py-2 pr-10 mt-2 w-full text-xl' 
          />
      
          <button 
            className='button-css inset-y-2 mt-2 size-8 right-2 flex items-center absolute' 
            onClick={handleAdminLogin}
          >
            <FaArrowRight />
          </button>
        </div>
        {/* Error Message */}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

      </div>
    </div>
  );
};

export default AdminLogin;
