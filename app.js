var express = require('express');
var logger = require('morgan');
var cors = require('cors');
var postsRouter = require('./routes/posts');


var app = express();

require('dotenv').config()
require('./config/database')

app.use(logger('dev'));
app.use(express.json()); // creates req.body
app.use(cors());


app.use('/api/posts', postsRouter);


module.exports = app;
