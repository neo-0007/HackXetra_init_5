import fs, { promises as fsPromises } from "fs";
// import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SchemaType } from "@google/generative-ai";
import FormData from "form-data";
import axios from "axios";
import User from "../models/users.js";
import bcrypt from "bcryptjs";
import { generateAccessToken, verifyToken } from "../utills/jwt.js";

import dotenv from "dotenv";
dotenv.config();

// Define the structuredPrescriptionOutput function
const structuredPrescriptionOutput = async (filePath, mimeType) => {
	const genAI = new GoogleGenerativeAI(process.env.GEN_AI_API_KEY); // Replace with your actual API key

	const schema = {
		type: SchemaType.OBJECT,
		properties: {
			doctor: {
				type: SchemaType.OBJECT,
				properties: {
					name: {
						type: SchemaType.STRING,
						description: "Name of the doctor",
						nullable: false,
					},
					phone: {
						type: SchemaType.STRING,
						description: "Phone number of the doctor",
						nullable: false,
					},
				},
				required: ["name", "phone"],
			},
			prescription: {
				type: SchemaType.ARRAY,
				items: {
					type: SchemaType.OBJECT,
					properties: {
						name: {
							type: SchemaType.STRING,
							description: "Name of medicine",
							nullable: false,
						},
						dosage: {
							type: SchemaType.STRING,
							description: "Dosage of the medicine",
							nullable: false,
						},
						frequency: {
							type: SchemaType.STRING,
							description: "Frequency of the medicine",
							nullable: false,
						},
						timing: {
							type: SchemaType.STRING,
							description: "Timing of the medicine",
							nullable: true,
						},
					},
					required: ["name", "dosage", "frequency", "timing"],
				},
			},
			medicalCondition: {
				type: SchemaType.STRING,
				description: "Medical condition of the patient",
				nullable: true,
			},
		},
		required: ["doctor", "prescription"],
	};

	const model = genAI.getGenerativeModel({
		model: "gemini-1.5-pro",
		generationConfig: {
			responseMimeType: "application/json",
			responseSchema: schema,
		},
	});

	const prompt =
		"This a prescription written by a doctor. Detect what is written in this prescription and respond with all information written in a json format. Guess the name of the medicine only if it is not among the known medicines or brands.";
	const images = [generateImageParts(filePath, mimeType)];
	console.log(images);

	try {
		const result = await model.generateContent([prompt, ...images]);
		return JSON.parse(result.response.text());
	} catch (error) {
		console.log(error);
		return error;
	}
};

const structuredLabReportOutput = async (filePath, mimeType) => {
	const genAI = new GoogleGenerativeAI(process.env.GEN_AI_API_KEY); // Replace with your actual API key

	const schema = {
		type: SchemaType.OBJECT,
		properties: {
			institution: {
				type: SchemaType.STRING,
				description: "Name of the medical institution",
				nullable: false,
			},
			location: {
				type: SchemaType.STRING,
				description: "Location of the medical institution",
				nullable: false,
			},
			patient_info: {
				type: SchemaType.OBJECT,
				properties: {
					UHD: {
						type: SchemaType.STRING,
						description:
							"Unique hospital identifier for the patient",
						nullable: false,
					},
					name: {
						type: SchemaType.STRING,
						description: "Name of the patient",
						nullable: false,
					},
					sex: {
						type: SchemaType.STRING,
						description: "Sex of the patient",
						nullable: false,
					},
					age: {
						type: SchemaType.STRING,
						description: "Age of the patient",
						nullable: false,
					},
					department: {
						type: SchemaType.STRING,
						description: "Department the patient is in",
						nullable: false,
					},
					referred_by: {
						type: SchemaType.STRING,
						description: "Referring doctor's name",
						nullable: false,
					},
					unit_name: {
						type: SchemaType.STRING,
						description: "Unit or ward name",
						nullable: true,
					},
					lab_reference_number: {
						type: SchemaType.STRING,
						description: "Lab reference number for the report",
						nullable: false,
					},
					ward_name: {
						type: SchemaType.STRING,
						description: "Name of the patient's ward",
						nullable: true,
					},
					registration_date: {
						type: SchemaType.STRING,
						description: "Date and time of patient's registration",
						nullable: false,
					},
				},
				required: [
					"UHD",
					"name",
					"sex",
					"age",
					"department",
					"referred_by",
					"lab_reference_number",
					"registration_date",
				],
			},
			sample_details: {
				type: SchemaType.OBJECT,
				properties: {
					sample_date: {
						type: SchemaType.STRING,
						description: "Date and time of sample collection",
						nullable: false,
					},
					lab_sub_code: {
						type: SchemaType.STRING,
						description: "Sub-code indicating type of lab analysis",
						nullable: false,
					},
					lab_unit: {
						type: SchemaType.STRING,
						description: "Specific lab unit performing the tests",
						nullable: false,
					},
					report_generated_date: {
						type: SchemaType.STRING,
						description: "Date and time when report was generated",
						nullable: false,
					},
					sample_id: {
						type: SchemaType.STRING,
						description: "Unique sample ID",
						nullable: false,
					},
					sample_type: {
						type: SchemaType.STRING,
						description: "Type of sample (e.g., blood, urine)",
						nullable: false,
					},
				},
				required: [
					"sample_date",
					"lab_sub_code",
					"lab_unit",
					"report_generated_date",
					"sample_id",
					"sample_type",
				],
			},
			test_results: {
				type: SchemaType.ARRAY,
				items: {
					type: SchemaType.OBJECT,
					properties: {
						test_name: {
							type: SchemaType.STRING,
							description: "Name of the test conducted",
							nullable: false,
						},
						observation_result: {
							type: SchemaType.STRING,
							description: "Result or value of the observation",
							nullable: false,
						},
						normal_range: {
							type: SchemaType.STRING,
							description: "Normal range for the test results",
							nullable: false,
						},
					},
					required: [
						"test_name",
						"observation_result",
						"normal_range",
					],
				},
			},
			authorized_signatory: {
				type: SchemaType.STRING,
				description: "Name or title of the authorized signatory",
				nullable: false,
			},
		},
		required: [
			"institution",
			"location",
			"patient_info",
			"sample_details",
			"test_results",
			"authorized_signatory",
		],
	};

	const model = genAI.getGenerativeModel({
		model: "gemini-1.5-pro",
		generationConfig: {
			responseMimeType: "application/json",
			responseSchema: schema,
		},
	});

	const prompt =
		"This a lab report written by a doctor. Detect what is written in this lab report and respond with all information written in a json format.";
	const images = [generateImageParts(filePath, mimeType)];
	console.log(images);

	try {
		const result = await model.generateContent([prompt, ...images]);
		return JSON.parse(result.response.text());
	} catch (error) {
		console.log(error);
		return error;
	}
	// } finally {
	// 	try {
	// 		await fsPromises.unlink(file.path);
	// 	} catch (error) {
	// 		console.log(error);

	// 		return error;
	// 	}
	// }
};

