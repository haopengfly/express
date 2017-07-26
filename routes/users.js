var express = require('express');
var router = express.Router();

var user = require('../controllers/user');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/user/info',user.info);
router.post('/user/consume',user.consume);
module.exports = router;
