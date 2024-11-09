import React, { useState } from 'react';

const DigitalPrescription = () => {
    const [Prescription, setPrescription] = useState({
        name: 'John Doe',
        age: 34,
        gender: 'male',
        date: '8th November 2024',
        medicines: [
            { name: 'Amoxicillin 500mg', dosage: '1 Capsule, 3 times daily' },
            { name: 'Ibuprofen 200mg', dosage: '1 Tablet, 2 times daily' },
            { name: 'Omeprazole 20mg', dosage: '1 Capsule, once daily' },
        ],
        instructions: [
            'Take all medications with water.',
            'Follow up in two weeks or sooner if symptoms worsen.',
            'Avoid alcohol and spicy food.',
        ],
        doctor: 'Dr. Rajib Gayan',
    })
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
                {/* Header */}
                <div className="border-b pb-4 mb-6">
                    <h1 className="text-2xl font-bold text-blue-600">Digital Prescription</h1>
                    <p className="text-gray-500 mt-1">Issued by {Prescription.doctor}</p>
                </div>

                {/* Doctor and Patient Info */}
                <div className="flex flex-col md:flex-row justify-between mb-6">
                    
                    {/* Patient Info */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Patient's Details</h2>
                        <p className="text-gray-600">Name: {Prescription.name}</p>
                        <p className="text-gray-600">Age: {Prescription.age}</p>
                        <p className="text-gray-600">Gender: {Prescription.gender}</p>
                        <p className="text-gray-600">Date: {Prescription.date}</p>
                    </div>
                </div>

                {/* Prescription Details */}
                <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700">Prescription</h2>
                <div className="mt-4 space-y-3">
                {Prescription.medicines.map((medicine, index) => (
                            <div key={index} className="sm:flex max-sm:space-x-4 justify-between">
                                <p className="text-gray-600">{index + 1}. {medicine.name}</p>
                                <p className="text-gray-600">{medicine.dosage}</p>
                            </div>
                ))}
                </div>
                </div>
                {/* Instructions */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">Instructions</h2>
                    {Prescription.instructions.map((instruction, index) => (
                        <p key={index} className="text-gray-600">{"- "+instruction}</p>
                    ))}
                </div>

                {/* Footer with Doctor's Signature */}
                <div className="border-t pt-4 text-right">
                    <p className="text-gray-600 font-semibold">{Prescription.doctor}</p>
                </div>
            </div>
        </div>
    );
}

export default DigitalPrescription;
