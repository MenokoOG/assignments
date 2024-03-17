const express = require('express')
const issue = require('../models/issue')
const issueRouter = express.Router()


// Get All Posts

issueRouter.get('/', (req, res, next) => {
    issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// Get Posts By User

issueRouter.get('/user', (req, res, next) => {
    issue.find({user: req.auth._id}, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// Add New Posts

issueRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = issue (req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// Delete Post

issueRouter.delete('/:issueId', (req, res, next) => {
    issue.findOneAndDelete(
        {_id: req.params.issueId, user: req.auth._id},
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Deleted ${deletedIssue.title}`)
        }
    )
})

// Update Post

issueRouter.put('/:issueId', (req, res, next) => {
    issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

// Upvote a Post
issueRouter.put('/upVote/:issueId', (req, res, next) => {
    issue.findOneAndUpdate(
        {_id: req.params.issueId},
        { $addToSet: { upvote: req.auth._id },
        $pull : {downvote: req.auth._id}},
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

//Downvote a Post
issueRouter.put('/downVote/:issueId', (req, res, next) => {
    issue.findOneAndUpdate(
        {_id: req.params.issueId},
        {$addToSet: { downvote: req.auth._id},
        $pull: {upvote: req.auth._id}},
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

module.exports = issueRouter