var models  = require('../../models');
var express = require('express');
var router  = express.Router();
var users = require('./users.js');
var groups = require('./groups.js');
var vacationOptions = require('./vacationOptions.js');
var vacationRatings = require('./vacationRatings.js');
var usergroup = require('./usergroup.js');
const vote = require('./vote.js');


router.use('/users', users);
router.use('/groups', groups);
router.use('/vacations', vacationOptions);
router.use('/vacationratings', vacationRatings);
router.use('/usergroup', usergroup);
router.use('/vote', vote);


module.exports = router;