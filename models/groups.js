module.exports = function(sequelize, DataTypes) {
  
  var Group = sequelize.define("Group", {
      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 125]
        }
      },
      winner: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          len: [1, 125]
        }
      }
      
    });

    Group.associate = function(models) {
    models.Group.hasMany(models.VacationOptions);
    models.Group.belongsToMany(models.User, {
      through: "UserGroup"
    });
  };

  return Group;
};