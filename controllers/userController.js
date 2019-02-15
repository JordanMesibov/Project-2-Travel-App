const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db
      .User
      .findAll({
        attributes: ["id", "firstName", "lastName", "fullName", "userName", "email"]
      })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  findByName: function (req, res) {
    db
      .User
      .findOne({
        attributes: ["id", "firstName", "lastName", "fullName", "userName", "email"],
        where: {
          username: req.params.username
        },
        include: [db.Posts]
      })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
  },
  userCheck: function(req, res) {
    if (req.user) {
      return res.json(req.user);
    }
    else {
      return res.status(422).json({error: "Not logged in!"})
    }
  },
  update: function (req, res) {
    db
      .User
      .update(req.body, {
        where: {
          username: req.params.username
        }
      })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  delete: function (req, res) {
    db
      .User
      .destroy({
        where: {
          username: req.params.username
        }
      })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  register: function(req, res) {
    /* 
      req.body => {
        first_name: "Alex",
        last_name: "Rosenkranz",
        email: "alex@alex.com",
        password: "123456"
      }
    */
    db
      .User
      .create(req.body)
      .then(function (userInfo) {
        // Upon successful signup, log user in
        req
          .login(userInfo, function (err) {
            if (err) {
              console.log(err)
              return res
                .status(422)
                .json(err);
            }
          
            console.log(req.user);
            return res.json("/");
          });
      })
      .catch(function (err) {
        console.log("Your password or email is not correct!"+err);

        res
          .status(422)
          .json(err);
      });
  },
  login: function(req, res) {
    console.log(req.user);
    res.json("/");
  },
  
  // Getting all users in a given group
    findByGroup: function(req, res) {
    db
      .User
      .findAll({
        where: {
          GroupId: req.params.groupid
        }
      })
      .then(function(result) {
        res.json(result)
        })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
    // put route to assign users to a group
    assignGroup: function(req, res) {
    db
      .User
      .update({GroupId: req.params.groupid}, {
        where: {
          
          id: req.body.id
        }
      })
      .then(function(result) {
        res.json(result);
        })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
}