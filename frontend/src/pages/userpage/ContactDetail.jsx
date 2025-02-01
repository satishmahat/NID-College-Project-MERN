import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate , Link} from "react-router-dom";
import InputField from '../../components/InputField.jsx';
import SelectField from '../../components/SelectField';
import DateField from '../../components/DateField';



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


        <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md'>
            <legend className='text-lg text-blue-800'> Applicant's Permanent Address </legend>

            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-3'>

                <InputField
                    label="Mobile Number" 
                    name="per_mobile" 
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

                <SelectField 
                    label="Province *" 
                    name="per_province" 
                    options={[
                        { value: "Koshi Province", label: "Koshi Province" },
                        { value: "Madhesh Province", label: "Madhesh Province" },
                        { value: "Bagmati Province", label: "Bagmati Province" },
                        { value: "Gandaki Province", label: "Gandaki Province" },
                        { value: "Lumbini Province", label: "Lumbini Province" },
                        { value: "Karnali Province", label: "Karnali Province" },
                        { value: "Sudurpashchim Province", label: "Sudurpashchim Province" }
                    ]}
                    register={register} 
                    validationRules={{ required: "Province is required" }} 
                    errors={errors} 
                />

                <SelectField 
                    label="District *" 
                    name="per_district" 
                    options={[
                        { value: "Kathmandu", label: "Kathmandu" },
                        { value: "Bhaktapur", label: "Bhaktapur" },
                        { value: "Lalitpur", label: "Lalitpur" },
                        { value: "Chitwan", label: "Chitwan" },
                        { value: "Kaski", label: "Kaski" },
                        { value: "Morang", label: "Morang" },
                        { value: "Jhapa", label: "Jhapa" }
                    ]}
                    register={register} 
                    validationRules={{ required: "District is required" }} 
                    errors={errors} 
                />

                
                <InputField
                    label="Municipality *"
                    name="per_municipality"
                    type="text"
                    register={register}
                    validationRules={{ required: "Municipality is required" }} 
                    errors={errors}
                />

                <InputField
                    label="Ward No *"
                    name="per_ward"
                    type="number"
                    register={register}
                    validationRules={{ 
                        required: "Ward No is required",
                        min: { value: 1, message: "Ward No must be at least 1" }
                    }} 
                    errors={errors}
                />

                <InputField
                    label="Village/Tole *"
                    name="per_village"
                    type="text"
                    register={register}
                    validationRules={{ required: "Village/Tole is required" }} 
                    errors={errors}
                />

            </div>
        </fieldset>

        <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Applicant's Temporary Address </legend>

            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-3'>

                <SelectField 
                    label="Province *" 
                    name="temp_province" 
                    options={[
                        { value: "Koshi Province", label: "Koshi Province" },
                        { value: "Madhesh Province", label: "Madhesh Province" },
                        { value: "Bagmati Province", label: "Bagmati Province" },
                        { value: "Gandaki Province", label: "Gandaki Province" },
                        { value: "Lumbini Province", label: "Lumbini Province" },
                        { value: "Karnali Province", label: "Karnali Province" },
                        { value: "Sudurpashchim Province", label: "Sudurpashchim Province" }
                    ]}
                    register={register} 
                    validationRules={{ required: "Province is required" }} 
                    errors={errors} 
                />

                <SelectField 
                    label="District *" 
                    name="temp_district" 
                    options={[
                        { value: "Kathmandu", label: "Kathmandu" },
                        { value: "Bhaktapur", label: "Bhaktapur" },
                        { value: "Lalitpur", label: "Lalitpur" },
                        { value: "Chitwan", label: "Chitwan" },
                        { value: "Kaski", label: "Kaski" },
                        { value: "Morang", label: "Morang" },
                        { value: "Jhapa", label: "Jhapa" }
                    ]}
                    register={register} 
                    validationRules={{ required: "District is required" }} 
                    errors={errors} 
                />

                <InputField
                    label="Municipality *"
                    name="temp_municipality"
                    type="text"
                    register={register}
                    validationRules={{ required: "Municipality is required" }} 
                    errors={errors}
                />

                <InputField
                    label="Ward No *"
                    name="temp_ward"
                    type="number"
                    register={register}
                    validationRules={{ 
                        required: "Ward No is required",
                        min: { value: 1, message: "Ward No must be at least 1" }
                    }} 
                    errors={errors}
                />

                <InputField
                    label="Village/Tole *"
                    name="temp_village"
                    type="text"
                    register={register}
                    validationRules={{ required: "Village/Tole is required" }} 
                    errors={errors}
                />

            </div>
        </fieldset>






        <div className='flex justify-between mt-4'>
          <Link to={"/enroll/user-form/"} className='button-css'>Previous</Link>        
          <Link onClick={handleNext} className='button-css'>Next</Link>        
        </div>

        </div>

      </div>
    )
}

export default ContactDetail