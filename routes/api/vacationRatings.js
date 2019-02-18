var db = require("../../models");
var express = require('express');
var router  = express.Router();
const vacationRatingsController = require('../../controllers/vacationratingsController');

router
  .route('/')
  // finds all vacation ratings
  .get(vacationRatingsController.findAll)
  // posts new user rating
  .post(vacationRatingsController.addRating);

router
  .route('/:id')
  // finds user rating by user rating id
  .get(vacationRatingsController.findById);

router
  .route('/vacations/:vacationoptionid')
  // finds all user ratings by vacationoption id
  .get(vacationRatingsController.findByVacationsId);

module.exports = router;