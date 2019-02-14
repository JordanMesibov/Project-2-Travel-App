var db = require("../../models");
var express = require('express');
var router  = express.Router();
const passport = require('../../utils/middleware/passport-local');
const userController = require('../../controllers/userController');



router
  .route('/')
  .get(userController.findAll)
  .post(userController.register);

router
  .route('/status')
  .get(userController.userCheck);

router
  .route('/login')
  .post(passport.authenticate('local'), userController.login);

router
  .route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  });

router
  .route('/:username')
  .get(userController.findByName)
  .put(userController.update)
  .delete(userController.delete);


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
  // router.post("/", function(req, res) {
  //   console.log(req.body);
  //   db.User.create({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     fullName: req.body.fullName,
  //     userName: req.body.userName,
  //     email: req.body.email
  //   })
  //     .then(function(result) {
  //       res.json(result);
  //     });
  // });

  // // DELETE route for deleting users
  // router.delete("/:id", function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(result) {
  //       res.json(result);
  //     });
  // });

<<<<<<< HEAD
  // // PUT route for toggling has_voted to true once user votes on vacation options
  // router.put("/", function(req, res) {
  //   db.User.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function(result) {
  //       res.json(result);
  //     });
  // });
=======
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
>>>>>>> 1aa2aadfe792f89276d2da79fe00ffe49688776d


module.exports = router;