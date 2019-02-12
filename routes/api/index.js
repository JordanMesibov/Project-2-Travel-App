var models  = require('../../models');
var express = require('express');
var router  = express.Router();
var users = require('./users.js');
var groups = require('./groups.js');

router.use('/users', users);
router.use('/groups', groups);

module.exports = router;