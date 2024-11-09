import express from "express";

import userRouter from "./src/routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
	res.json({ msg: "Hello from the backend!" });
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
