import React, { useEffect, useState } from 'react';

interface IPrescription {
    _id: number;
    user_id: string;
    prescription: {
        name: string;
        dosage: string;
        frequency: string;
        timing: string;
        _id: string;
    }[];
    doctor: {
        name: string;
        phone: string;
    };
    createdAt: string;
}

const DigitalPrescription = () => {
    const [Prescription, setPrescription] = useState<IPrescription | null>(null);
    
 // Fetch prescriptions data
 useEffect(() => {
    const fetchPrescriptions = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/user/prescription/byID/672fdf9dc50db94bf3b2d8e9', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch prescriptions');
            }
            const data = await response.json();
            setPrescription(data.prescription);
            console.log('Prescriptions:', data);
        } catch (error) {
console.log(error)      
}
    };

    fetchPrescriptions();
}, []);


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
                {/* Header */}
                <div className="border-b pb-4 mb-6">
                    <h1 className="text-2xl font-bold text-blue-600">Digital Prescription</h1>
                    <p className="text-gray-500 mt-1">Issued by {Prescription?.doctor.name}</p>
                </div>

                {/* Doctor and Patient Info */}
                <div className="flex flex-col md:flex-row justify-between mb-6">
                    {/* Patient Info */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Patient's Details</h2>
                        <p className="text-gray-600">Name: {Prescription?.user_id}</p>
                        <p className="text-gray-600">Age: {Prescription?.user_id}</p>
                        <p className="text-gray-600">Gender: {Prescription?.user_id}</p>
                        <p className="text-gray-600">Date: {Prescription?.user_id}</p>
                    </div>
                </div>

                {/* Prescription Details */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">Prescription</h2>
                    <div className="mt-4 space-y-3">
                        {Prescription?.prescription.map((medicine, index) => (
                            <div key={index} className="sm:flex max-sm:space-x-4 justify-between">
                                <p className="text-gray-600">{index + 1}. {medicine.name}</p>
                                <p className="text-gray-600">{medicine.dosage}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer with Doctor's Signature */}
                <div className="border-t pt-4 text-right">
                    <p className="text-gray-600 font-semibold">{Prescription?.doctor.name}</p>
                </div>
            </div>
        </div>
    );
};

export default DigitalPrescription;
