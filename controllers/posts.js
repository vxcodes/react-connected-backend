const postsRouter = require('../routes/posts');
var Post = require('../models/post');


module.exports = {
    index,
    create,
    update,
    delete: deletePost
}

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.status(200).json(posts);
    });
}

function create(req, res) {
    Post.create(req.body, function(err, post){
        res.status(201).json(post);
    });
}

function update(req, res) {
    Post.findByIdAndUpdate(req.params.id, function() {
        index(req, res)
    })
}

function deletePost(req, res) {
    Post.findByIdAndDelete(req.params.id, function() {
        index(req, res)
    });
}
