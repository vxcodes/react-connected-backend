const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
}, { timestamps: true });

const postSchema = new Schema({

    post: {
        type: String,
    },
    comments: [commentSchema]
}, { timestamps: true });



module.exports = mongoose.model('Post', postSchema);
