module.exports = function(sequelize, DataTypes) {
  
  var VacationRatings = sequelize.define("VacationRatings", {
      
      city1ranking: {
          type: DataTypes.TINYINT,
          allowNull: false,
          validate: {
            len: [1,2]
          }
        },
      city1rating: {
          type: DataTypes.TINYINT,
          allowNull: false,
          validate: {
            len: [1,2]
          }
        },

     city2ranking: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },
      city2rating: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },

      city3ranking: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },

      city3rating: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },

      city4ranking: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },
      city4rating: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },
      
      city5ranking: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },
      city5rating: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },
    });

    VacationRatings.associate = function (models) {
    models.VacationRatings.belongsTo(models.VacationOptions, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.VacationRatings.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    }

  return VacationRatings;
};