var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Here are your posts');
});


router.post('/', postsCtrl.create);


module.exports = router;
