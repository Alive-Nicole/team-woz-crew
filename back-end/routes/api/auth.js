//auth api routes go here!
const router = require("express").Router();
const passport = require("../../auth/passport");

router.post("/login", passport.authenticate("local-login"), (request, response) => {
    const { user } = request;
    request.session.save()
    return response.format({
      'application/json': () => {
        response.send({ user });
      }
    })
  })

router.post("/signup", passport.authenticate('local-signup'), (request, response) => {
  return response.format({
    'application/json': () => {
        response.send({ status: "200", message: "Success!" });
      }
    })
  })
  
  router.get("/logout", (request, response) => {
    request.logout();
    return response.send("Success");
  });
    
module.exports = router;