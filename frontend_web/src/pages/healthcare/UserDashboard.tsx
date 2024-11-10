import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineFileAdd, AiOutlineFileSearch } from 'react-icons/ai';
import { BsFileEarmarkMedical } from 'react-icons/bs';
import { RiFileList2Line } from 'react-icons/ri';

interface IUSER {
    id: string;
    name: string;
    email: string;
    role: string;
}

const UserDashboardHealthcare = () => {
    const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const id = searchParams.get('id');
    const [user, setUser] = useState<IUSER | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/user/verify', {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user details');
                }
                const data = await response.json();
                setUser(data.user);
                console.log('User Details:', data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUserDetails();
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-blue-700 mb-10">Welcome to Your Dashboard</h1>
            
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {/* Upload Prescription Button */}
                <div
                    onClick={() => navigate('/user/prescription/upload')}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105"
                >
                    <AiOutlineFileAdd className="text-5xl text-blue-500 mb-4" />
                    <h2 className="text-xl font-semibold text-blue-600">Upload Prescription</h2>
                </div>

                {/* Upload Test Report Button */}
                <div
                    onClick={() => navigate('/user/testresults/upload')}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105"
                >
                    <BsFileEarmarkMedical className="text-5xl text-blue-500 mb-4" />
                    <h2 className="text-xl font-semibold text-blue-600">Upload Test Report</h2>
                </div>

                {/* View Prescriptions Button */}
                <div
                    onClick={() => navigate(`/user/prescription/history?id=${user?.id}`)}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105"
                >
                    <AiOutlineFileSearch className="text-5xl text-blue-500 mb-4" />
                    <h2 className="text-xl font-semibold text-blue-600">View Prescriptions</h2>
                </div>

                {/* View Test Records Button */}
                <div
                    onClick={() => navigate('/user/testresults/history')}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105"
                >
                    <RiFileList2Line className="text-5xl text-blue-500 mb-4" />
                    <h2 className="text-xl font-semibold text-blue-600">View Test Records</h2>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardHealthcare;
