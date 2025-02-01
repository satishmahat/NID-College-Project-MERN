import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate , Link} from "react-router-dom";
import InputField from '../../components/InputField.jsx';
import SelectField from '../../components/SelectField';


const ContactDetail = () => {
  const { register, trigger, formState: { errors } } = useFormContext();
  const navigate = useNavigate();
  
  const handleNext = async () => {
    const isValid = await trigger(); // Validate all fields in the current step
    if (isValid) {
        navigate("/enroll/user-form/family-detail"); // Only navigate if valid
    }
};

    return (
      <div>
        <h2>Step 2: Contact Details</h2>
        
        <div className='mx-6 sm:mx-12 md:mx-22 mt-6'>
        <fieldset className='border border-blue-800 p-4 rounded-md'>
            <legend className='text-lg text-blue-800'> Applicant's Permanent Address </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-2'>
            
            <InputField
              label="Mobile Number" 
              name="cont_mobile" 
              type="tel" 
              register={register} 
              validationRules={{ 
                required: "Mobile number is required",
                pattern: {
                  value: /^(98|97)\d{8}$/, 
                  message: "Enter a valid mobile number."
                }
              }} 
              errors={errors}
            />

            </div>
   
        </fieldset>
        </div>

        

        <div className='flex justify-between mt-4'>
          <Link to={"/enroll/user-form/"} className='button-css'>Previous</Link>        
          <Link onClick={handleNext} className='button-css'>Next</Link>        
        </div>

      </div>
    )
}

export default ContactDetail