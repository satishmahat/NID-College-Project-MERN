import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import SelectField from '../../components/SelectField';
import InputField from '../../components/InputField';

const Appointment = () => {
    const { register, formState: { errors } } = useFormContext();
    const navigate = useNavigate();
  
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
        

        <div className='mt-4 text-right'>
          <Link to={"/enroll/user-form/preview"} className='button-css'>Next</Link>        
        </div>

      </div>
    );
}

export default Appointment