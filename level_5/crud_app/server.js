// Server file for CRUD app, V School, Menoko OG, Mar, 1 2024
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
mongoose.set("strictQuery", true);
app.use(morgan('dev'));

// MongoDB connection
mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {
    console.log("connected to database", err);
  });

// Routes
const inventoryRoutes = require('./routes/inventoryRouter');
app.use('/api/inventory', inventoryRoutes);

//error handler
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({ errMsg: err.message });
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
