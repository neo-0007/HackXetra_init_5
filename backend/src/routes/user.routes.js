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
	uploadLabReport,
	addPrescription,
	getAllPrescriptionsByID,
	getPrescriptionByID,
	getUserByID,
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
router.post("/prescription/add", addPrescription);
router.get("/prescription/all/:id", getAllPrescriptionsByID);
router.get("/prescription/byID/:id", getPrescriptionByID);
router.get("/test", (req, res) => {
	res.send(process.env.GEN_AI_API_KEY);
});
router.get("/byID/:id", getUserByID);

export default router;
