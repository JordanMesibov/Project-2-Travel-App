const db = require('../../models');

module.exports = function(req, res, next) {
  if (req.body.newCategory) {
    db.Categories.findOrCreate({
      where: {
        category_name: req.body.newCategory
      }
      // get back and destructure id out of new category
    }).then(([dbCategory]) => {
      req.body.categoryList.push(dbCategory.id);
      next();
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  } else {
    next();
  }
};
