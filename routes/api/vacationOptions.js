var db = require("../../models");
var express = require('express');
var router  = express.Router();

  // GET route for getting all vacationoptions
  router.get("/", function(req, res) {
    db.VacationOptions.findAll({})
      .then(function(result) {
        res.json(result);
      });
  });

  // Get route for returning specific vacationOption info
  router.get("/:id", function(req, res) {
    db.VacationOptions.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });


  // POST route for creating new vacation option
  router.post("/", function(req, res) {
    console.log(req.body);
    db.VacationOptions.create(req.body)
      .then(function(result) {
        console.log("Just posted VacationOptions with " + result);
        res.json(result);
      });
  });

  // DELETE route for deleting vacationOptions
  router.delete("/:id", function(req, res) {
    db.VacationOptions.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });

  // Get route for returning vacation options associated with a group
  router.get("/group/:groupid", function(req, res) {
    db.VacationOptions.findAll({
      where: {
        GroupId: req.params.groupid
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });


module.exports = router;