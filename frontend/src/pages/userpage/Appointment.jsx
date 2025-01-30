import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

const Appointment = () => {
    const { register } = useFormContext();
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Step 4: Appointment</h2>
        <input {...register("a_date", { required: true })} placeholder="Date" />
        
        <Link to={"/enroll/user-form/preview"}>Next</Link>

      </div>
    );
}

export default Appointment