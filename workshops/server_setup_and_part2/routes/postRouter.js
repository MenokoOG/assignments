const express = require("express");
const Post = require("../model/posts.js")
const postRouter = express.Router()

// add one/ post
postRouter.post("/", (req, res, next) => {
    const newPost = new Post(req.body)
    newPost.save((err, savedPost) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
   
})

// get all
postRouter.get("/", (req, res, next) => {
    Post.find((err, posts) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (!posts || posts.length === 0) {
            res.status(404)
            return next(new Error("No posts are found in collection!"))
        }
        // Map through posts to add formattedDate property
        const postsWithFormattedDate = posts.map(post => ({
            ...post.toJSON(),
            formattedDate: post.formattedDate
        }))
        return res.status(200).send(postsWithFormattedDate)
    })
})



module.exports = postRouter