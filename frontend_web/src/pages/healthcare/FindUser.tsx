import React, { useState } from 'react';

const HealthcareFindUserByEmailAndOTP = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [userFound, setUserFound] = useState(false);
    const [error, setError] = useState("");
    const [isResent, setIsResent] = useState(false);

    // Handle change for email input
    const handleEmailChange = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        setEmail(value);
        setError("");
    };

    // Search user by email
    const handleFindUser = () => {
        if (/\S+@\S+\.\S+/.test(email)) {  // Simple email format check
            // Replace this with actual search logic (API call)
            setUserFound(true); // Assuming user is found
            setError("");
            console.log("User found with email:", email);
        } else {
            setError("Please enter a valid email address.");
        }
    };

    // Handle OTP change
    const handleOtpChange = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        if (/^\d{0,6}$/.test(value)) { // Allow only up to 6 digits
            setOtp(value);
            setError("");
        }
    };

    // Verify OTP
    const handleVerifyOtp = () => {
        if (otp.length === 6) {
            // Replace this with actual OTP verification logic
            console.log("OTP verified:", otp);
        } else {
            setError("Please enter a 6-digit OTP.");
        }
    };

    // Resend OTP
    const handleResendOtp = () => {
        setOtp("");
        setIsResent(true);
        setTimeout(() => setIsResent(false), 2000);
        console.log("OTP resent to", email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-blue-600">Find User & Verify OTP</h2>

                {!userFound ? (
                    // Step 1: Find User by Email
                    <div>
                        <p className="text-center text-gray-600 mb-6">Enter the patient's email address</p>
                        
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full p-3 text-center border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                            placeholder="Enter email address"
                        />

                        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                        <button
                            onClick={handleFindUser}
                            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Find User
                        </button>
                    </div>
                ) : (
                    // Step 2: OTP Verification
                    <div>
                        <p className="text-center text-gray-600 mb-6">Enter the OTP sent to the user's email</p>
                        
                        <input
                            type="number"
                            value={otp}
                            onChange={handleOtpChange}
                            maxLength={6}
                            className="w-full p-3 text-center border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                            placeholder="Enter OTP"
                        />

                        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                        <button
                            onClick={handleVerifyOtp}
                            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Verify OTP
                        </button>

                        <div className="mt-4 text-center">
                            <button
                                onClick={handleResendOtp}
                                className="text-blue-600 hover:text-blue-700"
                                disabled={isResent}
                            >
                                {isResent ? "OTP Sent" : "Resend OTP"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HealthcareFindUserByEmailAndOTP;
