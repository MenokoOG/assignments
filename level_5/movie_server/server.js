const express = require("express");
const app = express();
const morgan = require('morgan');

//Middleware (for every request)- Looks for a request body, and turns it into 'req.body
app.use("/", express.json());
app.use(morgan('dev'))

//Routes-middleware
app.use("/api/movies", require("./routes/movieRouter"));

app.use("/tvshows", require("./routes/tvshowRouter"));

//Server Listen
app.listen(9000, () => {
  console.log("The sever is up and running on 9000 boss!");
});
