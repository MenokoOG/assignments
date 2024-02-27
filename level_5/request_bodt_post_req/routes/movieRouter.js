const express = require("express");
const movieRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const movies = [
  { title: "die hard", genre: "action", _id: uuidv4() },
  { title: "star wars IV", genre: "fantasy", _id: uuidv4 },
  { title: "lion king", genre: "fantasy", _id: uuidv4() },
  { title: "friday the 13th", genre: "horror", _id: uuidv4() },
];
// GET all
movieRouter.get("/", (req, res) => {
  res.send(movies);
});

// GET one
movieRouter.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId
  const foundMovie = movies.find(movie => movie._id === movieId)
  res.send(foundMovie)
} )

// GET by genre
movieRouter.get("/search/genre", (req, res) => {
  const genre = req.query.genre
  const filteredMovies = movies.filter(movie => movie.genre === genre)
  res.send(filteredMovies)
})

// POST one
movieRouter.post("/", (req, res) => {
  const newMovie = req.body;
  newMovie._id = uuidv4();
  movies.push(newMovie);
  res.send(`Successfully added "${newMovie.title}" to the database`);
});

// Delete One
movieRouter.delete("/:movieId", (req, res) => {
  const movieId = req.params.movieId
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  movies.splice(movieIndex, 1)
  res.send(`Successfully deleted movie!`)
})

// Update One
movieRouter.put('/:movieId', (req, res) => {
  const movieId = req.params.movieId; // Get the movie ID from the request parameters.
  const updatedObject = req.body; // Get the updated movie data from the request body.

  // Find the index of the movie to be updated in the 'movies' array.
  const movieIndex = movies.findIndex(movie => movie._id === movieId);

  if (movieIndex !== -1) {
      // If the movie is found, update its data.
      const updatedMovie = Object.assign(movies[movieIndex], updatedObject);
      res.send(updatedMovie);
  } else {
      // If the movie is not found, send an error response.
      res.status(404).send('Movie not found');
  }
});






// another way to declare the routes
// movieRouter.route("/")
// .get( (req, res) => {
//     res.send(movies);
//   })
// .post((req, res) => {
//     const newMovie = req.body;
//     newMovie._id = uuidv4();
//     movies.push(newMovie);
//     res.send(`Successfully added "${newMovie.title}" to the database`);
//   });

module.exports = movieRouter;
