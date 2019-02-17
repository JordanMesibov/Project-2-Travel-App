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
        // include: [db.Posts]
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

  findById: function(req, res){
     db
      .User
      .findOne({
        include: [
        {
          model: db.Group,
          include: [db.VacationOptions],
          through: db.Usergroup,
          },
        
      ],
        where: {
          id: req.params.id
        },
        
      })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
      });
  },

  updateById: function(req, res){
  
    db
      .User
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
}