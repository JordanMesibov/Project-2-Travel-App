const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const publicRoutes = require('./html/publicRoutes');
const authRoutes = require('./html/authRoutes');
const htmlRoutes = require("./htmlRoutes");

router.use('/', publicRoutes);
router.use('/api', apiRoutes);
router.use('/posts', authRoutes);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/404.html'));
});

module.exports = router;
