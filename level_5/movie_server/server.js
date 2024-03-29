require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require('morgan');
const mongoose = require("mongoose");

//Middleware (for every request)- Looks for a request body, and turns it into 'req.body
app.use("/", express.json());
mongoose.set("strictQuery", true);
app.use(morgan('dev')) // logs the requests to console.

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION_STRING, (err) =>{
  console.log("connected to database", err)
} )

//Routes-middleware
app.use("/api/movies", require("./routes/movieRouter"));
app.use("/tvshows", require("./routes/tvshowRouter"));

// error handler
app.use((err, req, res, next, ) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

//Server Listen
app.listen(9000, () => {
  console.log("The sever is up and running on 9000 boss!");
});
