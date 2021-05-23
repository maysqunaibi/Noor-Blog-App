const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog = new Schema(
    {
        authorName: { type: String, required: true },
        title: { type: String, required: true },
        model: { type: String, required: true },
        readingTime: { type: [String], required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('blogs', Blog)
