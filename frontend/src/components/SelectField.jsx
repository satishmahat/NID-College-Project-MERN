import React from 'react';

const SelectField = ({ label, name, options, validationRules, errors, register }) => {
  return (
    <div>

      <label>{label}</label><br />

      <select 
        {...register(name, validationRules)} 
        className="w-full p-2 max-w-[300px] mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >

        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>

      {/* Display validation errors if they exist */}
      {errors?.[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
    </div>
  );
};

export default SelectField;
