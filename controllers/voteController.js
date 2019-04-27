const db = require('../models');
const rankedVoting = require('./rankedVoting');

// Just returning "hello" for now to check if route/controller working

// to do:  accept user id, pull up five cites from db, send five cities to ranked voting (first will need to export from that file)

module.exports = {
  runRankedVoting: function(req, res) {
    res.json("hello");
  }
}