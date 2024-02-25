const express = require("express");
const app = express()

//Middleware (for every request)
app.use("/", express.json());

//Fake Data
const movies = [
    { title: 'die hard', genre: 'action' },
    { title: 'star wars IV', genre: 'fantasy' },
    { title: 'lion king', genre: 'fantasy' },
    { title: 'friday the 13th', genre: 'horror' }
];

//Routes
app.get("/movies", (req, res) => {
    res.send(movies)
})

app.post('/movies', (req, res) => {
    const newMovie = req.body;
    movies.push(newMovie);
    res.send(`Successfully added "${newMovie.title}" to the database`);
});

//Server Listen
app.listen(9000, () => {
    console.log("The sever is up and running on 9000 boss!")
})