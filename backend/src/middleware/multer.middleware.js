import multer from "multer";
import { promises as fsPromises } from "fs";

const prescriptionStorage = multer.diskStorage({
	destination: async function (req, file, cb) {
		await fsPromises.mkdir("./public/prescriptions", { recursive: true });
		cb(null, "./public/prescriptions/");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	},
});

const labReportStorage = multer.diskStorage({
	destination: async function (req, file, cb) {
		await fsPromises.mkdir("./public/lab-reports", { recursive: true });
		cb(null, "./public/lab-reports/");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	},
});

// Configure multer for file uploads
export const prescriptionUpload = multer({ storage: prescriptionStorage });
export const labReportUpload = multer({ storage: labReportStorage });
