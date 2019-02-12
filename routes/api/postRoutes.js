const router = require('express').Router();
const cloudinaryMiddleware = require('../../utils/middleware/cloudinary');
const categoryCheckMiddleware = require('../../utils/middleware/categoryCheck');
const postController = require('../../controllers/postController');

// matches with '/api/posts'
router
  .route('/')
  .get(postController.findAll)
  .post(
    cloudinaryMiddleware, 
    categoryCheckMiddleware, 
    postController.create
    );

router
  .route('/:id')
  .get(postController.findById)
  .put(postController.update)
  .delete (postController.delete);

module.exports = router;
