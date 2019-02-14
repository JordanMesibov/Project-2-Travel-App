const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");

// nan add from Alex's files
const path = require('path');
//const publicRoutes = require('./html/publicRoutes');
//const authRoutes = require('./html/authRoutes');


// set up endpoints
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

router.get("*", function (req, res) {
  res.send("<h2 style='color:red;text-align:center'>Error 404, Bad request!</h2>");
});

// ship finished routes to server.js
module.exports = router;
