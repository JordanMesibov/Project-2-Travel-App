module.exports = function(sequelize, DataTypes) {
  
  var VacationOptions = sequelize.define("VacationOptions", {
      
      city1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 125]
        }
      },

       city2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 125]
        }
      },
       city3: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 125]
        }
      },
       city4: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 125]
        }
      },
       city5: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 125]
        }
      },
      
    });

  return VacationOptions;
};