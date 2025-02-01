import React from 'react'
import { useFormContext } from "react-hook-form";
import { Link } from 'react-router-dom';

const Preview = () => {
    const { watch } = useFormContext();
    const formData = watch(); // Get all form values
  
    return (
      <div>

        <h2>Step 5: Preview</h2>

        <div className='mx-6 sm:mx-12 md:mx-22 mt-6'>
          
          <fieldset className='border border-blue-800 p-4 rounded-md'>
            <legend className='text-lg text-blue-800'> Preview Your Details </legend>
            
            <h2>Preview Your Data</h2>
            <p>First Name: {formData.app_fname}</p>
            <p>Middle Name: {formData.app_mname}</p>
            <p>Last Name: {formData.app_lname}</p>
            <br />

            <p>Contact</p><br />
            <p>Mobile Number: {formData.cont_mobile}</p>
            <br />

            <p>Father</p><br />
            <p>First Name: {formData.fat_fname}</p>
            <br />

            <p>Appointment</p>
            <p>Appointment Place: {formData.biometric_place}</p>
            <br />

          </fieldset>
        </div>


        <div className='flex justify-between mt-4'>
        <Link to={"/enroll/user-form/appointment"} className='button-css'>Previous</Link>        
        <button type="submit" className='button-css bg-red-700'>Submit</button> 
        </div>
        
      </div>
    )
}

export default Preview