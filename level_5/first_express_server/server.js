// express lesson v school, menoko og, 2-23-24
const express = require("express")
const app = express()
const port = 9000
// 1. endpoint(mount path), callback function


app.get("/", (req, res) => {
    res.send("Hello Menoko OG this is a test!!!")
})

app.get("/user", (req, res) => {
    res.send({name: "Hello Kitty", age: 507})
})




// takes port and callback as args
app.listen(port, () => {
    console.log("the server is running on " + port)
})