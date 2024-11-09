import express from "express";
import { upload } from "../middleware/multer.middleware.js";
// import path from "path";

import { uploadPrescription } from "../controllers/user.controller.js";

const router = express.Router();

// Define the image upload route
router.post("/upload", upload.single("image"), uploadPrescription);

export default router;
