// copy from Alex's passport

const bcryptjs = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {

  const Users = sequelize.define('Users', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Users.prototype.validPassword = function (password) {
    return bcryptjs.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Users.hook("beforeCreate", function (user) {
    user.full_name = `${user.first_name} ${user.last_name}`;
    user.username = user.full_name.toLowerCase().replace(/\s/g, '');
    user.password = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(10), null);
    console.log(user);
  });

  Users.associate = function (models) {
    models.Users.hasMany(models.Posts);
  }

  return Users;
};
//---------------Alex's passport done here ---------------