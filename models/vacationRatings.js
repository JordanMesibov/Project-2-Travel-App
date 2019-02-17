module.exports = function(sequelize, DataTypes) {
  
  var VacationRatings = sequelize.define("VacationRatings", {
      
      city1: {
        type: DataTypes.JSON,
        ranking: {
          type: DataTypes.TINYINT,
          allowNull: false,
          validate: {
            len: [1,2]
          }
        },
        rating: {
          type: DataTypes.TINYINT,
          allowNull: false,
          validate: {
            len: [1,2]
          }
        }
      },

       city2: {
        type: DataTypes.JSON,
        ranking: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },
        rating: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        }
      },
       city3: {
        type: DataTypes.JSON,
        ranking: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },
        rating: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        }
      },
       city4: {
        type: DataTypes.JSON,
        ranking: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },
        rating: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        }
      },
       city5: {
        type: DataTypes.JSON,
        ranking: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
        },
        rating: {
          type: DataTypes.TINYINT,
          allowNull: true,
          validate: {
            len: [1,2]
          }
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
    models.VacationRatings.belongsToMany(models.User, {
      through: "UserVacationRatings"
    });
    };

  return VacationRatings;
};