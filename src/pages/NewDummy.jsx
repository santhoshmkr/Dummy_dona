import React, { useState, useCallback } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

const initialData = {
  Doner: createInitialTabData(),
  Doner_Dependent: createInitialTabData(),
  Recipient: createInitialTabData(),
};

function createInitialTabData() {
  return {
    name: "",
    gender: "",
    relationship: "",
    relationshipPersonName: "",
    dateOfBirth: "",
    age: "",
    maritalStatus: "",
    rationNumber: "",
    panNumber: "",
    aadharNumber: "",
    city: "",
    presentAddress: "",
    permanentAddress: "",
    documents: {
      aadharCard: "",
      panCard: "",
      rationCard: "",
      DrivingLicence: "",
    },
    identificationMarks: [""]
  };
}

const hospitalData = {
  Hospital_Name: "",
  Doctor_Name_Nephrology: "",
  Doctor_Name_urology: "",
  Doctor_Name_MD: "",
};

const TamilData = {
  Doner: createInitialTabData(),
};

const formFields = {
  English: [
    { label: "Full Name", name: "name", type: "text" },
    { label: "Gender", name: "gender", type: "select", options: ["Male", "Female", "Other"] },
    { label: "Relationship", name: "relationship", type: "select", options: ["Father of", "Mother of", "Brother of", "Sister of", "Husband of", "Wife of", "Son of", "Daughter of"] },
    { label: "Relationship Person Name", name: "relationshipPersonName", type: "text" },
    { label: "Date of Birth", name: "dateOfBirth", type: "date" },
    { label: "Age", name: "age", type: "number" },
    { label: "Marital Status", name: "maritalStatus", type: "select", options: ["Single", "Married", "Divorced", "Widowed"] },
    { label: "Ration Number", name: "rationNumber", type: "text" },
    { label: "Pan Number", name: "panNumber", type: "text" },
    { label: "Aadhar Number", name: "aadharNumber", type: "text" },
    { label: "City", name: "city", type: "text" },
  ],
  Tamil: [
    { label: "முழு பெயர்", name: "name", type: "text" },
    { label: "பாலினம்", name: "gender", type: "select", options: ["ஆண்", "பெண்", "மற்றவை"] },
    { label: "பிறந்த தேதி", name: "dateOfBirth", type: "date" },
    { label: "வயது", name: "age", type: "number" },
    { label: "நகரம்", name: "city", type: "text" },
  ],
};

const tabs = ["Doner", "Doner_Dependent", "Recipient"];

const Loader = () => (
  <div className="loader-container">
    <div className="modern-spinner"></div>
  </div>
);

