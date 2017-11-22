const Kid = require('mongoose').model('Kid');
const PassportLocalStrategy = require('passport-local').Strategy;


//Return the Passport Local Strategy object.
module.exports = new PassportLocalStrategy({
  usernameField: 'name',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, name, password, done) => {

    const kidData = {
        name: req.body.name.trim(),
        password: req.body.password.trim(),
    };

    const newKid = new Kid(kidData);
    newKid.save((err) => {
      if (err) { return done(err); }
  
      return done(null);
    });
  });