var express = require('express');
var router = express.Router();

var data = require('../data/data_provider.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  var users = data.findAll()
  res.render('index', { users:users });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  var new_user = { name :req.body.nombre, email: req.body.email }
  data.add(new_user)
  res.redirect('/')
});

module.exports = router;
