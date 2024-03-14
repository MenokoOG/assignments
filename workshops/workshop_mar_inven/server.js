require("dotenv").config();
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require("mongoose");

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION_STRING,
    (err) => console.log('Connected to DB', err)
)

app.use("/api/inventory", require("./routes/inventoryRouter"))
app.use("/", require("./routes/inventoryRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen(8000, () => console.log('Server running on port 8000'))