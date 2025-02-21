import React, { useEffect, useState } from "react";
import Axios from "axios";

const Patient = () => {
  const [patientData, setPatientData] = useState([]);
  const [activeTab, setActiveTab] = useState('Doner');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    Axios.get("http://localhost:3000/api/get-patient-details")
      .then((res) => {
        // Assuming the response data is structured as { message: "Patient data fetched successfully", data: [/* patient data */] }
        setPatientData(res.data.data || []);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Patient Data</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-md ${activeTab === 'Doner' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => handleTabClick('Doner')}
        >
          Doner
        </button>
        <button
          className={`px-4 py-2 rounded-md ${activeTab === 'Doner_Dependent' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => handleTabClick('Doner_Dependent')}
        >
          Doner Dependent
        </button>
        <button
          className={`px-4 py-2 rounded-md ${activeTab === 'Recipient' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => handleTabClick('Recipient')}
        >
          Recipient
        </button>
      </div>
      <div className="overflow-x-auto">
        {activeTab === 'Doner' && (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patientData.map((patient, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Doner.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Doner.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Doner.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Doner.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-800">Edit</button>
                    <button className="text-red-600 hover:text-red-800 ml-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === 'Doner_Dependent' && (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patientData.map((patient, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Doner_Dependent.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Doner_Dependent.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Doner_Dependent.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Doner_Dependent.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-800">Edit</button>
                    <button className="text-red-600 hover:text-red-800 ml-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === 'Recipient' && (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patientData.map((patient, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Recipient.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Recipient.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Recipient.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.English.Recipient.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-800">Edit</button>
                    <button className="text-red-600 hover:text-red-800 ml-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Patient;