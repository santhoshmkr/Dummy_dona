import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const initialData = {
  hospitalName: "",
  doctorNameNephrology: "",
  doctorNameUrology: "",
  doctorNameMD: "",
};

export const HospitalForm = () => {
  const [hospitalData, setHospitalData] = useState(initialData);
  const navigate = useNavigate();

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
      await axios.post("http://localhost:3000/api/docter-details", hospitalData);
      toast.success("Hospital details added successfully");
      
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
        <h2 className="text-2xl font-bold mb-6 text-center">Add Hospital Details</h2>

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
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};




export const ViewHospitalDetails = () => {
  const [hospitalDatas, setHospitalDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/get-docter-details")
      .then((res) => {
        setHospitalDatas(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleEdit = (hospitalId) => {
    navigate(`/hospital_form_update/${hospitalId}`);
  };

  const handleDelete = (hospitalId) => {
    // axios.delete(`http://localhost:3000/api/delete-docter-details/${hospitalId}`)
    //   .then((res) => {
    //     toast.success(res.data.message);
    //     setHospitalDatas(hospitalDatas.filter(hospital => hospital._id !== hospitalId));
    //   })
    //   .catch((err) => {
    //     toast.error(err.response ? err.response.data.message : "Failed to delete");
    //   });

    confirm("Are you sure you want to delete this hospital?") && axios.delete(`http://localhost:3000/api/delete-docter-details/${hospitalId}`)
      .then((res) => {
        toast.success(res.data.message);
        setHospitalDatas(hospitalDatas.filter(hospital => hospital._id !== hospitalId));
      })
      .catch((err) => {
        toast.error(err.response ? err.response.data.message : "Failed to delete");
      });
  };
   

  if (loading) {
    return <div className="text-center text-2xl font-bold text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl font-bold text-red-600">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Hospital Details</h1>
      {hospitalDatas.length === 0 ? (
        <p className="text-gray-600">No data available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor Name (Nephrology)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor Name (Urology)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor Name (MD)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {hospitalDatas.map((hospital, index) => (
                <tr key={hospital._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{hospital.hospitalName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{hospital.doctorNameNephrology}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{hospital.doctorNameUrology}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{hospital.doctorNameMD}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit(hospital._id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(hospital._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
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


export default HospitalForm