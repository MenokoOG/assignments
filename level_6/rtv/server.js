// dependencies
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt");
const cors = require("cors"); // Import CORS package

// middleware
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
app.use(authenticateToken);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/issues", require("./routes/issues"));
app.use("/api/comments", require("./routes/comments"));

// error handler with auth
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

// Handles any requests that don't match the API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Enable CORS
app.use(cors());

// server start
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log("server is running dude on 5500!");
});
