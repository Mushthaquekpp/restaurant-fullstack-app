import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet"; // Helmet for setting security-related HTTP headers

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(helmet()); // Set security-related HTTP headers
app.use(express.json()); // Middleware to parse JSON request bodies

// CORS configuration to allow requests only from the specified origin
app.use(
  cors({
    origin: ["http://localhost:5173"], // Adjust the origin as needed for your frontend
    methods: ["POST"], // Restrict methods to POST
    credentials: true, // Include credentials (e.g., cookies) in requests
  })
);

// Define the user schema for MongoDB
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name field is required
  },
  email: {
    type: String,
    required: true, // Email field is required
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Simple email validation
  },
  message: {
    type: String,
    required: true, // Message field is required
  },
});

// Create a Mongoose model based on the schema
const User = mongoose.model("User", userSchema);

// Endpoint to handle POST requests to /contact
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body; // Destructure name, email, and message from request body

    // Validate input
    if (!name || !email || !message) {
      return res
        .status(400)
        .send({ error: "Name, email, and message are required" }); // Return an error if any field is missing
    }

    // Save the new user message to the database
    const newUser = new User({ name, email, message });
    await newUser.save();

    res.status(201).send({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error) {
    console.error("Error saving message:", error); // Log any errors to the console
    res.status(500).send({
      success: false,
      message: "An error occurred while saving your message.", // Generic error message for users
    });
  }
});

// Function to connect to MongoDB
const connectToMongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => {
      console.log("Database connected successfully"); // Log message when the database is connected
    })
    .catch((error) => {
      console.error("Database connection failed", error); // Handle connection errors
      process.exit(1); // Exit if the database connection fails
    });
};

// Start the server and connect to the database
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`); // Log message when the server is running
  connectToMongoDB(); // Connect to the database when the server starts
});
