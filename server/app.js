const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Create an Express app
const app = express();

// Middleware to parse incoming JSON
app.use(express.json());
app.use(cors());

// MongoDB connection string (replace with your credentials)
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Create a Mongoose schema
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Create a Mongoose model
const Task = mongoose.model("Task", TaskSchema);

// POST endpoint to handle incoming data
app.post("/api/tasks", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to save task" });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
