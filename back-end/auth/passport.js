const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      User = require('../models/user')

passport.use('local-signup', new LocalStrategy(
    function(username, password, done) {
      console.log("in passport", username, password)
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (user) {
          return done(null, false, { message: 'Username exists.' });
        }
        User.create({token: "", email: username, password: password}, function(err, newUser){
          
          console.log('====user====', err, newUser)
          return done(null, newUser);
        })
      });
    }
))
passport.use('local-login', new LocalStrategy(
  function(username, password, done) {
    // return done(null, user);
    console.log('====username, password====', username, password)
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
))

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
