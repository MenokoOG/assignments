require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bountyRoutes = require('./routes/bountyRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
mongoose.set("strictQuery", true);
app.use(morgan('dev'));

mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {
    console.log("connected to database", err);
  });



app.use('/api/bounty', bountyRoutes);

//error handler
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({ errMsg: err.message });
  });
  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
