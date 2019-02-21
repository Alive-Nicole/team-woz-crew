//news api routes go here!
const router = require("express").Router();

router.route("/")
  .get(function(request, response){
    //tbh
    return response.send("200")
  })

module.exports = router;