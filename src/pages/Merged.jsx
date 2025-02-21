import React, { useState, useCallback, useMemo } from "react";

// Initial data structure for all tabs
const initialData = {
  Doner: {
    name: { English: "", Tamil: "" },
    gender: { English: "", Tamil: "" },
    relationship: { English: "", Tamil: "" },
    relationshipPersonName: { English: "", Tamil: "" },
    dateOfBirth: { English: "", Tamil: "" },
    age: { English: "", Tamil: "" },
    maritalStatus: { English: "", Tamil: "" },
    rationNumber: { English: "", Tamil: "" },
    panNumber: { English: "", Tamil: "" },
    aadharNumber: { English: "", Tamil: "" },
    city: { English: "", Tamil: "" },
    presentAddress: { English: "", Tamil: "" },
    permanentAddress: { English: "", Tamil: "" },
    documents: {
      aadharCard: { English: "", Tamil: "" },
      panCard: { English: "", Tamil: "" },
      rationCard: { English: "", Tamil: "" },
      DrivingLicence: { English: "", Tamil: "" },
    },
    identificationMarks: [{ English: "", Tamil: "" }],
    Hospital_Details:{
      Hospital_Name:"",
      Doctor_Name_Nephrology:"",
      Doctor_Name_urology:"",
      Doctor_Name_MD:""
    }
  },
  Doner_Dependent: {
    name: { English: "", Tamil: "" },
    gender: { English: "", Tamil: "" },
    relationship: { English: "", Tamil: "" },
    relationshipPersonName: { English: "", Tamil: "" },
    dateOfBirth: { English: "", Tamil: "" },
    age: { English: "", Tamil: "" },
    maritalStatus: { English: "", Tamil: "" },
    rationNumber: { English: "", Tamil: "" },
    panNumber: { English: "", Tamil: "" },
    aadharNumber: { English: "", Tamil: "" },
    city: { English: "", Tamil: "" },
    presentAddress: { English: "", Tamil: "" },
    permanentAddress: { English: "", Tamil: "" },
    documents: {
      aadharCard: { English: "", Tamil: "" },
      panCard: { English: "", Tamil: "" },
      rationCard: { English: "", Tamil: "" },
    },
    identificationMarks: [{ English: "", Tamil: "" }],
  },
  Recipient: {
    name: { English: "", Tamil: "" },
    gender: { English: "", Tamil: "" },
    relationship: { English: "", Tamil: "" },
    relationshipPersonName: { English: "", Tamil: "" },
    dateOfBirth: { English: "", Tamil: "" },
    age: { English: "", Tamil: "" },
    maritalStatus: { English: "", Tamil: "" },
    rationNumber: { English: "", Tamil: "" },
    panNumber: { English: "", Tamil: "" },
    aadharNumber: { English: "", Tamil: "" },
    city: { English: "", Tamil: "" },
    presentAddress: { English: "", Tamil: "" },
    permanentAddress: { English: "", Tamil: "" },
    documents: {
      aadharCard: { English: "", Tamil: "" },
      panCard: { English: "", Tamil: "" },
      rationCard: { English: "", Tamil: "" },
    },
    identificationMarks: [{ English: "", Tamil: "" }],
  },
};

// Form fields configuration for English
const englishFormFields = [
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
];

// Form fields configuration for Tamil (simplified)
const tamilFormFields = [
  { label: "முழு பெயர்", name: "name", type: "text" },
  { label: "பாலினம்", name: "gender", type: "select", options: ["ஆண்", "பெண்", "மற்றவை"] },
  { label: "பிறந்த தேதி", name: "dateOfBirth", type: "date" },
  { label: "வயது", name: "age", type: "number" },
  { label: "நகரம்", name: "city", type: "text" },
];

const DocterDataFields=[
  { label: "Hospital Name", name: "Hospital_Name", type: "text" },
  { label: "Doctor Name(Nephrology)", name: "Doctor_Name(Nephrology)", type: "text" },
  { label: "Doctor Name(Urology)", name: "Doctor_Name(Urology)", type: "text" },
  { label: "Doctor Name(Managing Director)", name: "Doctor_Name(Managing Director)", type: "text" },
 
]

