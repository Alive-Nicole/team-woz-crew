const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      User = require('../models/user')

passport.use('local-signup', new LocalStrategy({ passReqToCallback: true },
    function(req, username, password, done) {
      console.log('====req in signup====', req)
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (user) {
          return done(null, false, { message: 'Username exists.' });
        }
        User.create({token: "", username: username, password: password}, function(err, newUser){
          return done(null, newUser.username);
        })
      });
    }
    ))
    passport.use('local-login', new LocalStrategy(
      function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect Username.' });
          }
          if (user.password !== password) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, { username: user.username });
        });
    }))


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
