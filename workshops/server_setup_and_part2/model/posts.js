const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
})
postSchema.virtual('formattedDate').get(function() {
    const date = new Date(this.datePosted)
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
})

module.exports = mongoose.model("Post", postSchema)