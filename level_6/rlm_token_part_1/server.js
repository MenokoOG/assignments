require("dotenv").config();
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require("express-jwt")

app.use(express.json())
mongoose.set("strictQuery", true);
app.use(morgan('dev'))

mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {
  console.log("connected to database", err);
});

// routes
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/todo', require('./routes/todoRouter.js'))


app.use((err, req, res, next) => {
  console.log(err)
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})