const db = require('../models');

module.exports = {

  findAll: function(req, res) {
    db
      .VacationRatings.findAll({})
      .then(function(result) {
        res.json(result);
      });
  },

  addRating: function (req, res) {
    db
      .VacationRatings
      .create(req.body)
      .then(function(result){
         res.json(result)
         })
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
  },

  findById: function(req, res){
    db
      .VacationRatings
      .findAll({
        where: {
          id: req.params.id
        }
    })
      .then(function(result) {
        res.json(result);
      });
  },

  findByVacationsId: function(req, res){
    db
      .VacationRatings
      .findAll({
        where: {
          vacationOptionId: req.params.vacationoptionid
          }
      })
      .then(function(result) {
        res.json(result);
      });
  }

}