const db = require('../models');
const rankedVoting = require('./rankedVoting');

// Just returning "hello" for now to check if route/controller working

// to do:  accept user id, pull up five cites from db, send five cities to ranked voting (first will need to export from that file)

module.exports = {
  runRankedVoting: function(req, res) {

    // setting up dummy data for now to check if it works
    city1Name = "Paris";
    city2Name = "London";
    city3Name = "Orlando";
    city4Name = "Shanghai";
    city5Name = "Tokyo";

    results = rankedVoting(city1Name, city2Name, city3Name, city4Name);

    res.json(results);
  }
}