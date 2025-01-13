var express = require('express');
var router = express.Router();

var data = require('../data/data_provider.js')

/* GET all users. */
router.get('/users', function(req, res, next) {
  var users = data.findAll()
  res.json(users);
});

module.exports = router;