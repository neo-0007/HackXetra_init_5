import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
	const [signup, setSignup] = useState({
		firstName: "",
		lastName: "",
		dob: "",
		gender: "",
		phone: "",
		email: "",
		address1: "",
		address2: "",
		city: "",
		pin: "",
		district: "",
		state: "",
		country: "",
		password: "",
		confirmPassword: "",
		role: "user",
	});

	const navigate = useNavigate();
	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(signup);

		const {
			firstName,
			lastName,
			dob,
			gender,
			phone,
			email,
			address1,
			address2,
			city,
			pin,
			district,
			state,
			country,
			password,
			confirmPassword,
			role,
		} = signup;
		try {
			if (password.length < 8) {
				console.log("Password should be atleast 8 characters");
				toast.error("Password should be atleast 8 characters", {
					position: "bottom-center",
				});
				return;
			}
			await createUserWithEmailAndPassword(auth, email, password);
			const user = auth.currentUser;
			console.log(user);
			if (user) {
				await setDoc(doc(db, "users", user.uid), {
					firstName: firstName,
					lastName: lastName,
					dob: dob,
					gender: gender,
					phone: phone,
					email: email,
					address: address1 + ", " + address2,
					city: city,
					pin: pin,
					district: district,
					state: state,
					country: country,
					password: password,
					role: "user",
				});
			}
			console.log("User Created Successfully");
			toast.success("User Created Successfully !!", {
				position: "top-center",
			});

			const timeout = setTimeout(() => {
				clearTimeout(timeout);
				navigate("/");
			}, 1000);
		} catch (error: any) {
			console.log(error.message);
			toast.error("User Already Registered", {
				position: "bottom-center",
			});
		}
	};

	return (
		<div className="w-full max-w-2xl p-8 space-y-6 bg-white shadow-xl rounded-lg mx-auto">
			<h2 className="text-3xl font-bold text-center text-gray-700">
				Sign Up
			</h2>
			<form onSubmit={handleSignUp} className="space-y-4">
				{/* Name Fields */}
				<div className="sm:flex sm:space-x-4">
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							First Name
						</label>
						<input
							type="text"
							placeholder="John"
							onChange={(e) =>
								setSignup({
									...signup,
									firstName: e.target.value,
								})
							}
							value={signup.firstName}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							Last Name
						</label>
						<input
							type="text"
							placeholder="Doe"
							onChange={(e) =>
								setSignup({
									...signup,
									lastName: e.target.value,
								})
							}
							value={signup.lastName}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>

				{/* Date of Birth and Gender */}
				<div className="sm:flex sm:space-x-4">
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							Date of Birth
						</label>
						<input
							type="date"
							onChange={(e) =>
								setSignup({ ...signup, dob: e.target.value })
							}
							value={signup.dob}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							Gender
						</label>
						<select
							onChange={(e) =>
								setSignup({ ...signup, gender: e.target.value })
							}
							value={signup.gender}
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
						<label className="block text-sm font-medium text-gray-700">
							Phone Number (Without +91)
						</label>
						<input
							type="tel"
							placeholder="9797495903"
							onChange={(e) =>
								setSignup({ ...signup, phone: e.target.value })
							}
							value={signup.phone}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							placeholder="johndoe@gmail.com"
							onChange={(e) =>
								setSignup({ ...signup, email: e.target.value })
							}
							value={signup.email}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>

				{/* Address Fields */}
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Address Line 1
					</label>
					<input
						type="text"
						placeholder="123 Street Name"
						onChange={(e) =>
							setSignup({ ...signup, address1: e.target.value })
						}
						value={signup.address1}
						className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Address Line 2
					</label>
					<input
						type="text"
						placeholder="Apt, Suite, etc. (optional)"
						onChange={(e) =>
							setSignup({ ...signup, address2: e.target.value })
						}
						value={signup.address2}
						className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div className="sm:flex sm:space-x-4">
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							City
						</label>
						<input
							type="text"
							placeholder="City"
							onChange={(e) =>
								setSignup({ ...signup, city: e.target.value })
							}
							value={signup.city}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							Pin
						</label>
						<input
							type="text"
							placeholder="123456"
							onChange={(e) =>
								setSignup({ ...signup, pin: e.target.value })
							}
							value={signup.pin}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>
				<div className="sm:flex sm:space-x-4">
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							District
						</label>
						<input
							type="text"
							placeholder="District"
							onChange={(e) =>
								setSignup({
									...signup,
									district: e.target.value,
								})
							}
							value={signup.district}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							State
						</label>
						<input
							type="text"
							placeholder="State"
							onChange={(e) =>
								setSignup({ ...signup, state: e.target.value })
							}
							value={signup.state}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Country
					</label>
					<input
						type="text"
						placeholder="Country"
						onChange={(e) =>
							setSignup({ ...signup, country: e.target.value })
						}
						value={signup.country}
						className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Password and Confirm Password */}
				<div className="sm:flex sm:space-x-4">
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							placeholder="Password"
							onChange={(e) =>
								setSignup({
									...signup,
									password: e.target.value,
								})
							}
							value={signup.password}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="w-full">
						<label className="block text-sm font-medium text-gray-700">
							Confirm Password
						</label>
						<input
							type="password"
							placeholder="Confirm Password"
							onChange={(e) =>
								setSignup({
									...signup,
									confirmPassword: e.target.value,
								})
							}
							value={signup.confirmPassword}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>

				<div className="flex justify-center">
					<button
						type="submit"
						className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignupForm;
