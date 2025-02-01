import React from 'react'
import { useFormContext } from "react-hook-form";
import { Link } from 'react-router-dom';

const Preview = () => {
    const { watch } = useFormContext();
    const formData = watch(); // Get all form values
  
    return (
      <div>

        <h2>Step 5: Preview</h2>

        <div className='mx-6 sm:mx-12 md:mx-22 mt-6'>
          
          <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md'>
            <legend className='text-lg text-blue-800'> Preview Your Details </legend>
            
            {/* Appointment Details */}
            <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Appointment Details </legend>
              <p>Appointment Place: <span>{formData.biometric_place}</span></p>
              <p>Appointment Date: <span>{formData.biometric_date}</span></p>
            </fieldset>

            {/* Main Applicant Details */}
            <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Main Applicant Detail </legend>
                <p>First Name: <span>{formData.app_fname}</span></p>
                <p>Middle Name: <span>{formData.app_mname}</span></p>
                <p>Last Name: <span>{formData.app_lname}</span></p>
                <p>Date of Birth: <span>{formData.app_dob}</span></p>
                <p>Place of Birth: <span>{formData.app_placeofbirth}</span></p>
                <p>Citizenship Type: <span>{formData.app_citizentype}</span></p>
                <p>Citizenship Number: <span>{formData.app_citizenshipno}</span></p>
                <p>Place of Issue of Citizenship: <span>{formData.app_placeofissue}</span></p>
                <p>Issue Date: <span>{formData.app_dateofissue}</span></p>
            </fieldset>
            


            {/* Additional Applicant Details */}
            <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Additional Applicant Details </legend>
                <p>Gender: <span>{formData.add_gender}</span></p>
                <p>Marital Status: <span>{formData.add_maritalstatus}</span></p>
                <p>Religion: <span>{formData.add_religion}</span></p>
                <p>Educational Qualification: <span>{formData.add_educationlevel}</span></p>
            </fieldset>
            

            {/* Applicant's Permanent Address */}
            <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Applicant's Permanent Address </legend>
              <p>Mobile Number: <span>{formData.per_mobile}</span></p>
              <p>Province: <span>{formData.per_province}</span></p>
              <p>District: <span>{formData.per_district}</span></p>
              <p>Municipality: <span>{formData.per_municipality}</span></p>
              <p>Ward No: <span>{formData.per_ward}</span></p>
              <p>Village/Tole: <span>{formData.per_village}</span></p>
            </fieldset>
            


            {/* Applicant's Temporary Address */}
            <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'>Applicant's Temporary Address</legend>
                <p>Province: <span>{formData.temp_province}</span></p>
                <p>District: <span>{formData.temp_district}</span></p>
                <p>Municipality: <span>{formData.temp_municipality}</span></p>
                <p>Ward No: <span>{formData.temp_ward}</span></p>
                <p>Village/Tole: <span>{formData.temp_village}</span></p>
            </fieldset>
            


            {/* Father's Details */}
            <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Father's Details </legend>
                <p>First Name: <span>{formData.fat_fname}</span></p>
                <p>Middle Name: <span>{formData.fat_mname}</span></p>
                <p>Last Name: <span>{formData.fat_lname}</span></p>
                <p>Citizenship Number: <span>{formData.fat_citizenshipno}</span></p>
            </fieldset>
            

            {/* Mother's Details */}
            <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Mother's Details </legend>
              <p>First Name: <span>{formData.mot_fname}</span></p>
              <p>Middle Name: <span>{formData.mot_mname}</span></p>
              <p>Last Name: <span>{formData.mot_lname}</span></p>
              <p>Citizenship Number: <span>{formData.mot_citizenshipno}</span></p>
            </fieldset>
            

            {/* Grandfather's Details */}
            <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Grandfather's Details </legend>
                <p>First Name: <span>{formData.gfat_fname}</span></p>
                <p>Middle Name: <span>{formData.gfat_mname}</span></p>
                <p>Last Name: <span>{formData.gfat_lname}</span></p>
                <p>Citizenship Number: <span>{formData.gfat_citizenshipno}</span></p>
            </fieldset>
            

            {/* Grandmother's Details */}
            <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
            <legend className='text-lg text-blue-800'> Grandmother's Details </legend>
                <p>First Name: <span>{formData.gmot_fname}</span></p>
                <p>Middle Name: <span>{formData.gmot_mname}</span></p>
                <p>Last Name: <span>{formData.gmot_lname}</span></p>
                <p>Citizenship Number: <span>{formData.gmot_citizenshipno}</span></p>
            </fieldset>
            

            {/* Spouse's Details (Only if married) */}
            {formData.app_maritalstatus === "Married" && (
              <>
                <fieldset className='border border-blue-800 py-6 px-6 sm:px-8 md:px-10 rounded-md mt-6'>
                <legend className='text-lg text-blue-800'> Spouse's Details </legend>
                  <p>First Name: <span>{formData.spou_fname}</span></p>
                  <p>Middle Name: <span>{formData.spou_mname}</span></p>
                  <p>Last Name: <span>{formData.spou_lname}</span></p>
                  <p>Citizenship Number: <span>{formData.spou_citizenshipno}</span></p>
                </fieldset>
                
              </>
            )}


            
            

          </fieldset>



          <div className='flex justify-between mt-4'>
          <Link to={"/enroll/user-form/appointment"} className='button-css'>Previous</Link>        
          <button type="submit" className='bg-red-700 text-white p-2 rounded-md cursor-pointer border-2 border-red-700 hover:bg-white hover:text-red-700 transition duration-500'>Submit</button> 
          </div>

        </div>

        
      </div>
    )
}

export default Preview