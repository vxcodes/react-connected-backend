var express = require('express');
var logger = require('morgan');

var postsRouter = require('./routes/posts');


var app = express();

app.use(logger('dev'));
app.use(express.json());


app.use('/api/posts', postsRouter);


module.exports = app;
