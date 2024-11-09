import fs, { promises as fsPromises } from "fs";
// import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SchemaType } from "@google/generative-ai";
import User from "../models/users.js";
import bcrypt from "bcryptjs";
import { generateAccessToken, verifyToken } from "../utills/jwt.js";

// Define the structuredOutputWithSchemaAndImage function
const structuredOutputWithSchemaAndImage = async (file) => {
	const genAI = new GoogleGenerativeAI(
		"AIzaSyD6SwZ0GQ-zeZ1r9Rvnp8hDcbwMGoxpm7I"
	); // Replace with your actual API key

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
	const images = [generateImageParts(file)];
	console.log(images);

	try {
		const result = await model.generateContent([prompt, ...images]);
		return JSON.parse(result.response.text());
	} catch (error) {
		console.log(error);
		return error;
	}
};

// Define image processing helper function
const generateImageParts = (file) => {
	const fileData = fs.readFileSync(file.path);
	return {
		inlineData: {
			data: fileData.toString("base64"),
			mimeType: file.mimetype,
		},
	}; // Adjust mimeType if necessary
};

export const uploadPrescription = async (req, res) => {
	try {
		const file = req.file;
		console.log(req?.file);
		const jsonResponse = await structuredOutputWithSchemaAndImage(file);
		// fs.unlinkSync(filePath); // Clean up the uploaded file after processing
		res.json(jsonResponse);
		// res.json({ msg: "File uploaded successfully" });
	} catch (error) {
		res.status(500).json({ error: "Failed to process image" });
	}
};

export const userSignUp = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json({ message: 'User registered successfully', user: newUser });
	} catch (error) {
		res.status(500).json({ message: 'Error registering user', error });
	}
};

export const userLogIn = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check if the user exists
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		// Compare the provided password with the hashed password
		const isPasswordValid = await bcrypt.compare(password, user.password);
		const token = generateAccessToken(user._id);
		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}

		// If authentication is successful, you can proceed to create a session or JWT token
		// Here we are just returning a success message
		res.status(200).json({ message: 'Login successful', token, user: { id: user._id, email: user.email, role: user.role } });
	} catch (error) {
		res.status(500).json({ message: 'Error logging in', error });
	}
}

export const decodeToken = async (req, res) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const decoded = verifyToken(token);
		const user = await User.findById(decoded.id);
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		res.json({ message: 'Token decoded successfully', user: { id: user._id, name: user.name, email: user.email, role: user.role } });
	} catch (error) {
		res.status(500).json({ message: 'Error decoding token', error });
	}
}
