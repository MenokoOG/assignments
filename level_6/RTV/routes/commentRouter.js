const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/comments");

commentRouter.post("/:issueId", (req, res, next) => {
  req.body.user = req.auth._id;
  req.body.issue = req.params.issueId; // Link the comment to the issue
  const newComment = new Comment(req.body);
  newComment.save((err, savedComment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedComment);
  });
});
module.exports = commentRouter;
