import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const UserPrescriptionHistory = () => {
    const navigate = useNavigate();
    const [prescriptions, setPrescriptions] = React.useState([
        {
            id: "fgehgt5ghuhbgunbugj1",
            name: 'Siddharth Medical',
            date: '27th October 2024',
            doctor: 'Dr. Rajib Gayan',
        },
        {
            id: "fgehgt5ghuhbgunbugj2",
            name: 'Pranjal Medical',
            date: '4th October 2024',
            doctor: 'Dr. Pranjal Gayan',
        },
        {
            id: "fgehgt5ghuhbgunbugj3",
            name: 'Rosy Medical',
            date: '9th September 2024',
            doctor: 'Dr. Rosy Sharma',
        }
    ]);


    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="flex items-center justify-center px-3 py-5 text-3xl font-bold text-blue-600">
                <h1>Prescription History</h1>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
                {prescriptions.map((prescription) => (
                    <div
                        key={prescription.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex justify-between items-center"
                    >
                        <div>
                            <div className="text-lg font-semibold text-gray-800">
                                {prescription.name}, {prescription.date}
                            </div>
                            <div className="mt-2 text-gray-600">
                                <p className="font-medium">
                                    Prescribed by <span className="text-blue-600">{prescription.doctor}</span>
                                </p>
                            </div>
                            <div className="mt-4 flex space-x-4">
                                <button
                                    onClick={() => navigate(`/user/prescription?id=${prescription.id}`)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                >
                                    View Digital Prescription
                                </button>
                                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                                    View Image
                                </button>
                            </div>
                        </div>
                        <button
                            className="text-red-500 hover:text-red-700 transition-colors"
                            aria-label="Delete Prescription"
                        >
                            <FaTrash size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPrescriptionHistory;
