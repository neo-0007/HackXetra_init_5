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
import { useState } from "react";
import UserProtectedRoutes from "./components/users/ProtectedRoutes";

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={isUserAuthenticated} userName={""} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<>{isUserAuthenticated?(<div>Hello World!</div>):(<FrontPage />)}</>} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        
        {/* Protected Routes for Users */}
        <Route element={<UserProtectedRoutes isAuthenticated={isUserAuthenticated} />}>
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
        <Route path="/doctor/users" element={<FindUserByPhoneAndOTP />} />
        <Route path="/doctor/user/otp" element={<OTPVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
