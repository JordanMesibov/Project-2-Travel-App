var models  = require('../../models');
var express = require('express');
var router  = express.Router();
var users = require('./users.js');

router.use('/users', users);

module.exports = router;