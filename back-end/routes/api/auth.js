//auth api routes go here!
const router = require("express").Router();
const passport = require("../../auth/passport");

router.route("/login", passport.authenticate("local-login"))
  .post(function(request, response){
    //tbd
    console.log('====in route login====', request.user)
    return response.format({
      'application/json': function(){
        response.send({ status: "200", userId: 1 });
      }
    })
  })

  router.route("/signup", passport.authenticate('local-signup'))
    .post(function(request, response){
      // console.log('====in route signup====', request)
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