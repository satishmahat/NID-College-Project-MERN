import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate , Link } from "react-router-dom";
import InputField from '../../components/InputField.jsx';
import SelectField from '../../components/SelectField';
import DateField from '../../components/DateField';
import EnrollProgressBar from '../../components/EnrollProgressBar.jsx';



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
    


    <EnrollProgressBar progress={1}/>
        
        
        <div className='mx-6 sm:mx-12 md:mx-22 mt-6'>

        <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md'>
            <legend className='text-lg text-blue-800'> Main Applicant Detail </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-3'>
            
            <InputField
            label="First Name *"
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
            label="Last Name *"
            name="app_lname"
            register={register}
            validationRules={{ required: "Last Name is required" }} 
            errors={errors}
            />


            <DateField
            label="Date of Birth *"
            name="app_dob"
            register={register}
            validationRules={{ required: "Date of Birth is required" }}
            errors={errors}
            />

            <InputField
            label="Place of Birth *"
            name="app_placeofbirth"
            register={register}
            validationRules={{ required: "Place of Birth is required" }} 
            errors={errors}
            />

            <SelectField 
              label="Citizenship Type *" 
              name="app_citizenshiptype" 
              options={[
                { value: "Citizenship by Descent", label: "Citizenship by Descent" },
                { value: "Citizenship by Birth", label: "Citizenship by Birth" },
                { value: "Citizenship by Naturalization", label: "Citizenship by Naturalization" },
                { value: "Honorary Citizenship", label: "Honorary Citizenship" }
              ]}
              register={register} 
              validationRules={{ required: "Cytizenship Type is required" }} 
              errors={errors} 
            />

            <InputField
            label="Citizenship Number *"
            name="app_citizenshipno"
            register={register}
            validationRules={{ required: "Citizenship Number is required" }} 
            errors={errors}
            />

            <SelectField 
              label="Place of Issue of Citizenship *" 
              name="app_placeofissue" 
              options={[
                { value: "kathmandu", label: "Kathmandu" },
                { value: "Kaski", label: "Kaski" },
                { value: "Tanahun", label: "Tanahun" },
                { value: "Chitwan", label: "Chitwan" }
              ]}
              register={register} 
              validationRules={{ required: "Place of Issue is Required" }} 
              errors={errors} 
            />

            <DateField
            label="Issue Date *"
            name="app_dateofissue"
            register={register}
            validationRules={{ required: "Issue Date is required" }}
            errors={errors}
            />           

            </div>
        </fieldset>

        <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Additional Information </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-3'>

            <SelectField 
            label="Gender *" 
            name="add_gender" 
            options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Other", label: "Other" }
            ]}
            register={register} 
            validationRules={{ required: "Gender is required" }} 
            errors={errors} 
            />

            <SelectField 
            label="Marital Status *" 
            name="add_maritalstatus" 
            options={[
                { value: "Single", label: "Single" },
                { value: "Married", label: "Married" },
                { value: "Divorced", label: "Divorced" },
                { value: "Widowed", label: "Widowed" }
            ]}
            register={register} 
            validationRules={{ required: "Marital Status is required" }} 
            errors={errors} 
            />

            <SelectField 
            label="Religion *" 
            name="add_religion" 
            options={[
                { value: "Hindu", label: "Hindu" },
                { value: "Buddhist", label: "Buddhist" },
                { value: "Muslim", label: "Muslim" },
                { value: "Christian", label: "Christian" },
                { value: "Other", label: "Other" }
            ]}
            register={register} 
            validationRules={{ required: "Religion is required" }} 
            errors={errors} 
            />

            <SelectField 
            label="Educational Qualification (Level) *" 
            name="add_education" 
            options={[
                { value: "Primary", label: "Primary" },
                { value: "Secondary", label: "Secondary" },
                { value: "Higher_secondary", label: "Higher Secondary" },
                { value: "Bachelor", label: "Bachelor's Degree" },
                { value: "Master", label: "Master's Degree" },
                { value: "Phd", label: "PhD or Higher" }
            ]}
            register={register} 
            validationRules={{ required: "Educational Qualification is required" }} 
            errors={errors} 
            />


        

            </div>
        </fieldset>

        
        <div className='flex justify-end mt-4'>
            <Link onClick={handleNext} className='button-css'>Next</Link>
        </div>

        </div>
        
        
        
      </div>
    )
}

export default ApplicationData