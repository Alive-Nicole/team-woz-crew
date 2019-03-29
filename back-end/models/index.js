const router = require("express").Router();
let Article=require('./article');
let Job= require('./job');
let Event=require('./event') 

router.use("./job.js", Job);
router.use("./event.js",Event);
router.use("./article.js", Article)
module.exports = router;

