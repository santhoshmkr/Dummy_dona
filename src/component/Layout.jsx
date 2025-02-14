// NavBar.js
import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-4 py-4 bg-black text-white">
        <h1 className="text-lg font-bold">dona</h1>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/Manage_form"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Mange forms
          </Link>
          <Link
            to="/Admin"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  return <h2>Home Page</h2>;
};

export const SideBar = () => {
  return (
    <div className=" p-[1rem] flex  justify-between w-[100%]">
      
        <Link
          to="/Hospital_form"
          className="hover:text-white  transition-colors duration-200"
        >
          Hospital
        </Link>
        <Link
          to="/Manage_form"
          className="hover:text-white transition-colors duration-200"
        >
          Mange forms
        </Link>
        <Link
          to="/Admin"
          className="hover:text-white  transition-colors duration-200"
        >
          Dashboard
        </Link>
    </div>
  );
};
