import React from 'react'
import { useFormContext } from "react-hook-form";
import { Link } from 'react-router-dom';

const Preview = () => {
    const { watch } = useFormContext();
    const formData = watch(); // Get all form values
  
    return (
      <div>
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


        <div className='flex justify-between mt-4'>
        <Link to={"/enroll/user-form/appointment"} className='button-css'>Previous</Link>        
        <button type="submit" className='button-css'>Submit</button> 
        </div>
        
      </div>
    )
}

export default Preview