require('dotenv').config()
const express = require("express");
const app = express();
const morgan = require ("morgan");
const mongoose = require("mongoose");

const port = 3000; 

//middleware
app.use(express.json())

app.use(morgan("dev"))

mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {
    console.log("connected to DB", err)
})


//error handle
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(port, () => {
    console.log("Server is running on port 3000")
})


