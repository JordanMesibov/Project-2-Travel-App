module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a table from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our table is between 1 and 140 characters
      validate: {
        len: [1, 125]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 125]
      }
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    email: {
       type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 255]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hasVoted: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new tables complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  
  return User;
};
