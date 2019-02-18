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
      include: [
        {
          model: db.User,
          through: db.Usergroup
          },
        db.VacationOptions
      ],
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });

// Get route for returning specific group info
  router.get("/name/:name", function(req, res) {
    db.Group.findAll({
      include: [
        {
          model: db.User,
          through: db.Usergroup
          },
        db.VacationOptions
      ],
      where: {
        name: req.params.name
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
      // vacations: req.body.vacations,
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

  // Put route for changing a group
  router.put("/:id", function(req, res) {
    db.Group.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;