const express = require("express");
const connectDB = require("./db");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 3001;

const cors = require("cors");
// Allow all origins for demo purposes (adjust for production)
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
