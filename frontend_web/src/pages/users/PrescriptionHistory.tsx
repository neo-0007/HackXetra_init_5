import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

interface IPrescription {
    _id: number;
    name: string;
    date: string;
    doctor: {
        name: string;
    };
    createdAt: string;
}

const UserPrescriptionHistory = () => {
    const navigate = useNavigate();
    const [prescriptions, setPrescriptions] = useState<IPrescription[] | null>(null);
    const [loading, setLoading] = useState(true);

      // Fetch prescriptions data
      useEffect(() => {
        const fetchPrescriptions = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/user/prescription/all/672fa3fbd858f1b485738fd2', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch prescriptions');
                }
                const data = await response.json();
                setPrescriptions(data.prescriptions);
                console.log('Prescriptions:', prescriptions);

                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchPrescriptions();
    }, []);


    return (
        <div className="min-h-screen bg-gray-100 py-10">
             <div className="flex items-center justify-center px-3 py-5 text-3xl font-bold text-blue-600">
                <h1>Prescription History</h1>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">


                {prescriptions && prescriptions.map((prescription) => (
                    <div
                        key={prescription._id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex justify-between items-center"
                    >
                        <div>
                            <div className="text-lg font-semibold text-gray-800">
                                {prescription.doctor.name}, {prescription.createdAt}
                            </div>
                            <div className="mt-2 text-gray-600">
                                <p className="font-medium">
                                    Prescribed by <span className="text-blue-600">{prescription.doctor.name}</span>
                                </p>
                            </div>
                            <div className="mt-4 flex space-x-4">
                                <button
                                    onClick={() => navigate(`/user/prescription?id=${prescription._id}`)}
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
