// Add necessary imports
const express = require('express');
const issue = require('../models/issue');
const { validationResult } = require('express-validator');

// Initialize router
const issueRouter = express.Router();

// Get All Issues
issueRouter.get('/', (req, res, next) => {
    issue.find((err, issues) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(issues);
    });
});

// Get Issues By User
issueRouter.get('/user', (req, res, next) => {
    issue.find({ user: req.auth._id }, (err, issues) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(issues);
    });
});

// Add New Issue
issueRouter.post('/', (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    req.body.user = req.auth._id;
    const newIssue = new issue(req.body);
    newIssue.save((err, savedIssue) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedIssue);
    });
});

// Delete Issue
issueRouter.delete('/:issueId', (req, res, next) => {
    issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.auth._id },
        (err, deletedIssue) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            if (!deletedIssue) {
                return res.status(404).send('Issue not found');
            }
            return res.status(200).send(`Deleted ${deletedIssue.title}`);
        }
    );
});

// Update Issue
issueRouter.put('/:issueId', (req, res, next) => {
    issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            if (!updatedIssue) {
                return res.status(404).send('Issue not found');
            }
            return res.status(200).send(updatedIssue);
        }
    );
});

// Upvote an Issue
issueRouter.put('/upVote/:issueId', (req, res, next) => {
    issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $inc: { upvote: 1 }, $addToSet: { upvoters: req.auth._id }, $pull: { downvoters: req.auth._id } },
        { new: true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(updatedIssue);
        }
    );
});

// Downvote an Issue
issueRouter.put('/downVote/:issueId', (req, res, next) => {
    issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $inc: { downvote: 1 }, $addToSet: { downvoters: req.auth._id }, $pull: { upvoters: req.auth._id } },
        { new: true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(updatedIssue);
        }
    );
});

// Export router
module.exports = issueRouter;
