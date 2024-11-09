import React, { useState } from 'react';

const DoctorSignupForm: React.FC = () => {
    const [doctorSignup, setDoctorSignup] = useState<{
        firstName: string;
        lastName: string;
        dob: string;
        gender: string;
        phone: string;
        email: string;
        registrationNumber: string;
        registrationYear: string;
        documents: File | null;
        addressLine1: string;
        addressLine2: string;
        city: string;
        pin: string;
        district: string;
        state: string;
        country: string;
        password: string;
        confirmPassword: string;
    }>({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        registrationNumber: '',
        registrationYear: '',
        documents: null,
        addressLine1: '',
        addressLine2: '',
        city: '',
        pin: '',
        district: '',
        state: '',
        country: '',
        password: '',
        confirmPassword: ''
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDoctorSignup((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle file input change
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files) {
            setDoctorSignup((prevState) => ({
                ...prevState,
                documents: files[0]
            }));
        }
    };

    // Handle form submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(doctorSignup);
        // You can submit the form data here
    };

    return (
        <div className="w-full max-w-2xl p-8 space-y-6 bg-white shadow-xl rounded-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-700">Sign Up {"(Doctor)"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields */}
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={doctorSignup.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={doctorSignup.lastName}
                            onChange={handleChange}
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
                            name="dob"
                            value={doctorSignup.dob}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                            name="gender"
                            value={doctorSignup.gender}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none bg-white focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>
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
                            name="phone"
                            value={doctorSignup.phone}
                            onChange={handleChange}
                            placeholder="9797495903"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={doctorSignup.email}
                            onChange={handleChange}
                            placeholder="johndoe@gmail.com"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Verification Details */}
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Registration Number</label>
                        <input
                            type="text"
                            name="registrationNumber"
                            value={doctorSignup.registrationNumber}
                            onChange={handleChange}
                            placeholder="xxxxxxxxxxxxxxxx"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Year of Registration</label>
                        <input
                            type="number"
                            name="registrationYear"
                            value={doctorSignup.registrationYear}
                            onChange={handleChange}
                            placeholder="Eg. 2004"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Documents for verification {"(All in one PDF)"}</label>
                    <input
                        type="file"
                        name="documents"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Address Fields */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                    <input
                        type="text"
                        name="addressLine1"
                        value={doctorSignup.addressLine1}
                        onChange={handleChange}
                        placeholder="123 Street Name"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                    <input
                        type="text"
                        name="addressLine2"
                        value={doctorSignup.addressLine2}
                        onChange={handleChange}
                        placeholder="Apt, Suite, etc. (optional)"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            name="city"
                            value={doctorSignup.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Pin</label>
                        <input
                            type="text"
                            name="pin"
                            value={doctorSignup.pin}
                            onChange={handleChange}
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
                            name="district"
                            value={doctorSignup.district}
                            onChange={handleChange}
                            placeholder="District"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        <input
                            type="text"
                            name="state"
                            value={doctorSignup.state}
                            onChange={handleChange}
                            placeholder="State"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <input
                        type="text"
                        name="country"
                        value={doctorSignup.country}
                        onChange={handleChange}
                        placeholder="Country"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Password Fields */}
                <div className="sm:flex sm:space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={doctorSignup.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={doctorSignup.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DoctorSignupForm;
