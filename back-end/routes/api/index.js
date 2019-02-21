const router = require("express").Router();
const authRoutes = require("./auth");
const newsRoutes = require("./news");

// Auth routes
router.use("/auth", authRoutes);
router.use("/news", newsRoutes);

module.exports = router;