const loaderStyles = `
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .modern-spinner {
    width: 40px;
    height: 40px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-top-color: #000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const PatientForm = () => {
  const [activeLanguage, setActiveLanguage] = useState("English");
  const [activeTab, setActiveTab] = useState("Doner");
  const [patientData, setPatientData] = useState({ English: initialData, Tamil: TamilData });
  const [isPermanentAddressSame, setIsPermanentAddressSame] = useState(false);
  const [selectedDocumentType, setSelectedDocumentType] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState({});

  const getCurrentData = () => patientData[activeLanguage][activeTab];

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setPatientData((prev) => ({
      ...prev,
      [activeLanguage]: {
        ...prev[activeLanguage],
        [activeTab]: {
          ...prev[activeLanguage][activeTab],
          [name]: value,
        },
      },
    }));
  }, [activeLanguage, activeTab]);

  const handleFileChange = useCallback(async (e) => {
    const file = e.target.files[0];
    if (!file || !selectedDocumentType) return;

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rgpqdzui");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dija60v2h/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("File upload failed");

      const data = await response.json();
      const fileUrl = data.secure_url;

      setPatientData((prev) => ({
        ...prev,
        [activeLanguage]: {
          ...prev[activeLanguage],
          [activeTab]: {
            ...prev[activeLanguage][activeTab],
            documents: {
              ...prev[activeLanguage][activeTab].documents,
              [selectedDocumentType]: fileUrl,
            },
          },
        },
      }));
      console.log("File uploaded successfully:", fileUrl);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    } finally {
      setIsUploading(false);
    }
  }, [activeLanguage, activeTab, selectedDocumentType]);

  const handleIdentificationMarkChange = (index, value) => {
    setPatientData((prev) => {
      const updatedMarks = [...prev[activeLanguage][activeTab].identificationMarks];
      updatedMarks[index] = value;
      return {
        ...prev,
        [activeLanguage]: {
          ...prev[activeLanguage],
          [activeTab]: {
            ...prev[activeLanguage][activeTab],
            identificationMarks: updatedMarks,
          },
        },
      };
    });
  };

  const addIdentificationMark = () => {
    setPatientData((prev) => ({
      ...prev,
      [activeLanguage]: {
        ...prev[activeLanguage],
        [activeTab]: {
          ...prev[activeLanguage][activeTab],
          identificationMarks: [...prev[activeLanguage][activeTab].identificationMarks, ""],
        },
      },
    }));
  };

  const handleAddressChange = (e, isPermanent) => {
    const { value } = e.target;
    setPatientData((prev) => ({
      ...prev,
      [activeLanguage]: {
        ...prev[activeLanguage],
        [activeTab]: {
          ...prev[activeLanguage][activeTab],
          [isPermanent ? 'permanentAddress' : 'presentAddress']: value,
          ...(isPermanentAddressSame && !isPermanent && {
            permanentAddress: prev[activeLanguage][activeTab].presentAddress,
          }),
        },
      },
    }));
  };

  const handlePermanentAddressCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsPermanentAddressSame(isChecked);

    setPatientData((prev) => {
      const currentTabData = prev[activeLanguage][activeTab];
      return {
        ...prev,
        [activeLanguage]: {
          ...prev[activeLanguage],
          [activeTab]: {
            ...currentTabData,
            permanentAddress: isChecked ? currentTabData.presentAddress : currentTabData.permanentAddress,
          },
        },
      };
    });
  };

  const validateForm = () => {
    let formErrors = {};
    const requiredFields = formFields[activeLanguage].map(field => field.name);

    requiredFields.forEach(field => {
      if (!getCurrentData()[field]) {
        formErrors[field] = "This field is required";
      }
    });

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if there are errors
    }

    console.log(patientData);

    Axios.post("http://localhost:3000/api/patient-details", patientData)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message); // Show a success toast
      })
      .catch((err) => {
        console.error(err); // Log the error for debugging
        if (err.response) {
          toast.error(`Error: ${err.response.data.message}`); // Inform the user of the error
        } else if (err.request) {
          toast.error("No response received from the server. Please try again later."); // Inform the user of the error
        } else {
          toast.error("An error occurred. Please try again."); // Inform the user of the error
        }
      });
  };

  const renderFormFields = () => {
    const fields = formFields[activeLanguage];
    return fields.map(({ label, name, type, options }) => (
      <div key={name} className="flex flex-col p-2">
        <label className="text-sm mb-1">{label} <span className="text-red-500">*</span></label>
        {type === "select" ? (
          <select
            name={name}
            onChange={handleInputChange}
            className="border rounded-md p-2"
            value={getCurrentData()[name]}
            required
          >
            <option value="">Select</option>
            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            onChange={handleInputChange}
            value={getCurrentData()[name]}
            className="border rounded-md p-2"
            placeholder={label}
            required
          />
        )}
        {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
      </div>
    ));
  };

  return (
    <div className="w-full px-4 py-6 rounded border">
      <div className="flex justify-between flex-wrap">
        <h1 className="lg:text-2xl font-semibold mb-6 sm:text-lg">Add Patient Details</h1>
        <button onClick={handleSubmit} className="bg-blue-600 text-white lg:text-2xl sm:text-md px-6 py-2 rounded-md">
          Submit
        </button>
      </div>
      <div className="border-b mb-6">
        <nav className="flex flex-col sm:flex-row justify-between">
          <div className="flex space-x-4 my-2">
            <button onClick={() => setActiveLanguage("English")} className={`pb-2 ${activeLanguage === "English" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
              English
            </button>
            <button onClick={() => {
              setActiveLanguage("Tamil");
              setActiveTab("Doner");
            }} className={`pb-2 ${activeLanguage === "Tamil" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
              Tamil
            </button>
          </div>
          {activeLanguage === "English" && (
            <div className="flex space-x-4 my-2">
              {tabs.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-2 ${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                  {tab.replace("_", " ")}
                </button>
              ))}
            </div>
          )}
        </nav>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
          {renderFormFields()}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 px-2">
          <div className="flex-1">
            <label className="block mb-2">Present Address</label>
            <textarea
              name="presentAddress"
              onChange={(e) => handleAddressChange(e, false)}
              value={getCurrentData().presentAddress}
              className="w-full border rounded-md p-2 h-32"
            />
          </div>

          <div className="flex items-center justify-center sm:block">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isPermanentAddressSame}
                onChange={handlePermanentAddressCheckboxChange}
              />
              <span>Same as Present Address</span>
            </label>
          </div>

          <div className="flex-1">
            <label className="block mb-2">Permanent Address</label>
            <textarea
              name="permanentAddress"
              onChange={(e) => handleAddressChange(e, true)}
              value={getCurrentData().permanentAddress}
              className="w-full border rounded-md p-2 h-32"
              disabled={isPermanentAddressSame}
            />
          </div>
        </div>

        <div className="px-2">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <select 
              className="border rounded-md p-2 flex-1"
              onChange={(e) => setSelectedDocumentType(e.target.value)}
              required
            >
              <option value="" disabled>Select Document Type</option>
              <option value="aadharCard">Aadhar Card</option>
              <option value="panCard">PAN Card</option>
              <option value="rationCard">Ration Card</option>
              <option value="DrivingLicence">Driving Licence</option>
            </select>
            <input
              type="file"
              onChange={handleFileChange}
              className="border rounded-md p-2 flex-1"
              disabled={isUploading}
            />
            {isUploading && <Loader />}
          </div>
        </div>

        <div className="px-2 flex flex-col align-start">
          <label className="block mb-2">Identification Marks</label>
          <div className="flex align-middle gap-[1rem] flex-wrap mx-auto">
            {getCurrentData().identificationMarks.map((mark, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={mark}
                  onChange={(e) => handleIdentificationMarkChange(index, e.target.value)}
                  className="border rounded-md p-2 flex-1"
                  placeholder={`Mark ${index + 1}`}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addIdentificationMark}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Add Mark
            </button>
          </div>
        </div>

        {activeLanguage === "English" && activeTab === "Doner" && (
          <div className="flex flex-wrap gap-[1rem]">
            {Object.entries(hospitalData).map(([key]) => (
              <div key={key} className="flex flex-col">
                <label className="text-sm mb-1">{key.replace(/_/g, ' ')}</label>
                <input
                  type="text"
                  className="border rounded-md p-2"
                  onChange={(e) => handleInputChange({ target: { name: `${key}`, value: e.target.value } })}
                />
              </div>
            ))}
          </div>
        )}
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

// Add loader styles to the component
const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = loaderStyles;
document.head.appendChild(style);