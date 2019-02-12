var db = require("../../models");
var express = require('express');
var router  = express.Router();



  // GET route for getting all of the groups
  router.get("/", function(req, res) {
    db.Group.findAll({})
      .then(function(result) {
        res.json(result);
      });
  });

  // Get route for returning specific group info
  router.get("/:id", function(req, res) {
    db.Group.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });


  // POST route for creating new group
  router.post("/", function(req, res) {
    console.log(req.body);
    db.Group.create({
      // Group rows here
      vacations: req.body.vacations,
      name: req.body.name
    })
      .then(function(result) {
        res.json(result);
      });
  });

  // DELETE route for deleting group
  router.delete("/:id", function(req, res) {
    db.Group.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });

module.exports = router;