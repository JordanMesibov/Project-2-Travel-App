var db = require("../../models");
var express = require('express');
var router  = express.Router();



  // GET route for getting all of the users
  router.get("/users/", function(req, res) {
    db.User.findAll({})
      .then(function(result) {
        res.json(result);
      });
  });

  // Get route for returning specific user info
  router.get("/users/:id", function(req, res) {
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
  router.post("/posts", function(req, res) {
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      fullName: req.body.fullName,
      userName: req.body.userName,
      email: req.body.email
    })
      .then(function(result) {
        res.json(result);
      });
  });

  // DELETE route for deleting posts
  router.delete("/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });

  // PUT route for toggling has_voted to true once user votes on vacation options
  router.put("/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(result) {
        res.json(result);
      });
  });


module.exports = router;