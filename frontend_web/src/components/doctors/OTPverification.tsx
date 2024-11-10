import React, { useState } from 'react';

const OTPVerification = () => {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [isResent, setIsResent] = useState(false);

    const handleOtpChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;
        if (/^\d{0,6}$/.test(value)) { // Allow only up to 6 digits
            setOtp(value);
            setError("");
        }
    };

    const handleVerify = () => {
        if (otp.length === 6) {
            // Placeholder for actual verification logic
            console.log("OTP verified:", otp);
        } else {
            setError("Please enter a 6-digit OTP.");
        }
    };

    const handleResend = () => {
        // Placeholder for resend OTP logic
        setOtp("");
        setIsResent(true);
        setTimeout(() => setIsResent(false), 2000);
        console.log("OTP resent");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-blue-600">OTP Verification</h2>
                <p className="text-center text-gray-600 mb-6">Enter the 6-digit code sent to your email</p>
                
                <input
                    type="text"
                    value={otp}
                    onChange={handleOtpChange}
                    maxLength={6}
                    className="w-full p-3 text-center border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                    placeholder="Enter OTP"
                />
                
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                
                <button
                    onClick={handleVerify}
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Verify OTP
                </button>
                
                <div className="mt-4 text-center">
                    <button
                        onClick={handleResend}
                        className="text-blue-600 hover:text-blue-700"
                        disabled={isResent}
                    >
                        {isResent ? "OTP Sent" : "Resend OTP"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;
