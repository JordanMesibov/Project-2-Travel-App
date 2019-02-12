const router = require('express').Router();
const path = require('path');
const isAuthenticated = require('../../utils/middleware/isAuthenticated');

// set up authenticated check for all routes here
router.use(isAuthenticated);

// only get to new posts
router.get('/new', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/cms.html'));
});

// edit a post
router.get('/edit/:postId', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/cms.html'));
});

// find posts by user
router.get('/:username', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/user.html'));
});

module.exports = router;
