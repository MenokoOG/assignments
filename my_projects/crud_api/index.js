require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS configuration
// CORS configuration
// app.use(cors({
//   origin: 'http://127.0.0.1:5174'
// }));


// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    console.log(" Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
