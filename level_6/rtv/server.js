require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt");
const cors = require("cors");

app.use(express.json());
mongoose.set("strictQuery", true);
app.use(morgan("dev"));

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {
  console.log("connected to database", err);
});

// JWT Authentication Middleware
const authenticateToken = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

// Enable CORS
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Attach JWT authentication to protected routes
app.use("/api/issues", authenticateToken, require("./routes/issues"));
app.use("/api/comments", authenticateToken, require("./routes/comments"));

// routes
app.use("/api/auth", require("./routes/auth"));

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  return res.status(500).json({ error: "Internal Server Error" });
});

// Handles any requests that don't match the API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
