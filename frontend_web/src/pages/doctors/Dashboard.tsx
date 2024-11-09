// pages/doctors/DoctorDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStethoscope, FaClipboardList } from 'react-icons/fa';

const DoctorDashboard = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Doctor Dashboard</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {/* Find User by Phone */}
        <Link to="/doctor/users" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 text-center">
          <FaSearch className="text-4xl text-blue-500 mb-4"/>
          <h3 className="text-xl font-medium text-gray-800">Find User by Phone</h3>
          <p className="text-gray-600 mt-2">Search for patients by their phone number</p>
        </Link>

        {/* View Past Patients */}
        <Link to="/doctor/patient-history" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 text-center">
          <FaClipboardList className="text-4xl text-green-500 mb-4"/>
          <h3 className="text-xl font-medium text-gray-800">View Past Patients</h3>
          <p className="text-gray-600 mt-2">Access and view the history of your patients</p>
        </Link>

        {/* Digitally Write Prescriptions */}
        <Link to="/doctor/digital-prescriptions" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 text-center">
          <FaStethoscope className="text-4xl text-yellow-500 mb-4"/>
          <h3 className="text-xl font-medium text-gray-800">Write Digital Prescriptions</h3>
          <p className="text-gray-600 mt-2">Create and manage prescriptions digitally</p>
        </Link>
      </div>
    </div>
  );
};

export default DoctorDashboard;
