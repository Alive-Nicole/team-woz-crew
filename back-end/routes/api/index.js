const router = require("express").Router();
const authRoutes = require("./auth");
const newsRoutes = require("./news");
const userRoutes = require("./user");

// Auth routes
router.use("/auth", authRoutes);
router.use("/news", newsRoutes);
router.use("/user", userRoutes);

module.exports = router;