// Define image processing helper function
const generateImageParts = (filePath, mimeType) => {
	const fileData = fs.readFileSync(filePath);
	return {
		inlineData: {
			data: fileData.toString("base64"),
			mimeType: mimeType,
		},
	}; // Adjust mimeType if necessary
};

export const uploadPrescription = async (req, res) => {
	try {
		const file = req.file;
		// console.log(req?.file);
		if (!file) {
			return res.status(400).json({ error: "No file uploaded" });
		}

		// Create form data to send to the /preprocessing endpoint
		const formData = new FormData();
		formData.append("file", fs.createReadStream(file.path));

		// Send the file to the /preprocessing endpoint
		const response = await axios.post(
			"http://localhost:8000/preprocessing",
			formData,
			{
				headers: formData.getHeaders(),
				responseType: "stream", // Expect a stream back
			}
		);
		// console.log("response", response?.data);

		// Save the enhanced image received from /preprocessing
		const enhancedImagePath = `./public/enhanced-prescriptions/${Date.now()}-${
			file.originalname
		}`;
		console.log(enhancedImagePath);
		const writer = fs.createWriteStream(enhancedImagePath);
		response.data.pipe(writer);

		writer.on("finish", async () => {
			// Perform data extraction on the enhanced image
			const jsonResponse = await structuredPrescriptionOutput(
				enhancedImagePath,
				file.mimetype
			);

			// Optionally clean up the uploaded files after processing
			fs.unlinkSync(file.path); // Clean up the original file
			fs.unlinkSync(enhancedImagePath); // Clean up the enhanced file if no longer needed

			res.json(jsonResponse);
		});

		writer.on("error", (error) => {
			res.status(500).json({ error: "Failed to save enhanced image" });
		});
	} catch (error) {
		res.status(500).json({ error: "Failed to process image" });
	}
};

export const uploadLabReport = async (req, res) => {
	try {
		const file = req.file;
		// console.log(req?.file);
		if (!file) {
			return res.status(400).json({ error: "No file uploaded" });
		}

		// Create form data to send to the /preprocessing endpoint
		const formData = new FormData();
		formData.append("file", fs.createReadStream(file.path));

		// Send the file to the /preprocessing endpoint
		const response = await axios.post(
			"http://localhost:8000/preprocessing",
			formData,
			{
				headers: formData.getHeaders(),
				responseType: "stream", // Expect a stream back
			}
		);
		// console.log("response", response?.data);

		// Save the enhanced image received from /preprocessing
		const enhancedImagePath = `./public/enhanced-lab-reports/${Date.now()}-${
			file.originalname
		}`;
		console.log(enhancedImagePath);
		const writer = fs.createWriteStream(enhancedImagePath);
		response.data.pipe(writer);

		writer.on("finish", async () => {
			// Perform data extraction on the enhanced image
			const jsonResponse = await structuredLabReportOutput(
				enhancedImagePath,
				file.mimetype
			);

			// Optionally clean up the uploaded files after processing
			// fs.unlinkSync(file.path); // Clean up the original file
			// fs.unlinkSync(enhancedImagePath); // Clean up the enhanced file if no longer needed

			res.json(jsonResponse);
		});

		writer.on("error", (error) => {
			res.status(500).json({ error: "Failed to save enhanced image" });
		});
	} catch (error) {
		res.status(500).json({ error: "Failed to process image" });
	}
};

export const userSignUp = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json({
			message: "User registered successfully",
			user: newUser,
		});
	} catch (error) {
		res.status(500).json({ message: "Error registering user", error });
	}
};

export const userLogIn = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check if the user exists
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Compare the provided password with the hashed password
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res
				.status(401)
				.json({ message: "Invalid email or password" });
		}
		const token = generateAccessToken(user._id);

		// If authentication is successful, you can proceed to create a session or JWT token
		// Here we are just returning a success message
		res.status(200).json({
			message: "Login successful",
			token,
			user: { id: user._id, email: user.email, role: user.role },
		});
	} catch (error) {
		res.status(500).json({ message: "Error logging in", error });
	}
};

export const decodeToken = async (req, res) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decoded = verifyToken(token);
		const user = await User.findById(decoded.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json({
			message: "Token decoded successfully",
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
			},
		});
	} catch (error) {
		res.status(500).json({ message: "Error decoding token", error });
	}
};
