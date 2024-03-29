const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    issueId: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)
