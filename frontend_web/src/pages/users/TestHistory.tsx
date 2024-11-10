import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const UserTestResults = () => {
    const navigate = useNavigate();
    const [testResults, setTestResults] = React.useState([
        {
            id: "1rv34gg1",
            name: 'Sugar Test',
            date: '27th October 2024',
            lab: 'Health Diagnostics Lab',
        },
        {
            id: "1rv34gg2",
            name: 'ECG Test',
            date: '15th October 2024',
            lab: 'Heart Care Center',
        },
        {
            id: "1rv34gg3",
            name: 'Cholesterol Test',
            date: '5th October 2024',
            lab: 'Wellness Diagnostics',
        }
    ]);


    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="flex items-center justify-center px-3 py-5 text-3xl font-bold text-blue-600">
                <h1>Test Results</h1>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
                {testResults.map((testResult) => (
                    <div
                        key={testResult.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex justify-between items-center"
                    >
                        <div>
                            <div className="text-lg font-semibold text-gray-800">
                                {testResult.name} - {testResult.date}
                            </div>
                            <div className="mt-2 text-gray-600">
                                <p className="font-medium">
                                    Conducted at <span className="text-blue-600">{testResult.lab}</span>
                                </p>
                            </div>
                            <div className="mt-4 flex space-x-4">
                                <button
                                    onClick={() => navigate(`/user/testresults?id=${testResult.id}`)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                >
                                    View Report
                                </button>
                                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                                    Download PDF
                                </button>
                            </div>
                        </div>
                        <button
                            className="text-red-500 hover:text-red-700 transition-colors"
                            aria-label="Delete Test Result"
                        >
                            <FaTrash size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserTestResults;
