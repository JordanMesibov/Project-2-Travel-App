const router = require("express").Router();
// import database connection
// const db = require("../../config/connection");


//test for priyesh
// const express = require("express");
// const exphbs = require("express-handlebars");
// const app = express();

// Set Handlebars as the default templating engine.
router
  .route("/")
  .get(function (req, res) {
    // if (err) {
    //   console.log(err);
    //   return res.status(500).json(err);
    // }
    res.render("home");
  });

router
  .route("/dashboard")
  .get(function (req, res) {
    // if (err) {
    //   console.log(err);
    //   return res.status(500).json(err);
    // }
    res.render("dashboard");
  });

router
  .route("/creategroup")
  .get(function (req, res) {
    // if (err) {
    //   console.log(err);
    //   return res.status(500).json(err);
    // }
    res.render("creategroup");
  });

router
  .route("/grouppage")
  .get(function (req, res) {
    // if (err) {
    //   console.log(err);
    //   return res.status(500).json(err);
    // }
    res.render("grouppage");
  });

  router
  .route("/login")
  .get(function (req, res) {
    res.render("login");
  })

  router
  .route("/signup")
  .get(function (req, res) {
    res.render("signup");
  })

module.exports = router;