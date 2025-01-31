import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate , Link} from "react-router-dom";
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';


const FamilyDetail = () => {
    const { register, formState: { errors } } = useFormContext();
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Step 3: Family Details</h2>
        
        <div>
        <fieldset className='border border-blue-800 p-4 rounded-md'>
            <legend className='text-lg text-blue-800'> Father's Details </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-2'>
            
            <InputField
            label="First Name*"
            name="fat_fname"
            register={register}
            validationRules={{ required: "Name is required" }} 
            errors={errors}
            />

            </div>
   
        </fieldset>
        </div>
        

        <div className='mt-4 text-right'>
          <Link to={"/enroll/user-form/appointment"} className='button-css'>Next</Link>        
        </div>

      </div>
    );
}

export default FamilyDetail