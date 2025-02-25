// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { MergedForm } from "./pages/Dummy";

const AppLayout = () => {
  const [user, setUser] = useState("admin");
  return (
    <div>
      <NavBar />
      {user === "admin" ? (
        <div className="">
          <div className="bg-gray-300 font-[600]">
            <SideBar />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="">
          <Outlet />
        </div>
      )}
    </div>
  );
};


import { PatientForm } from "./pages/NewDummy";
import { NavBar, Home } from "./component/Layout";

import { Outlet } from "react-router-dom";
import HospitalForm from "./pages/Admin/HospitalForm";
import { SideBar } from "./component/Layout";
import Patient from "./pages/Admin/Patient";
import { ViewHospitalDetails } from "./pages/Admin/HospitalForm";
import { UpdateHospitalForm } from "./pages/Admin/updateHospital";
import { OrganDonationForm } from "./pages/Forms/Form_one";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<OrganDonationForm />} />
          <Route path="Manage_form" element={<PatientForm />} />
          <Route path="Admin" element={<Patient />} />
          <Route path="Hospital_form" element={<HospitalForm />} />
          <Route path="Hospital_form_update/:_id" element={<UpdateHospitalForm />} />
          <Route path="Hospital_Details" element={<ViewHospitalDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
