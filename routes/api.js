var express = require('express');
var router = express.Router();
var server = require(__dirname + '/../models/server');

router.get('/server/version', function(req, res) {
  var obj = server.versions;

  var json = JSON.parse(JSON.stringify(obj));
  res.json(json);
});

module.exports = router;
