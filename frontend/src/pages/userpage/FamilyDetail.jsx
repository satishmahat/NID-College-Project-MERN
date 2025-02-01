import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate , Link} from "react-router-dom";
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';
import DateField from '../../components/DateField';


const FamilyDetail = () => {
    const { register,watch, trigger, formState: { errors } } = useFormContext();
    const navigate = useNavigate();

    const handleNext = async () => {
      const isValid = await trigger(); // Validate all fields in the current step
      if (isValid) {
          navigate("/enroll/user-form/appointment"); // Only navigate if valid
      }
  };
  
    return (
      <div>
        <h2>Step 3: Family Details</h2>
        
        <div className='mx-6 sm:mx-12 md:mx-22 mt-6'>

        {/* Father's Details */}
        <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md'>
            <legend className='text-lg text-blue-800'> Father's Details </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-3'>
            
            <InputField
            label="First Name *"
            name="fat_fname"
            register={register}
            validationRules={{ required: "First Name is required" }} 
            errors={errors}
            />

            <InputField
            label="Middle Name"
            name="fat_mname"
            register={register}
            validationRules={{ required: false }} 
            errors={errors}
            />

            <InputField
            label="Last Name *"
            name="fat_lname"
            register={register}
            validationRules={{ required: "Last Name is required" }} 
            errors={errors}
            />

            <InputField
            label="Citizenship Number *"
            name="fat_citizenshipno"
            register={register}
            validationRules={{ required: "Citizenship Number is required" }} 
            errors={errors}
            />

            </div>
   
        </fieldset>

        {/* Mother's Details */}
        <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Mother's Details </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-3'>
                <InputField label="First Name *" name="mot_fname" register={register} validationRules={{ required: "First Name is required" }} errors={errors} />
                <InputField label="Middle Name" name="mot_mname" register={register} validationRules={{ required: false }} errors={errors} />
                <InputField label="Last Name *" name="mot_lname" register={register} validationRules={{ required: "Last Name is required" }} errors={errors} />
                <InputField label="Citizenship Number *" name="mot_citizenshipno" register={register} validationRules={{ required: "Citizenship Number is required" }} errors={errors} />
            </div>
        </fieldset>

        {/* Grandfather's Details */}
        <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Grandfather's Details </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-3'>
                <InputField label="First Name *" name="gfat_fname" register={register} validationRules={{ required: "First Name is required" }} errors={errors} />
                <InputField label="Middle Name" name="gfat_mname" register={register} validationRules={{ required: false }} errors={errors} />
                <InputField label="Last Name *" name="gfat_lname" register={register} validationRules={{ required: "Last Name is required" }} errors={errors} />
                <InputField label="Citizenship Number *" name="gfat_citizenshipno" register={register} validationRules={{ required: "Citizenship Number is required" }} errors={errors} />
            </div>
        </fieldset>

        {/* Grandmother's Details */}
        <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Grandmother's Details </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-3'>
                <InputField label="First Name *" name="gmot_fname" register={register} validationRules={{ required: "First Name is required" }} errors={errors} />
                <InputField label="Middle Name" name="gmot_mname" register={register} validationRules={{ required: false }} errors={errors} />
                <InputField label="Last Name *" name="gmot_lname" register={register} validationRules={{ required: "Last Name is required" }} errors={errors} />
                <InputField label="Citizenship Number *" name="gmot_citizenshipno" register={register} validationRules={{ required: "Citizenship Number is required" }} errors={errors} />
            </div>
        </fieldset>

        {/* Spouse's Details (Only required if married) */}
        {watch("add_maritalstatus") === "Married" && (
            <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
                <legend className='text-lg text-blue-800'> Spouse's Details </legend>
                
                <div className='grid sm:grid-cols-2 gap-x-6 gap-y-3'>
                    <InputField label="First Name *" name="spou_fname" register={register} validationRules={{ required: "First Name is required" }} errors={errors} />
                    <InputField label="Middle Name" name="spou_mname" register={register} validationRules={{ required: false }} errors={errors} />
                    <InputField label="Last Name *" name="spou_lname" register={register} validationRules={{ required: "Last Name is required" }} errors={errors} />
                    <InputField label="Citizenship Number *" name="spou_citizenshipno" register={register} validationRules={{ required: "Citizenship Number is required" }} errors={errors} />
                </div>
            </fieldset>
        )}

        <div className='flex justify-between mt-4'>
          <Link to={"/enroll/user-form/contact-detail"} className='button-css'>Previous</Link>        
          <Link onClick={handleNext} className='button-css'>Next</Link>        
        </div>

        </div>

      </div>
    );
}

export default FamilyDetail