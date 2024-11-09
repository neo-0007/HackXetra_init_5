import React from 'react';

const SignupForm: React.FC = (props) => {
    return (
        <div className="w-full max-w-2xl p-8 space-y-6 bg-white shadow-xl rounded-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-700">Sign Up</h2>
            <form className="space-y-4">
                {/* Name Fields */}
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            placeholder="John"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            placeholder="Doe"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Date of Birth and Gender */}
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none bg-white focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled selected>
                                Select your gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </div>

                {/* Contact Details */}
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Phone Number (Without +91)</label>
                        <input
                            type="tel"
                            placeholder="9797495903"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="johndoe@gmail.com"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Address Fields */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                    <input
                        type="text"
                        placeholder="123 Street Name"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                    <input
                        type="text"
                        placeholder="Apt, Suite, etc. (optional)"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Pin</label>
                        <input
                            type="text"
                            placeholder="123456"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">District</label>
                        <input
                            type="text"
                            placeholder="District"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        <input
                            type="text"
                            placeholder="State"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <input
                        type="text"
                        placeholder="Country"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Password and Confirm Password */}
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Sign Up Button */}
                <button className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Sign Up
                </button>
            </form>

            {/* Additional Links */}
            <div className="text-center">
                <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <div className="flex items-center justify-center mt-4 space-x-2">
                <span className="text-gray-500">or</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <button className="flex items-center px-4 py-2 border rounded-md">
                    <img src="/public/google.png" alt="Google" className="w-5 h-5 mr-2" />
                    Sign up with Google
                </button>
            </div>
            <div className="text-center mt-4">
                <span>Already have an account? </span>
                <a href="/user/login" className="text-blue-600 hover:underline">Log In</a>
            </div>
        </div>
    );
};

export default SignupForm;
