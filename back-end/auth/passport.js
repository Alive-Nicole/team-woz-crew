const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy
      // User = require('../models/user')

passport.use('local-signup', new LocalStrategy(
    function(username, password, done) {
      return done(null, user);
      // User.findOrCreate({ username: username }, function (err, user) {
        //   if (err) { return done(err); }
        //   if (user) {
        //     return done(null, false, { message: 'Username exists.' });
        //   }
        //   if (!user.validPassword(password)) {
        //     return done(null, false, { message: 'Incorrect password.' });
        //   }
        // });
    }
))
passport.use('local-login', new LocalStrategy(
  function(username, password, done) {
    return done(null, user);
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   return done(null, user);
    // });
  }
))

module.exports = passport;
