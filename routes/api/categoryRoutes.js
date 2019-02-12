
const router = require('express').Router();
const categoryController = require('../../controllers/categoryController.js');

// matches with '/api/categories'
router
  .route('/')
  .get(categoryController.findAll)
  .post(categoryController.create);

router
  .route('/:id')
  .get(categoryController.findById)
  .put(categoryController.update)
  .delete(categoryController.delete);

module.exports = router;
