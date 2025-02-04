import React from 'react'

import { useForm, FormProvider } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import EnrollNavbar from '../../components/EnrollNavbar';
import axios from "axios";

const UserFormLayout = () => {

  const methods = useForm(); // Initialize react-hook-form
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data)
    axios
      .post(`http://localhost:5000/forms/create-entry`,data)
      .then((response)=>{
        navigate('/');
        alert("Form Submitted")
      })
      .catch((error)=>{
        console.log(error)
        alert("An error occured. Please check console")
      })
  };

  return (
    <div className='bg-gray-300 h-full min-h-screen pb-6'>
    <header>
      <EnrollNavbar/>
    </header>
    
    <div className='mx-6 sm:mx-16 mt-6 bg-white pb-8 '>
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Outlet/> 
      </form>
    </FormProvider>
    </div>
    </div>
  )
}

export default UserFormLayout