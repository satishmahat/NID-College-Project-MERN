import React from 'react'


const EnrollProgressBar = ({ progress }) => {
  const getdivClass = (step) => {
    if (step < progress) {
      return 'bg-green-700 text-white'; // Completed divs
    } else if (step === progress) {
      return 'bg-blue-800 text-white'; // Active div
    } else {
      return ''; // Inactive divs
    }
  };

  return (
    <div className='w-full flex justify-between items-center bg-gray-100 text-center mb-12'>

      <div className={`progress-css ${getdivClass(1)}`}>
        Applicant Data
      </div>

      <div className={`progress-css ${getdivClass(2)}`}>
        Contact Details
      </div>

      <div className={`progress-css ${getdivClass(3)}`}>
        Family Details
      </div>

      <div className={`progress-css ${getdivClass(4)}`}>
        Appointment
      </div>

      <div className={`progress-css ${getdivClass(5)}`}>
        Preview
      </div>
    </div>
  )
}

export default EnrollProgressBar
