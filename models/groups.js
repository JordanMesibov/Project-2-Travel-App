module.exports = function(sequelize, DataTypes) {
  
  var Group = sequelize.define("Group", {
      //  This will be an array contanining ids form vacation_options
      // vacations: {
      //   type: DataTypes.ARRAY,
        
      //   allowNull: true,
        
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 125]
        }
      }
      
    });

  return Group;
};