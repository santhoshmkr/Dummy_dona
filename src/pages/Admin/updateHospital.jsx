import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateHospitalForm = () => {
  const [hospitalData, setHospitalData] = useState(null);
  const { _id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    console.log(_id);
    // Fetch the existing hospital details using the id from the URL
    axios.get(`http://localhost:3000/api/get-docter-details/${_id}`)
      .then((res) => {
        setHospitalData(res.data.data);
      })
      .catch((err) => {
        toast.error(err.response ? err.response.data.message : "Failed to fetch data");
      });
  }, [_id]);

  if (!hospitalData) {
    return <div className="text-center text-2xl font-bold text-gray-600">Loading...</div>;
  }

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
      // Update the existing hospital details using the id from the URL
      await axios.put(`http://localhost:3000/api/update-docter-details/${_id}`, hospitalData);
      toast.success("Hospital details updated successfully");
      navigate('/Hospital_Details'); // Redirect to the list view
    } catch (err) {
      toast.error(err.response ? err.response.data.message : "Failed to submit");
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="border rounded-lg p-6 bg-white shadow-md max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Hospital Details</h2>

        {/* Hospital Name */}
        <div className="mb-4">
          <label htmlFor="hospitalName" className="block text-lg font-medium mb-2">
            Hospital Name<span className="text-red-500">*</span>
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
            Doctor Name (Nephrology)<span className="text-red-500">*</span>
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
            Doctor Name (Urology)<span className="text-red-500">*</span>
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
            Doctor Name (MD)<span className="text-red-500">*</span>
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
          Update
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};