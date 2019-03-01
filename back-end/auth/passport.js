const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      User = require('../models/user')

passport.use('local-signup', new LocalStrategy(
    function(username, password, done) {
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
        console.log('====username in login====', username)
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
  }
))
passport.use("local", new LocalStrategy(
  function(username, password, done) {
    console.log('====username, password in other strategy====', username, password);
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect Username.' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      user.password = "";
      return done(null, user);
    });
  }
))

passport.serializeUser(function(user, done) {
  console.log('====user serialize====', user)
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('====user deserialize====', user)
  done(null, user);
});

module.exports = passport;
