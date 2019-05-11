const db = require('../models');
const rankedVoting = require('./rankedVoting');

// Just returning "hello" for now to check if route/controller working

// to do:  accept user id, pull up five cites from db, send five cities to ranked voting (first will need to export from that file)

module.exports = {
  runRankedVoting: function(req, res) {

    // setting up city variables
    let city1Name;
    let city2Name;
    let city3Name;
    let city4Name;
    let city5Name;

    // setting up function to take in group id as parameter and query db and pull out city names
    db.Group.findOne({
      include: [
        db.VacationOptions
      ],
      where: {
        id: req.params.groupId
      }
    })
      .then(function(result) {

        // taking cities from returned data and putting them in variables
        let cities = result.VacationOptions;
        console.log(cities);
        if (cities[0]) {
          city1Name = cities[0].city1;
        
          city2Name = cities[0].city2;

          city3Name = cities[0].city3;

          city4Name = cities[0].city4;

          city5Name = cities[0].city5;
        }
        else {
          res.send("There are no cities selected for that group");
        }

        results = rankedVoting(city1Name, city2Name, city3Name, city4Name, city5Name);
        return results;
      })
      .then(function(results){
        res.json(results);
      });

}
  }