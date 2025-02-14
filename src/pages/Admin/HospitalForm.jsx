import React, { useState } from 'react';

const intialData={
    hospitalName: "",
    doctorNameNephrology: "",
    doctorNameUrology: "",
    doctorNameMD: "",
  }

const HospitalForm = () => {
  const [hospitalData, setHospitalData] = useState(intialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHospitalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await fetch('http://localhost:5000/api/hospital', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hospitalData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      setHospitalData(intialData); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    

  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="border rounded-lg p-6 bg-white shadow-md max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Hospital Details Form</h2>

        {/* Hospital Name */}
        <div className="mb-4">
          <label htmlFor="hospitalName" className="block text-lg font-medium mb-2">
            Hospital Name<span className='text-red-500'>*</span>
          </label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={hospitalData.hospitalName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Hospital Name"
            required
          />
        </div>

        {/* Doctor Name (Nephrology) */}
        <div className="mb-4">
          <label htmlFor="doctorNameNephrology" className="block text-lg font-medium mb-2">
            Doctor Name (Nephrology)<span className='text-red-500'>*</span>
          </label>
          <input
            type="text"
            id="doctorNameNephrology"
            name="doctorNameNephrology"
            value={hospitalData.doctorNameNephrology}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Doctor Name (Nephrology)"
            required
          />
        </div>

        {/* Doctor Name (Urology) */}
        <div className="mb-4">
          <label htmlFor="doctorNameUrology" className="block text-lg font-medium mb-2">
            Doctor Name (Urology)<span className='text-red-500'>*</span> 
          </label>
          <input
            type="text"
            id="doctorNameUrology"
            name="doctorNameUrology"
            value={hospitalData.doctorNameUrology}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Doctor Name (Urology)"
            required
          />
        </div>

        {/* Doctor Name (MD) */}
        <div className="mb-6">
          <label htmlFor="doctorNameMD" className="block text-lg font-medium mb-2">
            Doctor Name (MD)<span className='text-red-500'>*</span>
          </label>
          <input
            type="text"
            id="doctorNameMD"
            name="doctorNameMD"
            value={hospitalData.doctorNameMD}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Doctor Name (MD)"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HospitalForm;