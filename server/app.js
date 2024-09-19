const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Ensure the .env file is correctly loaded

// Create an Express app
const app = express();

// Middleware to parse incoming JSON
app.use(express.json());
app.use(cors());

// MongoDB connection string (ensure .env has MONGO_URI defined)
const mongoURI = process.env.MONGO_URI;

// Check if Mongo URI is available
if (!mongoURI) {
  console.error("Error: MONGO_URI is not defined in .env");
  process.exit(1); // Stop the server if there's no URI
}

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Create a Mongoose schema
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Adding validation
  description: String,
});

// Create a Mongoose model
const Task = mongoose.model("Task", TaskSchema);
app.get("/todo", (req, res) => {
  // Fetch todos from the DB and send them back to the client
  Task.find()
    .then((tasks) => {
      if (!tasks || tasks.length === 0) {
        // If there are no todos, send an empty array
        return res.json([]);
      }
      // Otherwise, send the tasks
      return res.json(tasks);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch tasks" });
    });
});

// POST endpoint to handle incoming data (use POST for creating new tasks)
app.post("/todo", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save task" });
  }
});

// Log the Mongo URI for debugging purposes
console.log("Mongo URI:", mongoURI);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
