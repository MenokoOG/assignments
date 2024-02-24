const express = require("express");
const app = express()

// fake data
const users = [
    { name: 'joe', age: 20 },
    { name: 'moe', age: 24 },
    { name: 'betty', age: 20 },
    { name: 'sarah', age: 20 },
    { name: 'mike', age: 20 }
];

app.get("/users", (req, res) => {
    res.send(users)
})

app.listen(9000, () => {
    console.log("the serving is running on 9000 boss!")
})