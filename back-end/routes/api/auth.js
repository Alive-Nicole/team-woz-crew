//auth api routes go here!
const router = require("express").Router();
const passport = require("../../auth/passport");

router.route("/login", passport.authenticate("local-login"))
  .get(function(request, response){
    //tbd
    console.log('====in router====')
    return response.send("200");
  })

module.exports = router;