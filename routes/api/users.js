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

router
  .route('/id/:id')
  .get(userController.findById)
  .put(userController.updateById);
  

module.exports = router;