import express from "express";
import cors from "cors";
import userRouter from "./src/routes/user.routes.js";
import { connectDB } from "./src/utills/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB()

// Tackling the CORS
app.use(cors({
    origin: '*', // Update this to match your actual frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Handling preflight requests
app.options('/api', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.send();
});

app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
	res.json({ msg: "Hello from the backend!" });
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
