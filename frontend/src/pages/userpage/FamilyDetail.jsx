import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate , Link} from "react-router-dom";

const FamilyDetail = () => {
    const { register } = useFormContext();
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Step 3: Family Details</h2>
        <input {...register("f_name", { required: true })} placeholder="Family Name" />
        
      <Link to={"/enroll/user-form/appointment"}>Next</Link>

      </div>
    );
}

export default FamilyDetail