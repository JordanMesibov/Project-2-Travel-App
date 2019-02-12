<<<<<<< HEAD
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const postRoutes = require('./postRoutes.js');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/posts', postRoutes);

module.exports = router;
=======
var models  = require('../../models');
var express = require('express');
var router  = express.Router();
var users = require('./users.js');

router.use('/users', users);

module.exports = router;
>>>>>>> a10e04005716d235b8dd0796d8f9ee014c25046b
