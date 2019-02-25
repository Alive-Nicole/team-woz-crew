//auth api routes go here!
const router = require("express").Router();
const passport = require("../../auth/passport");

router.post("/login", passport.authenticate("local-login"), function(request, response){
    const { user } = request;
    
    return response.format({
      'application/json': function(){
        response.send({ user });
      }
    })
  })

  router.post("/signup", passport.authenticate('local-signup'), function(request, response){
      return response.format({
        'application/json': function(){
          response.send({ status: "200", userId: 1 });
        }
      })
    })
  
  router.route("/logout")
    .get(function(req, res){
      req.logout();
      res.redirect('/');
    });
    
module.exports = router;