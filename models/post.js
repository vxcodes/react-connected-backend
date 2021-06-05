const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
}, { timestamps: true });

const postSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, { timestamps: true });


const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
}, { timestamps: true })


module.exports = mongoose.model('Post', postSchema);
module.exports = mongoose.model('User', userSchema);
