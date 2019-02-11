const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");

// set up endpoints
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

// ship finished routes to server.js
module.exports = router;
