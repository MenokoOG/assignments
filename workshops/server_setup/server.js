//server workshop
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

// middleware
app.use(express.json());
mongoose.set("strictQuery", true);
app.use(morgan("dev"));

mongoose.connect("", (err) => {
  console.log("connected to database", err);
});

//error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(7500, () => {
  console.log("server is running dude on 7500!");
});
