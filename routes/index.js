var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi, dear!' });
});

router.get('/privacypolicy', function(req, res, next) {
  res.render('index', { title: 'Hi, dear!' });
});

module.exports = router;
