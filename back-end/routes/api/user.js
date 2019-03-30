const express = require('express');
const router = express.Router();

// Require user model in our routes module
let User = require('../../models/user');
const passport = require('../../auth/passport');

// Defined get data(index or listing) route
router.get("/profile", ( request, response ) => {

  let { user } = request;
  User.findOne({ username: user.username }, (err, user ) => {
    if(err){
      console.log(err);
    }
    else {
      if(user) user.password = "";
      response.json(user);
    }
  });
});

router.get("/check-user", ( request, response ) => {
  const payload = request.user ? 
  ({ 
    userLoggedIn: true, 
    user: request.user
  }) : 
  ({ 
    userLoggedIn: false, 
    user: 
      { 
        technologies: [], 
        languages: [], 
        interests: [] 
      }
  })
  return response.json( payload )
})

// Defined edit route
router.post('/change-password/:username', (request, response) => {
    const { username } = request.params;
    const passwordData = request.body;
    User.findOne({ username }, ( err, user ) => {
      if(user.password === passwordData.password){
        user.password = passwordData.newPassword;
        user.save();
        response.send( 200 )
      } else {
        response.json({ status: 401 })
      }
    });
  });

//  Defined update route
router.post('/update', (request, response) => {
  const { picture, aboutYou, username, firstName, lastName, phone, email, github, linkedIn, interests, languages, technologies } = request.body
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
        response.json(user);
      })
    }
  })
  .catch(err => {
      res.status(400).send("unable to update the database");
  });
});

// Defined delete | remove | destroy route
router.get('/delete/:username', (request, response) => {
  const { username } = request.params;
  User.findOneAndDelete({username: username}, (err, user) => {
    if(err) response.json(err);

    request.logout();
    response.json('Successfully removed');
  });
});

module.exports = router;