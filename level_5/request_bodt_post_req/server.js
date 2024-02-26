const express = require("express");
const app = express()
const { v4: uuidv4 } = require('uuid');

//Middleware (for every request)- Looks for a request body, and turns it into 'req.body
app.use("/", express.json());

//Fake Data
const movies = [
    { title: 'die hard', genre: 'action', _id: uuidv4() },
    { title: 'star wars IV', genre: 'fantasy',_id: uuidv4 },
    { title: 'lion king', genre: 'fantasy', _id: uuidv4()},
    { title: 'friday the 13th', genre: 'horror', _id: uuidv4()}
];

//Routes
app.get("/movies", (req, res) => {
    res.send(movies)
})

app.post('/movies', (req, res) => {
    const newMovie = req.body;
    newMovie._id = uuidv4()
    movies.push(newMovie);
    res.send(`Successfully added "${newMovie.title}" to the database`);
});

//Server Listen
app.listen(9000, () => {
    console.log("The sever is up and running on 9000 boss!")
})