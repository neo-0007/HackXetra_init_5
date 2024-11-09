import express from "express";
import {
	prescriptionUpload,
	labReportUpload,
} from "../middleware/multer.middleware.js";
// import path from "path";

import {
	uploadPrescription,
	uploadLabReport,
	userSignUp,
	userLogIn,
	decodeToken,
} from "../controllers/user.controller.js";

const router = express.Router();

// Define the image upload route
router.post("/signup", userSignUp);
router.post("/login", userLogIn);
router.post("/verify", decodeToken);
router.post(
	"/upload-prescription",
	prescriptionUpload.single("image"),
	uploadPrescription
);
router.post(
	"/upload-lab-report",
	labReportUpload.single("image"),
	uploadLabReport
);

export default router;
