import React from 'react'
import { useFormContext } from "react-hook-form";

const Preview = () => {
    const { watch } = useFormContext();
    const formData = watch(); // Get all form values
  
    return (
      <div>
        <h2>Preview Your Data</h2>
        <p>Name: {formData.a_name}</p>
        <p>Number: {formData.c_phone}</p>
        <p>Family name: {formData.f_name}</p>
        <p>Appointment: {formData.a_date}</p>
        


        <button type="submit">Submit</button>
        
      </div>
    )
}

export default Preview