import React, { useState } from 'react';

const FindUserByPhoneAndOTP = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [userFound, setUserFound] = useState(false);
    const [error, setError] = useState("");
    const [isResent, setIsResent] = useState(false);

    // Handle change for phone input
    const handlePhoneChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {  // Allow only up to 10 digits
            setPhone(value);
            setError("");
        }
    };

    // Search user by phone
    const handleFindUser = () => {
        if (phone.length === 10) {
            // Replace this with actual search logic (API call)
            setUserFound(true); // Assuming user is found
            setError("");
            console.log("User found with phone:", phone);
        } else {
            setError("Please enter a valid 10-digit phone number.");
        }
    };

    // Handle OTP change
    const handleOtpChange = (e: { target: { value: any; }; }) => {
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
        console.log("OTP resent to", phone);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-blue-600">Find User & Verify OTP</h2>

                {!userFound ? (
                    // Step 1: Find User by Phone
                    <div>
                        <p className="text-center text-gray-600 mb-6">Enter the patient's phone number</p>
                        
                        <input
                            type="text"
                            value={phone}
                            onChange={handlePhoneChange}
                            maxLength={10}
                            className="w-full p-3 text-center border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                            placeholder="Enter phone number"
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
                        <p className="text-center text-gray-600 mb-6">Enter the OTP sent to the user's phone</p>
                        
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

export default FindUserByPhoneAndOTP;
