var db = require("../../models");
var express = require('express');
var router  = express.Router();
const usergroupController = require('../../controllers/usergroupController');

router
  .route('/')
  .get(usergroupController.findAll)
  .post(usergroupController.associate);

module.exports = router;