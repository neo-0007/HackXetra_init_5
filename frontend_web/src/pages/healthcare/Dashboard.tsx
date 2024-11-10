// pages/healthcare/HealthcareDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaClipboardList, FaUserMd } from 'react-icons/fa';

const HealthcareDashboard = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Healthcare Dashboard</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
      <Link to="/healthcare/scan" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 text-center">
          <FaSearch className="text-4xl text-blue-500 mb-4"/>
          <h3 className="text-xl font-medium text-gray-800">Scan Prescription</h3>
          <p className="text-gray-600 mt-2">Scan a prescription to get in digital format</p>
        </Link>
        {/* Find User by Phone */}
        <Link to="/healthcare/users" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 text-center">
          <FaSearch className="text-4xl text-blue-500 mb-4"/>
          <h3 className="text-xl font-medium text-gray-800">Find User by Email or Phone</h3>
          <p className="text-gray-600 mt-2">Search for patients using their phone number or email</p>
        </Link>

        {/* View Patient History */}
        <Link to="/healthcare/patient-history" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 text-center">
          <FaClipboardList className="text-4xl text-green-500 mb-4"/>
          <h3 className="text-xl font-medium text-gray-800">View Patient History</h3>
          <p className="text-gray-600 mt-2">Access and review the medical history of your patients</p>
        </Link>

        {/* Record Medical Notes */}
        <Link to="/healthcare/medical-notes" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 text-center">
          <FaUserMd className="text-4xl text-orange-500 mb-4"/>
          <h3 className="text-xl font-medium text-gray-800">Record Medical Notes</h3>
          <p className="text-gray-600 mt-2">Document medical observations and notes</p>
        </Link>
      </div>
    </div>
  );
};

export default HealthcareDashboard;
