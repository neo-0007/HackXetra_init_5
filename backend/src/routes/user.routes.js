import express from "express";
import {
	prescriptionUpload,
	labReportUpload,
} from "../middleware/multer.middleware.js";
// import path from "path";

import {
	uploadPrescription,
	userSignUp,
	userLogIn,
	decodeToken,
} from "../controllers/user.controller.js";

const router = express.Router();

// Define the image upload route
router.post("/signup", userSignUp);
router.post("/login", userLogIn);
router.post("/verify", decodeToken);
router.post("/upload", upload.single("image"), uploadPrescription);

export default router;
