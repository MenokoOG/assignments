const express = require('express');
const Comment = require('../models/comment'); // Correct path to your Comment model

const commentRouter = express.Router({mergeParams: true});

// Middleware to extract user info from JWT token, assumed to be setup in your application
// Ensure this middleware populates `req.auth` with the decoded token data

// Get all comments or comments by specific issueId
commentRouter.get("/:issueId?", (req, res, next) => {
    let query = {};
    if (req.params.issueId) {
        query.issueId = req.params.issueId; // Directly use the issueId from the route parameter
    }

    Comment.find(query, (err, comments) => {
        if (err) {
            res.status(500).send({error: err.message});
            return next(err);
        }
        return res.status(200).json(comments);
    });
});

// Post a new comment
commentRouter.post("/:issueId", (req, res, next) => {
    // Ensuring comment is associated with the logged-in user's ID and the issueId from the route parameter
    const newComment = new Comment({
        comment: req.body.comment,
        issueId: req.params.issueId,
        userId: req.auth._id
    });

    newComment.save((err, savedComment) => {
        if (err) {
            res.status(500).send({error: err.message});
            return next(err);
        }
        return res.status(201).json(savedComment);
    });
});

module.exports = commentRouter;
