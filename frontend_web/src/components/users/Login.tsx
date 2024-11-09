import React, { useState } from "react";
import { useAppContext } from "../../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
	const { setUser, setIsAuthenticated } = useAppContext();
	const [loginMethod, setLoginMethod] = useState("email"); // Default is email
	const [loginData, setLoginData] = useState({
		email: "",
		phone: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch(
				"http://localhost:3000/api/v1/user/login/",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(loginData),
				}
			);

			if (!response.ok) {
				throw new Error(`Failed to sign up: ${response.statusText}`);
			}

			const data = await response.json();
			console.log("Login successful:", data);

			localStorage.setItem("token", data.token);

			setUser(data.user);
			setIsAuthenticated(true);
			toast.success("Login successful!");

			setTimeout(() => navigate("/"), 2000);
		} catch (error) {
			console.error("Error during sign up:", error);
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
			<form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
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
