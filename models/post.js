const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
}, { timestamps: true });

const postSchema = new Schema({
    post: String,
    comments: [commentSchema]
}, { timestamps: true });

const followSchema = new Schema ({
    fullName: String,
    email: String,
    following: Boolean,
})

const userSchema = new Schema({
    fullName: String,
    email: String,
    follows: [followSchema]
}, { timestamps: true })


module.exports = mongoose.model('Post', postSchema);