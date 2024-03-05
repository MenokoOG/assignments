const express = require("express");
const bookRouter = express.Router();
const Book = require("../models/books");

// get all books
bookRouter.get("/", (req, res, next) => {
  Book.find((err, books) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(books);
  });
});

// get by author
bookRouter.get("/:authorID", (req, res, next) => {
  Book.find({ author: req.params.authorID }, (err, books) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(books);
  });
});

//add new book
bookRouter.post("/:authorID", (req, res, next) => {
  req.body.author = req.params.authorID;
  const newBook = new Book(req.body);
  newBook.save((err, savedBook) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedBook);
  });
});

// like a book
bookRouter.put("/like/:bookID", (req, res, next) => {
  Book.findOneAndUpdate(
    { _id: req.params.bookID },
    { $inc: { likes: 1 } },
    { new: true },
    (err, updatedBook) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedBook);
    }
  );
});

// find books by like range
bookRouter.get("/search/bylikes", (req, res, next) => {
    Book.where("likes").gte(5).exec((err, book) => {
        if (err) {
            res.status(500);
            return next(err);
          }
          return res.status(200).send(book);
    }
    )
})

module.exports = bookRouter;
