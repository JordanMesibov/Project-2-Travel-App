const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db
      .UserGroup
      .findAll({})
      .then(function(result){
        res.json(result)
        })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  associate: function (req, res) {
    db
      .UserGroup
      .create(req.body)
      .then(function(result){
         res.json(result)
         })
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
  }
}