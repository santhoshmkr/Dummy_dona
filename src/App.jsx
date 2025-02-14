// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MergedForm } from "./pages/Dummy";
import { NavBar, Home } from "./component/Layout";
import Dashboard from "./pages/Dashboard";
import { Outlet } from "react-router-dom";
import HospitalForm from "./pages/Admin/HospitalForm";
import { SideBar } from "./component/Layout";
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
            <Outlet/>
          </div>
        </div>
      ) : (
        <div className="">
          <Outlet/>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="Manage_form" element={<MergedForm />} />
          <Route path="Admin" element={<Dashboard />} />
          <Route path="Hospital_form" element={<HospitalForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
