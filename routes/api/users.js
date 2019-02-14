var db = require("../../models");
var express = require('express');
var router  = express.Router();



  // GET route for getting all of the users
  router.get("/", function(req, res) {
    db.User.findAll({})
      .then(function(result) {
        res.json(result);
      });
  });

  // Get route for returning specific user info
  router.get("/:id", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });


  // POST route for creating new user
  router.post("/", function(req, res) {
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      fullName: req.body.fullName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      GroupId: req.body.GroupId
    })
      .then(function(result) {
        res.json(result);
      });
  });

  // DELETE route for deleting users
  router.delete("/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });

  // PUT route for toggling has_voted to true once user votes on vacation options
  router.put("/:id", function(req, res) {
    db.User.update(req.body,
      {
        
        where: {
          id: req.params.id
        }
      })
      .then(function(result) {
        res.json(result);
      });
  });


module.exports = router;