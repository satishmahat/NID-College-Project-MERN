import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate , Link } from "react-router-dom";

const ApplicatationData = () => {
    
    const { register } = useFormContext();
    const navigate = useNavigate();

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <input {...register("a_name", { required: true })} placeholder="Name" />
      <Link to={"/enroll/user-form/contact-detail"}>Next</Link>
    </div>
  )
}

export default ApplicatationData