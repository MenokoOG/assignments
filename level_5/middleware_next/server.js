const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

app.use(express.json())

app.use('/items', (req, res, next) => {
    console.log("the items middleware was executed")
    next()
})

app.use('/items', (req, res, next) => {
    req.body = {name: "Menoko OG"}
    next()
})

app.get('/items', (req, res) => {
    console.log("GET request received")
    res.send(req.body)
})

app.listen(9000, () => {
    console.log(`Server is running on port 9000 dude!`)
})