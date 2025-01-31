import React from 'react'

import { useForm, FormProvider } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";

const UserFormLayout = () => {

  const methods = useForm(); // Initialize react-hook-form
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Collect all form data
  };

  return (
    <div>
    <header>
      <h1>Navbar</h1>
    </header>
    
    <div className='px-6 sm:px-16'>
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Outlet /> 
      </form>
    </FormProvider>
    </div>
    </div>
  )
}

export default UserFormLayout