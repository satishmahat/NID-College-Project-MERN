import React from 'react'

import { useForm, FormProvider } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import EnrollNavbar from '../../components/EnrollNavbar';

const UserFormLayout = () => {

  const methods = useForm(); // Initialize react-hook-form
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Collect all form data
  };

  return (
    <div className='bg-gray-300 h-screen'>
    <header>
      <EnrollNavbar/>
    </header>
    
    <div className='mx-6 sm:mx-16 mt-6 bg-white'>
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