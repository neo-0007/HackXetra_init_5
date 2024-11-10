import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/users/Login";
import UserSignup from "./pages/users/Signup";
import UploadPresc from "./pages/users/UploadPresc";
import UserPrescriptionHistory from "./pages/users/PrescriptionHistory";
import DigitalPrescription from "./pages/users/DigitalPrescription";
import UploadTestRes from "./pages/users/UploadTestRes";
import UserTestResults from "./pages/users/TestHistory";
import DigitalTestReport from "./pages/users/DigitalTestReport";
import DoctorLogin from "./pages/doctors/Login";
import DoctorSignup from "./pages/doctors/Signup";
import FindUserByPhoneAndOTP from "./pages/doctors/FindUser";
import OTPVerification from "./components/doctors/OTPverification";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import { useState, useEffect } from "react";
import UserProtectedRoutes from "./components/users/ProtectedRoutes";
import HealthcareLogin from "./pages/healthcare/Login";
import HealthcareSignup from "./pages/healthcare/Signup";
import UserDashboard from "./pages/users/Dashboard";
import DoctorDashboard from "./pages/doctors/Dashboard";
import HealthcareDashboard from "./pages/healthcare/Dashboard";


interface IUSER {
  _id: string;
  name: string;
  email: string;
  role: string;
}


import { createContext } from "react";
import { useContext } from "react";

import axios from "axios";
import { ToastContainer } from "react-toastify";
import ScanAndGet from "./pages/healthcare/ScanPres";
import HealthcareFindUserByEmailAndOTP from "./pages/healthcare/FindUser";
import UserDashboardHealthcare from "./pages/healthcare/UserDashboard";

// Define the types for the AppContext
interface User {
	role?: string;
	email?: string;
	id?: string;
	// Add other user properties as needed
}

interface AppContextType {
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
	isAuthenticated: boolean;
	setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error(
			"useAppContext must be used within an AppContext.Provider"
		);
	}
	return context;
};

function App() {
	const [user, setUser] = useState<User>({});

	// const isAuthenticated = !!user;
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const verifyToken = async () => {
		const token = localStorage.getItem("token");

		if (!token) {
			setUser({});
			setIsAuthenticated(false);
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:3000/api/v1/user/verify",
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (response.status === 401) {
				setUser({});
				setIsAuthenticated(false);
			}

			if (response.status === 200) {
				const data = await response.data;
				setUser(data.user);
				setIsAuthenticated(true);
			}
		} catch (error) {
			console.error("Token verification failed:", error);
			setUser({});
			setIsAuthenticated(false);
		}
	};

	useEffect(() => {
		verifyToken();
	}, []);

	const getDashboard = () => {
		if (user?.role === "doctor") return <DoctorDashboard />;
		if (user?.role === "healthcare") return <HealthcareDashboard />;
		return <UserDashboard />;
	};

	return (
		<AppContext.Provider
			value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
		>
			<Router>
				<Navbar
					isAuthenticated={isAuthenticated}
					userName={user?.email || ""}
				/>
				<Routes>
					{/* Public Routes */}
					<Route
						path="/"
						element={
							isAuthenticated ? getDashboard() : <FrontPage />
						}
					/>
					<Route path="/user/login" element={<UserLogin />} />
					<Route path="/user/signup" element={<UserSignup />} />

					{/* Protected Routes for Users */}
					<Route
						element={
							<UserProtectedRoutes
								isAuthenticated={
									isAuthenticated && user.role === "user"
								}
							/>
						}
					>
						<Route
							path="/user/prescription/upload"
							element={<UploadPresc />}
						/>
						<Route
							path="/user/prescription/history"
							element={<UserPrescriptionHistory />}
						/>
						<Route
							path="/user/prescription"
							element={<DigitalPrescription />}
						/>
						<Route
							path="/user/testresults/upload"
							element={<UploadTestRes />}
						/>
						<Route
							path="/user/testresults/history"
							element={<UserTestResults />}
						/>
						<Route
							path="/user/testresults"
							element={<DigitalTestReport />}
						/>
					</Route>

					{/* Doctor Routes */}
					<Route path="/doctor/login" element={<DoctorLogin />} />
					<Route path="/doctor/signup" element={<DoctorSignup />} />
					<Route
						element={
							<UserProtectedRoutes
								isAuthenticated={
									isAuthenticated && user.role === "doctor"
								}
							/>
						}
					>
						<Route
							path="/doctor/dashboard"
							element={<DoctorDashboard />}
						/>
						<Route
							path="/doctor/users"
							element={<FindUserByPhoneAndOTP />}
						/>
						<Route
							path="/doctor/user/otp"
							element={<OTPVerification />}
						/>
					</Route>

					{/* Healthcare Routes */}
					<Route
						path="/healthcare/login"
						element={<HealthcareLogin />}
					/>
					<Route
						path="/healthcare/signup"
						element={<HealthcareSignup />}
					/>
					<Route
						element={
							<UserProtectedRoutes
								isAuthenticated={
									isAuthenticated &&
									user.role === "healthcare"
								}
							/>
						}
					>
						<Route
							path="/healthcare/dashboard"
							element={<HealthcareDashboard />}
						/>
						<Route
							path="/healthcare/users"
							element={<HealthcareFindUserByEmailAndOTP />}
						/>
						<Route
							path="/healthcare/user/dashboard"
							element={<UserDashboardHealthcare />}
						/>
						<Route
							path="/healthcare/scan"
							element={<ScanAndGet />}
						/>
						{/* Add additional healthcare routes here */}
					</Route>
				</Routes>
				<ToastContainer />
			</Router>
		</AppContext.Provider>
	);
}

export default App;
