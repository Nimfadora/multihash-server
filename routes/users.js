var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var store = require('store');

/* GET token. */
router.get('/token', function(req, res, next) {
  crypto.randomBytes(12, function(err, buffer) {
    var token = buffer.toString('hex');
    store.set(token, 'none');
    res.send(token);
  });
});

router.get('/token', function(req, res, next) {
  crypto.randomBytes(12, function(err, buffer) {
    var token = buffer.toString('hex');
    store.set(token, 'none');
    res.send(token);
  });
});

/* GET instagram auth token. */
router.get('/:authtoken', function(req, res, next) {
  res.send(store.get(req.params.authtoken));
});

module.exports = router;
