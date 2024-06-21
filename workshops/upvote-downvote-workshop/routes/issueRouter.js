const express = require('express');
const issueRouter = express.Router();
const Issue = require('../models/issue');

// Get All Issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(issues);
    });
});

// Get issues by user id
issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(issues);
    });
});

// Add new Issue
issueRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id;
    req.body.username = req.auth.username
    const newIssue = new Issue(req.body);
    newIssue.save((err, savedIssue) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedIssue);
    });
});

// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.auth._id },
        (err, deletedIssue) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`);
        }
    );
});

// Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatedIssue);
        }
    );
});

//upvote
issueRouter.put('/upvote/:id', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.id},
        {
            $addToSet: {likedUsers: req.auth._id},
            $pull: {dislikedUsers: req.auth._id}
        },
        {new: true},
        (err, updatedIssue) => { 
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatedIssue);
        }
    );
});

//downvote
issueRouter.put('/downvote/:id', (req, res, next) => {
    Issue.findByIdAndUpdate(
        {_id: req.params.id},
        {
            $addToSet: {dislikedUsers: req.auth._id},
            $pull: {likedUsers: req.auth._id}
        },
        {new: true},
        (err, updatedIssue) => { 
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatedIssue);
        }
    );
});




module.exports = issueRouter;
