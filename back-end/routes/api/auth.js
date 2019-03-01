//auth api routes go here!
const router = require("express").Router();
const passport = require("../../auth/passport");

router.post("/login", passport.authenticate("local-login"), function(request, response){
    const { user } = request;
    console.log('====request.user====', user)
    request.session.save()
    return response.format({
      'application/json': function(){
        response.send({ user });
      }
    })
    // request.login(user, (err) => {
    //   if(err) return err
    // })
  })

router.post("/signup", passport.authenticate('local-signup'), function(request, response){
    return response.format({
      'application/json': function(){
        response.send({ status: "200", message: "Success!" });
      }
    })
  })

router.route("/logout")
  .get(function(req, res){
    // console.log('====req====', req)
    req.logout();
    res.redirect('/');
  });
    
module.exports = router;