var express = require("express");
var exphbs = require("express-handlebars");
const passport = require("./utils/middleware/passport-local");
const session = require("express-session");
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

// turn on session and passport stuff for authentication
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// require("./routes/api/api-routes.js/index.js");

//handlebar
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// turn on all routes
app.use(routes);



// Sync sequelize, then start Express
db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});