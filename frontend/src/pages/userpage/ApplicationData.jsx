import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate , Link } from "react-router-dom";
import InputField from '../../components/InputField.jsx';
import SelectField from '../../components/SelectField';



const ApplicationData = () => {
    const { register, trigger, formState: { errors } } = useFormContext();
    const navigate = useNavigate();
  
    const handleNext = async () => {
        const isValid = await trigger(); // Validate all fields in the current step
        if (isValid) {
            navigate("/enroll/user-form/contact-detail"); // Only navigate if valid
        }
    };


    return (
    <div>
    <h2>Step 1: Personal Information</h2>
        
        
        <div>
        <fieldset className='border border-blue-800 p-4 rounded-md'>
            <legend className='text-lg text-blue-800'> Main Applicant Detail </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-2'>
            <InputField
            label="First Name*"
            name="app_fname"
            register={register}
            validationRules={{ required: "First Name is required" }} 
            errors={errors}
            />
            <InputField
            label="Middle Name"
            name="app_mname"
            register={register}
            validationRules={{ required: false }} 
            errors={errors}
            />
            <InputField
            label="Last Name*"
            name="app_lname"
            register={register}
            validationRules={{ required: "Last Name is required" }} 
            errors={errors}
            />

            </div>
   
        </fieldset>
        </div>
        
        <div className='flex justify-end mt-4'>
            <Link onClick={handleNext} className='button-css'>Next</Link>
        </div>
        
      </div>
    )
}

export default ApplicationData