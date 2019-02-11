const router = require("express").Router();
// import database connection
const db = require("../../config/connection");


//test for priyesh
// const express = require("express");
// const exphbs = require("express-handlebars");
// const app = express();

// Set Handlebars as the default templating engine.
router
.route("/")
.get(function(req, res) {
  if (err) {
    console.log(err);
    return res.status(500).json(err);
  }
  res.render("home");
});



app.get("/dashboard", function(req, res) {
  res.render("dashboard");
});

app.get("/groupcreatepage", function(req, res) {
  res.render("groupcreatepage");
});

app.get("/grouppage", function(req, res) {
  res.render("grouppage");
});

app.get("/home", function(req, res) {
  res.render("home");
});





module.exports = router;