const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userid: {
        type: mongoose.Schema.ObjectId,
        ref: 'userModel',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)