var db = require("../../models");
var express = require('express');
var router  = express.Router();
const vacationRatingsController = require('../../controllers/vacationratingsController');

router
  .route('/')
  .get(vacationRatingsController.findAll)
  .post(vacationRatingsController.associate);

router
  .route('/:id')
  .get(vacationRatingsController.findById);

router
  .route('/vacations/:vacationoptionid')
  .get(vacationRatingsController.findByVacationsId);

module.exports = router;