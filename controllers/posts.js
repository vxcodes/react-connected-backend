const postsRouter = require('../routes/posts');
var Post = require('../models/post');


module.exports = {
    create,
}

function create(req, res) {
    Post.create(req.body, function(err, post){
        res.status(201).json(post);
    });
}