// need to do all imports and set up a mongodb
require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose");

const app = express();

// middleware
app.use("/", express.json());
mongoose.set("strictQuery", true);
app.use(morgan("dev"));


mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {
    console.log("connected to database", err);
  });

  //routes - add api first in route
  app.use("/api/books", require("./routes/bookRouter"))
  app.use("/api/authors", require("./routes/authorRouter"))

  
  //error handler
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({ errMsg: err.message });
  });

  // server start 
app.listen(9000, () => {
    console.log("server is running dude on 9000!");
  });
  



