import React, { useState } from "react";
import { auth } from "../../configs/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm: React.FC = () => {
	const [loginMethod, setLoginMethod] = useState("email"); // Default is email
	const [loginData, setLoginData] = useState({
		email: "",
		phone: "",
		password: "",
	});

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(loginData);
		// Handle login logic here
		const { email, password } = loginData;
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const userEmail = userCredential.user.email;
			console.log("Logged in user email:", userEmail);
			// ...rest of your code
			console.log("Current User", auth.currentUser);
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	return (
		<div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-bold text-center">Log In</h2>
			<div className="flex justify-center space-x-4">
				<button
					onClick={() => setLoginMethod("email")}
					className={`py-2 px-4 rounded-md ${
						loginMethod === "email"
							? "bg-blue-600 text-white"
							: "bg-gray-200 text-gray-600"
					}`}
				>
					Log in with Email
				</button>
				<button
					onClick={() => setLoginMethod("phone")}
					className={`py-2 px-4 rounded-md ${
						loginMethod === "phone"
							? "bg-blue-600 text-white"
							: "bg-gray-200 text-gray-600"
					}`}
				>
					Log in with Phone
				</button>
			</div>
			<form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
				<div>
					<label className="block text-sm font-medium">
						{loginMethod === "email"
							? "Your Email"
							: "Your Phone Number"}
					</label>
					{loginMethod === "email" ? (
						<input
							type="email"
							placeholder="johndoe@gmail.com"
							onChange={(e) =>
								setLoginData({
									...loginData,
									email: e.target.value,
								})
							}
							value={loginData.email}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					) : (
						<input
							type="tel"
							placeholder="Enter your phone number"
							onChange={(e) =>
								setLoginData({
									...loginData,
									phone: e.target.value,
								})
							}
							value={loginData.phone}
							className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					)}
				</div>
				<div>
					<label className="block text-sm font-medium">
						Password
					</label>
					<input
						type="password"
						placeholder="Password"
						onChange={(e) =>
							setLoginData({
								...loginData,
								password: e.target.value,
							})
						}
						value={loginData.password}
						className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
				>
					Log In
				</button>
			</form>
			<div className="text-center">
				<a href="#" className="text-blue-600 hover:underline">
					Forgot password?
				</a>
			</div>
			<div className="flex items-center justify-center mt-4 space-x-2">
				<span className="text-gray-500">or</span>
			</div>
			<div className="flex items-center justify-center space-x-4">
				<button className="flex items-center px-4 py-2 border rounded-md">
					<img
						src="/google.png"
						alt="Google"
						className="w-5 h-5 mr-2"
					/>
					Log in with Google
				</button>
			</div>
			<div className="text-center mt-4">
				<span>Don’t have an account? </span>
				<a
					href="/user/signup"
					className="text-blue-600 hover:underline"
				>
					Sign Up
				</a>
			</div>
		</div>
	);
};

export default LoginForm;
