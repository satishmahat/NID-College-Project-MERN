import React from 'react';

const DateField = ({ label, name, validationRules, errors, register }) => {
  return (
    <div>
      <label>{label}</label><br />

      <input
        type="date"
        {...register(name, validationRules)}
        className='p-2 border w-full max-w-[300px] mt-1 rounded-md focus:outline-none focus:ring focus:border-blue-300'
      />

      {/* Display validation errors if they exist */}
      {errors?.[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
    </div>
  );
};

export default DateField;
