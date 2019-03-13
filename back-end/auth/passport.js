const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      User = require('../models/user')

passport.use('local-signup', new LocalStrategy({ passReqToCallback: true },
    function(request, username, password, done) {
      console.log('====request in signup====', User)
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (user) {
          return done(null, false, { message: 'Username exists.' });
        }
        const { picture, aboutYou, username, password, firstName, lastName, phone, email, github, linkedIn, interests, languages, technologies } = request.body
        User.create({ picture, aboutYou, username, password, firstName, lastName, phone, email, github, linkedIn, interests, languages, technologies }, function(err, newUser){
          if(err) console.log('====err====', err)
          console.log('====newUser====', newUser)
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
