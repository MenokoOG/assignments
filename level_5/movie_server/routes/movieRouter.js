const express = require("express");
const movieRouter = express.Router();
const Movie = require("../models/movie")



// GET all
movieRouter.get("/", (req, res, next) => {
  Movie.find((err, movies) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(movies)
  })
});

// GET one
movieRouter.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  const foundMovie = movies.find((movie) => movie._id === movieId);
  if(!foundMovie){
    const error = new Error(`The item with id ${movieId}is not here dude!`)
    res.status(500)
    return next(error)
  }
  res.status(200).send(foundMovie);
});

// GET by genre (Moved up for correct matching)
movieRouter.get("/search/genre", (req, res, next) => {
  const genre = req.query.genre;
  if(!genre){
    const error = new Error("You must provide a genre!")
    res.status(500)
    return next(error)
  }
  const filteredMovies = movies.filter((movie) => movie.genre === genre);
  res.status(200).send(filteredMovies);
});

// POST one
movieRouter.post("/", (req, res, next) => {
  const newMovie = new Movie(req.body)
  newMovie.save((err, savedMovie) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedMovie)
  })
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
    res.status(201).send(updatedMovie);
  } else {
    res.status(404).send("Movie not found");
  }
});

module.exports = movieRouter;
