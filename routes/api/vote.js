var db = require("../../models");
var express = require('express');
var router  = express.Router();
const vote = require('../../controllers/voteController');

router
  .route('/:groupId')
  .post(vote.runRankedVoting);

module.exports = router;