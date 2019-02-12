module.exports = function(sequelize, DataTypes) {
  const Categories = sequelize.define("Categories", {
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Uncategorized"
    }
  });

  Categories.associate = function(models) {
    models.Categories.belongsToMany(models.Posts, {
      through: {
        model: models.PostCategories
      }
    });
  }

  return Categories;
}