const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt");
const cors = require("cors"); // Import CORS

app.use(cors()); // Use CORS with default settings, which allows all origins
app.use(express.json());
mongoose.set("strictQuery", true);
app.use(morgan("dev"));

mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {
  if (err) {
    console.log("Failed to connect to database", err);
  } else {
    console.log("Connected to database");
  }
});

app.use('/auth', require('./routes/authRouter.js'));
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })); // req.user
app.use('/api/issues', require('./routes/issueRouter.js'));
// app.use("/api/comment", require("./routes/commentRouter.js"));

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  res.send({ errMsg: err.message });
});

app.listen(6500, () => {
  console.log(`Server is running on local port 6500`);
});
