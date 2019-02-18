const db = require('../models');

module.exports = {

  findAll: function(req, res) {
    db
      .UserGroup
      .findAll({})
      .then(function(result){
        res.json(result)
        })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  associate: function (req, res) {
    db
      .UserGroup
      .create(req.body)
      .then(function(result){
         res.json(result)
         })
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
  },
  delete:function(req, res) {
    db
    .Group
    .destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  },
  create: function(req, res) {
    db
    .Group
    .create({
      // Group rows here
      // vacations: req.body.vacations,
      name: req.body.name
    })
      .then(function(result) {
        res.json(result);
      });
 
  
}
// nan add



//Nan can not do the below this because 2 findAlls 

// Get route for returning specific group info
// router.get("/:id", function(req, res) {
//   db.Group.findAll({
//     include: [
//       {
//         model: db.User,
//         through: db.Usergroup
//         },
//       db.VacationOptions
//     ],
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(function(result) {
//       res.json(result);
//     });
// });
// // Get route for returning specific group info
// router.get("/name/:name", function(req, res) {
//   db.Group.findAll({
//     include: [
//       {
//         model: db.User,
//         through: db.Usergroup
//         },
//       db.VacationOptions
//     ],
//     where: {
//       name: req.params.name
//     }
//   })
//     .then(function(result) {
//       res.json(result);
//     });
// });

// // POST route for creating new group
// // router.post("/", function(req, res) {
// //   console.log(req.body);
  