// Tabs configuration
const tabs = ["Doner", "Doner_Dependent", "Recipient"];

export const MergedForm = () => {
  const [activeLanguage, setActiveLanguage] = useState("English");
  const [activeTab, setActiveTab] = useState("Doner");
  const [patientData, setPatientData] = useState({ English: initialData, Tamil: initialData });
  const [isPermanentAddressSame, setIsPermanentAddressSame] = useState(false);
  const [selectedDocumentType, setSelectedDocumentType] = useState("");

  const getCurrentData = useCallback(() => {
    return patientData[activeLanguage][activeTab];
  }, [activeLanguage, activeTab, patientData]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setPatientData((prev) => ({
      ...prev,
      [activeLanguage]: {
        ...prev[activeLanguage],
        [activeTab]: {
          ...prev[activeLanguage][activeTab],
          [name]: {
            ...prev[activeLanguage][activeTab][name],
            [activeLanguage]: value,
          },
        },
      },
    }));
  }, [activeLanguage, activeTab]);

  const handleFileChange = useCallback(async (e) => {
    const file = e.target.files[0];
    if (!file || !selectedDocumentType) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rgpqdzui");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dija60v2h/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

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
              [selectedDocumentType]: {
                ...prev[activeLanguage][activeTab].documents[selectedDocumentType],
                [activeLanguage]: fileUrl,
              },
            },
          },
        },
      }));
      console.log("File uploaded successfully:", fileUrl);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  }, [activeLanguage, activeTab, selectedDocumentType]);

  const handleIdentificationMarkChange = useCallback((index, value) => {
    setPatientData((prev) => {
      const updatedMarks = [...prev[activeLanguage][activeTab].identificationMarks];
      updatedMarks[index][activeLanguage] = value;
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
  }, [activeLanguage, activeTab]);

  const addIdentificationMark = useCallback(() => {
    setPatientData((prev) => ({
      ...prev,
      [activeLanguage]: {
        ...prev[activeLanguage],
        [activeTab]: {
          ...prev[activeLanguage][activeTab],
          identificationMarks: [
            ...prev[activeLanguage][activeTab].identificationMarks,
            { English: "", Tamil: "" },
          ],
        },
      },
    }));
  }, [activeLanguage, activeTab]);

  const handlePresentAddressChange = useCallback((e) => {
    const { value } = e.target;
    setPatientData((prev) => ({
      ...prev,
      [activeLanguage]: {
        ...prev[activeLanguage],
        [activeTab]: {
          ...prev[activeLanguage][activeTab],
          presentAddress: {
            ...prev[activeLanguage][activeTab].presentAddress,
            [activeLanguage]: value,
          },
          ...(isPermanentAddressSame && {
            permanentAddress: {
              ...prev[activeLanguage][activeTab].presentAddress,
              [activeLanguage]: value,
            },
          }),
        },
      },
    }));
  }, [activeLanguage, activeTab, isPermanentAddressSame]);

  const handlePermanentAddressChange = useCallback((e) => {
    const { value } = e.target;
    setPatientData((prev) => ({
      ...prev,
      [activeLanguage]: {
        ...prev[activeLanguage],
        [activeTab]: {
          ...prev[activeLanguage][activeTab],
          permanentAddress: {
            ...prev[activeLanguage][activeTab].permanentAddress,
            [activeLanguage]: value,
          },
        },
      },
    }));
  }, [activeLanguage, activeTab]);

  const handlePermanentAddressCheckboxChange = useCallback((e) => {
    const isChecked = e.target.checked;
    setIsPermanentAddressSame(isChecked);
    if (isChecked) {
      setPatientData((prev) => ({
        ...prev,
        [activeLanguage]: {
          ...prev[activeLanguage],
          [activeTab]: {
            ...prev[activeLanguage][activeTab],
            permanentAddress: {
              ...prev[activeLanguage][activeTab].presentAddress,
            },
          },
        },
      }));
    }
  }, [activeLanguage, activeTab]);

  const renderFormFields = useMemo(() => {
    const fields = activeLanguage === "English" ? englishFormFields : tamilFormFields;
    return fields.map(({ label, name, type, options }) => (
      <div key={name} className="flex flex-col p-2">
        <label className="text-sm mb-1">{label} <span className="text-red-500">*</span></label>
        {type === "select" ? (
          <select
            name={name}
            onChange={handleInputChange}
            className="border rounded-md p-2"
            value={getCurrentData()[name][activeLanguage]}
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
            value={getCurrentData()[name][activeLanguage]}
            className="border rounded-md p-2"
            placeholder={label}
          />
        )}
      </div>
    ));
  }, [getCurrentData, handleInputChange, activeLanguage]);

  const handleDoctorData=(e)=>{
    e.preventDefault();

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patientData);
  };

  return (
    <div className="w-full px-4 py-6 rounded border">
      <div className="flex justify-between flex-wrap">
        <h1 className="lg:text-2xl font-semibold mb-6 sm:text-lg">Add Patient Details</h1>
        <div className="flex justify-end px-2" onClick={handleSubmit}>
          <button className="bg-blue-600 text-white lg:text-2xl sm:text-md px-6 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
      <div className="border-b mb-6">
        <nav className="flex flex-col sm:flex-row justify-between">
          <div className="flex space-x-4 my-2">
            <button onClick={() => setActiveLanguage("English")} className={`pb-2 ${activeLanguage === "English" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
              English
            </button>
            <button onClick={() => setActiveLanguage("Tamil")} className={`pb-2 ${activeLanguage === "Tamil" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
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
          {renderFormFields}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 px-2">
          <div className="flex-1">
            <label className="block mb-2">Present Address</label>
            <textarea
              name="presentAddress"
              onChange={handlePresentAddressChange}
              value={getCurrentData().presentAddress[activeLanguage]}
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
              onChange={handlePermanentAddressChange}
              value={getCurrentData().permanentAddress[activeLanguage]}
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
            >
              <option value="">Select Document Type</option>
              <option value="aadharCard">Aadhar Card</option>
              <option value="panCard">PAN Card</option>
              <option value="rationCard">Ration Card</option>
              <option value="DrivingLicence">Driving Licence</option>
            </select>
            <input
              type="file"
              onChange={handleFileChange}
              className="border rounded-md p-2 flex-1"
            />
          </div>
        </div>

        <div className="px-2 flex flex-col align-start">
          <label className="block mb-2">Identification Marks</label>
          <div className="flex align-middle gap-[1rem] flex-wrap mx-auto">
            {getCurrentData().identificationMarks.map((mark, index) => (
              <div key={index} className="flex gap-2 ">
                <input
                  type="text"
                  value={mark[activeLanguage]}
                  onChange={(e) => handleIdentificationMarkChange(index, e.target.value)}
                  className="border rounded-md p-2 flex-1"
                  placeholder={`Mark ${index + 1}`}
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
       {
        activeLanguage==="English"&&activeTab==="Doner"? <div className="flex flex-wrap gap-[1rem]">
        <div className="flex flex-col">
          <label htmlFor="Hos_name" className="text-sm mb-1">Hospital Name</label>
          <input type="text" id="Hos_name" className="border rounded-md p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Doc_name_neuro" className="text-sm mb-1">Doctor Name(Nephrology)</label>
          <input type="text" id="Doc_name_neuro" className="border rounded-md p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Doc_name_Uro" className="text-sm mb-1">Doctor Name(Urology)</label>
          <input type="text" id="Doc_name_Uro" className="border rounded-md p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Doc_name_ManageDir" className="text-sm mb-1">Doctor Name(Managing Director)</label>
          <input type="text" id="Doc_name_ManageDir" className="border rounded-md p-2" />
        </div>
      </div>:<></>
       }
<div className="flex flex-wrap justify-between w-full">
       {
        DocterDataFields.map((item)=>(
          
          
            <div className="flex flex-col w-full md:1/2 sm:w-1/4">
              <label htmlFor={item.label} className="text-sm mb-1">{item.label}</label>
              <input type={item.type} name={item.name} className="border rounded-md p-2  w-full "/>
            </div>
         
        ))
       }
       </div>
      </form>
    </div>
  );
};