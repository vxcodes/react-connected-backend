const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const commentSchema = new Schema({
//     content: String,
// }, { timestamps: true });

const postSchema = new Schema({
    userName: {
        type: String,
    },
    title: {
        type: String,
    },
    post: {
        type: String,
    },
    // comments: [commentSchema]
}, { timestamps: true });

// const userSchema = new Schema({
//     userName: {
//         type: String,
//     },
//     email: {
//         type: String,
//     },
//     followers: {
//         type: Array,
//         default: []
//     },
//     following: {
//         type: Array,
//         default: []
//     },
// }, { timestamps: true })


// const userSchema = new Schema({
//     userName: {
//         type: String,
//     },
//     email: {
//         type: String,
//     },
//     followers: {
//         type: Array,
//         default: []
//     },
//     following: {
//         type: Array,
//         default: []
//     },
//     posts: [postSchema]
// }, { timestamps: true })


module.exports = mongoose.model('Post', postSchema);
