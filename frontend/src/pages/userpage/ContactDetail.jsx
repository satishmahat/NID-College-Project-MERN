import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate , Link} from "react-router-dom";

const ContactDetail = () => {
    const { register } = useFormContext();
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Step 2: Contact Details</h2>
        <input {...register("c_phone", { required: true })} placeholder="Phone No" />
        
        <Link to={"/enroll/user-form/family-detail"}>Next</Link>

      </div>
    )
}

export default ContactDetail