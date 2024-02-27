const express = require("express");
const app = express();

//Middleware (for every request)- Looks for a request body, and turns it into 'req.body
app.use("/", express.json());

//Routes-middleware
app.use("/movies", require("./routes/movieRouter"));

app.use("/tvshows", require("./routes/tvshowRouter"));

//Server Listen
app.listen(9000, () => {
  console.log("The sever is up and running on 9000 boss!");
});
