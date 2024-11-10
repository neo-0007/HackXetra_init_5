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
import { useEffect, useState } from "react";
import UserProtectedRoutes from "./components/users/ProtectedRoutes";
import HealthcareLogin from "./pages/healthcare/Login";
import HealthcareSignup from "./pages/healthcare/Signup";
import UserDashboard from "./pages/users/Dashboard";
import DoctorDashboard from "./pages/doctors/Dashboard";
import HealthcareDashboard from "./pages/healthcare/Dashboard";
import HealthcareFindUserByPhoneAndOTP from "./pages/healthcare/FindUser";
import { RiOpenSourceFill } from "react-icons/ri";
import UserDashboardHealthcare from "./pages/healthcare/UserDashboard";
import ScanAndGet from "./pages/healthcare/ScanPres";

interface IUSER {
  _id: string;
  name: string;
  email: string;
  role: string;
}


function App() {
  // const [user, setUser] = useState<IUSER | null>(null);
const [user, setUser] = useState<IUSER>({
    _id: "1",
    name: "John Doe",
    email: "john@doe",
    role: "healthcare"
})
  const isAuthenticated = !!user;

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     fetch("http://localhost:3000/api/v1/user/verify", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUser(data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // }
  // , []);

  const getDashboard = () => {
    if (user?.role === "doctor") return <DoctorDashboard />;
    if (user?.role === "healthcare") return <HealthcareDashboard />;
    return <UserDashboard />;
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} userName={(!!user)?(user?.name):""} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={isAuthenticated ? getDashboard() : <FrontPage />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        
        {/* Protected Routes for Users */}
        <Route element={<UserProtectedRoutes isAuthenticated={isAuthenticated && user.role === "user"} />}>
          <Route path="/user/prescription/upload" element={<UploadPresc />} />
          <Route path="/user/prescription/history" element={<UserPrescriptionHistory />} />
          <Route path="/user/prescription" element={<DigitalPrescription />} />
          <Route path="/user/testresults/upload" element={<UploadTestRes />} />
          <Route path="/user/testresults/history" element={<UserTestResults />} />
          <Route path="/user/testresults" element={<DigitalTestReport />} />
        </Route>

        {/* Doctor Routes */}
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/signup" element={<DoctorSignup />} />
        <Route element={<UserProtectedRoutes isAuthenticated={isAuthenticated && user.role === "doctor"} />}>
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor/users" element={<FindUserByPhoneAndOTP />} />
          <Route path="/doctor/user/otp" element={<OTPVerification />} />
        </Route>

        {/* Healthcare Routes */}
        <Route path="/healthcare/login" element={<HealthcareLogin />} />
        <Route path="/healthcare/signup" element={<HealthcareSignup />} />
        <Route element={<UserProtectedRoutes isAuthenticated={isAuthenticated && user.role === "healthcare"} />}>
          <Route path="/healthcare/dashboard" element={<HealthcareDashboard />} />
          <Route path="/healthcare/users" element={<HealthcareFindUserByPhoneAndOTP />} />
          <Route path="/healthcare/user/dashboard/byID" element={<UserDashboardHealthcare />} />
          <Route path="/healthcare/scan" element={<ScanAndGet />} />
          {/* Add additional healthcare routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
