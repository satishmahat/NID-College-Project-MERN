import React from 'react'
import { useFormContext } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import SelectField from '../../components/SelectField';
import InputField from '../../components/InputField';
import DateField from '../../components/DateField';


const Appointment = () => {
    const { register, trigger, formState: { errors } } = useFormContext();
    const navigate = useNavigate();

    // Get tomorrow's date to restrict date selection
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split("T")[0]; // Format YYYY-MM-DD

    const handleNext = async () => {
      const isValid = await trigger(); // Validate all fields in the current step
      if (isValid) {
          navigate("/enroll/user-form/preview"); // Only navigate if valid
      }
  };
  
    return (
      <div>
        <h2>Step 4: Appointment</h2>

        <div className='mx-6 sm:mx-12 md:mx-22 mt-6'>
        <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md'>
            <legend className='text-lg text-blue-800'> Appointment Details </legend>
            
            <div className='grid sm:grid-cols-2 gap-x-6 gap-y-3'>
            
            <SelectField 
              label="Select Place for Biometric" 
              name="biometric_place" 
              options={[
                { value: "Kathmandu DAO", label: "Kathmandu DAO" },
                { value: "Bhaktapur DAO", label: "Bhaktapur DAO" },
                { value: "Lalitpur DAO", label: "Lalitpur DAO" },
                { value: "Kaski DAO", label: "Kaski DAO" },
                { value: "Tanahun DAO", label: "Tanahun DAO" },
                { value: "Chitwan DAO", label: "Chitwan DAO" },
                { value: "Morang DAO", label: "Morang DAO" },
                { value: "Jhapa DAO", label: "Jhapa DAO" },
                { value: "Dhanusha DAO", label: "Dhanusha DAO" },
                { value: "Rupandehi DAO", label: "Rupandehi DAO" }
              ]}
              register={register} 
              validationRules={{ required: "Please select a location for biometric" }} 
              errors={errors} 
            />

              {/* Biometric Date Selection */}
              <div>
                  <label>Select Biometric Date *</label><br />
                  <input
                      type="date"
                      {...register("biometric_date", { required: "Please select a biometric date" })}
                      min={minDate} // Restrict to tomorrow onwards
                      className='p-2 border w-full max-w-[300px] mt-1 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                  />
                  {errors?.biometric_date && (
                      <p className="text-red-500 text-sm mt-1">{errors.biometric_date?.message}</p>
                  )}
              </div>


            </div>
   
        </fieldset>


        <div className='flex justify-between mt-4'>
          <Link to={"/enroll/user-form/family-detail"} className='button-css'>Previous</Link>        
          <Link onClick={handleNext} className='button-css'>Next</Link>        
        </div>

        </div>
        

      </div>
    );
}

export default Appointment