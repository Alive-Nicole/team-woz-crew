//auth api routes go here!
const router = require("express").Router();
const passport = require("../../auth/passport");

router.post("/login", passport.authenticate("local-login"), function(request, response){
    const { user } = request;
    request.session.save()
    return response.format({
      'application/json': function(){
        response.send({ user });
      }
    })
  })

router.post("/signup", passport.authenticate('local-signup'), function(request, response){
  return response.format({
    'application/json': function(){
        response.send({ status: "200", message: "Success!" });
      }
    })
  })
  
  router.get("/logout", function(request, response){
    request.logout();
    return response.send("Success");
  });
    
module.exports = router;