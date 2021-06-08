var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');



/* GET home page. */


router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);
router.put(':/id', postsCtrl.update);
router.delete(':/id', postsCtrl.delete);

module.exports = router;
