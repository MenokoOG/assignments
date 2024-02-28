const express = require("express");
const movieRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const movies = [
  { title: "die hard", genre: "action", _id: uuidv4() },
  { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
  { title: "lion king", genre: "fantasy", _id: uuidv4() },
  { title: "friday the 13th", genre: "horror", _id: uuidv4() },
];

// GET all
movieRouter.get("/", (req, res) => {
  res.send(movies);
});

// GET one
movieRouter.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  const foundMovie = movies.find((movie) => movie._id === movieId);
  if(!foundMovie){
    const error = new Error(`The item with id ${movieId}is not here dude!`)
    return next(error)
  }
  res.send(foundMovie);
});

// GET by genre (Moved up for correct matching)
movieRouter.get("/search/genre", (req, res, next) => {
  const genre = req.query.genre;
  if(!genre){
    const error = new Error("You must provide a genre!")
    return next(error)
  }
  const filteredMovies = movies.filter((movie) => movie.genre === genre);
  res.send(filteredMovies);
});

// POST one
movieRouter.post("/", (req, res) => {
  const newMovie = req.body;
  newMovie._id = uuidv4();
  movies.push(newMovie);
  res.send(newMovie);
});

// Delete One
movieRouter.delete("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const movieIndex = movies.findIndex((movie) => movie._id === movieId);
  movies.splice(movieIndex, 1);
  res.send(`Successfully deleted movie!`);
});

// Update One
movieRouter.put("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const updatedObject = req.body;

  const movieIndex = movies.findIndex((movie) => movie._id === movieId);

  if (movieIndex !== -1) {
    const updatedMovie = Object.assign(movies[movieIndex], updatedObject);
    res.send(updatedMovie);
  } else {
    res.status(404).send("Movie not found");
  }
});

module.exports = movieRouter;
