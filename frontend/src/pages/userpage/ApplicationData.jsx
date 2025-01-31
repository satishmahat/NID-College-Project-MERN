import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate , Link } from "react-router-dom";
import InputField from '../../components/InputField.jsx';
import SelectField from '../../components/SelectField';



const ApplicationData = () => {
    const { register, formState: { errors } } = useFormContext();
    const navigate = useNavigate();
  
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
        
        <div className='mt-4 text-right'>
            <Link to={"/enroll/user-form/contact-detail"} className='button-css'>Next</Link>
        </div>
        
      </div>
    )
}

export default ApplicationData