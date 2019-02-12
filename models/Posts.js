module.exports = function(sequelize, DataTypes) {

  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    }
  });

  Posts.associate = function(models) {

    models.Posts.belongsTo(models.Users, {
      onDelete: 'CASCADE',
      validate: {
        allowNull: false
      }
    });

    models.Posts.belongsToMany(models.Categories, {
      through: {
        model: models.PostCategories
      }
    });
  }

  return Posts;
}