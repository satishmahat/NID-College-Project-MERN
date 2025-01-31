import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import SelectField from '../../components/SelectField';
import InputField from '../../components/InputField';

const Appointment = () => {
    const { register, trigger, formState: { errors } } = useFormContext();
    const navigate = useNavigate();

    const handleNext = async () => {
      const isValid = await trigger(); // Validate all fields in the current step
      if (isValid) {
          navigate("/enroll/user-form/preview"); // Only navigate if valid
      }
  };
  
    return (
      <div>
        <h2>Step 4: Appointment</h2>

        <div>
        <fieldset className='border border-blue-800 p-4 rounded-md'>
            <legend className='text-lg text-blue-800'> Appointment Details </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-2'>
            
            <SelectField 
              label="Select place for Biometric" 
              name="biometric_place" 
              options={[
                { value: "kathmandu", label: "Kathmandu" },
                { value: "kaski", label: "Kaski" },
                { value: "tanahun", label: "Tanahun" },
                { value: "chitwan", label: "Chitwan" }
              ]}
              register={register} 
              validationRules={{ required: "Please select a biometric location" }} 
              errors={errors} 
            />
            </div>
   
        </fieldset>
        </div>
        
        

        <div className='flex justify-between mt-4'>
          <Link to={"/enroll/user-form/family-detail"} className='button-css'>Previous</Link>        
          <Link onClick={handleNext} className='button-css'>Next</Link>        
        </div>

      </div>
    );
}

export default Appointment