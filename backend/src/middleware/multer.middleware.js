import multer from "multer";
import fs, { promises as fsPromises } from "fs";

const storage = multer.diskStorage({
	destination: async function (req, file, cb) {
		await fsPromises.mkdir("./public/prescriptions", { recursive: true });
		cb(null, "./public/prescriptions/");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	},
});

// Configure multer for file uploads
export const upload = multer({ storage });
