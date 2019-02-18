var db = require("../../models");
var express = require('express');
var router  = express.Router();
const uservacationratingsController = require('../../controllers/uservacationratingsController.js');

router
  .route('/')
  .get(uservacationratingsController.findAll)
  .post(uservacationratingsController.associate);

module.exports = router;