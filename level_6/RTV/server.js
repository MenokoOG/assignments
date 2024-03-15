// RTV server, Menoko OG, 3-14-24
const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt");

app.use(express.json());
mongoose.set("strictQuery", true);
app.use(morgan("dev"));

mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {
  console.log("connected to database", err);
});

app.use("/auth", require("./routes/authRouter.js"));
app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
); // req.user
// Other routes here
app.use('/api/comments', require('./routes/commentRouter.js'))
app.use('/api/issues', require('./routes/postRouter'))

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(6500, () => {
  console.log(`Server is running on local port 9000`);
});
