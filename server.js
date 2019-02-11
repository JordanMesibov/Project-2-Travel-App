var express = require("express");
var exphbs = require("express-handlebars");
const routes = require("./routes");
// Set up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Sets up our Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// require("./routes/api/api-routes.js/index.js");

//handlebar
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// turn on all routes
app.use(routes);



// Sync sequelize, then start Express
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});