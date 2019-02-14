const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Categories.findAll()
      .then(dbCategories => res.json(dbCategories))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  findById: function(req, res) {
    db.Categories.findById(req.params.id)
      .then(dbCategories => res.json(dbCategories))
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
  },
  delete: function(req, res) {
    db.Categories.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCategories => res.json(dbCategories))
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
  },
  update: function(req, res) {
    db.Categories.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbCategories => res.json(dbCategories))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  create: function(req, res) {
    db.Categories.create(req.body)
      .then(dbCategories => res.json(dbCategories))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};
