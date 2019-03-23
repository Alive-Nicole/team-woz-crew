const express = require('express');
const router = express.Router();

// Require user model in our routes module
let User = require('../../models/user');
const passport = require('../../auth/passport');

// Defined get data(index or listing) route
router.get("/profile", function (request, response) {

  let { user } = request;
  console.log('====user====', user)
  User.findOne({ username: user.username },function(err, user){
    if(err){
      console.log(err);
    }
    else {
      console.log('====user after search====', user)
      if(user) user.password = "";
      response.json(user);
    }
  });
});

// Defined edit route
router.post('/change-password/:username', function (request, response) {
    const { username } = request.params;
    const passwordData = request.body;
    User.findOne({username}, function (err, user){
      if(user.password === passwordData.password){
        console.log('====passwordData====', passwordData, user);
        user.password = passwordData.newPassword;
        user.save();
        response.send(200)
      } else {
        response.json({status: 401})
      }
    });
  });

//  Defined update route
router.post('/update', (request, response) => {
  const { picture, aboutYou, username, firstName, lastName, phone, email, github, linkedIn, interests, languages, technologies } = request.body
  console.log("in update", username)
  User.findOne({username}, (err, user) => {
    if(err) response.json(err);
    if (!user) { response.status(404).send("data is not found") }
    else {
      user.picture = picture;
      user.username = username;
      user.firstName = firstName;
      user.lastName = lastName;
      user.phone = phone;
      user.email = email;
      user.aboutYou = aboutYou;
      user.github = github; 
      user.linkedIn = linkedIn;
      user.languages = languages;
      user.technologies = technologies;
      user.interests= interests;

      user.save().then(user => {
        console.log('====saved====', user)
        response.json(user);
      })
    }
  })
  .catch(err => {
      res.status(400).send("unable to update the database");
  });
});

// Defined delete | remove | destroy route
router.route('/delete/:id')
  .get(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
  });

module.exports = router;