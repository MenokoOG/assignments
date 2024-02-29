const mongoose = require("mongoose");
const Schema = mongoose.Schema

// Movie Blueprint
const movieScheme = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: false
    }

})   

module.exports = mongoose.model("Movie", movieScheme)