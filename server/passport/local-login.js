const jwt = require('jsonwebtoken');
const Kid = require('mongoose').model('Kid');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');


//Return the Passport Local Strategy object.
module.exports = new PassportLocalStrategy({
  usernameField: 'name',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, name, password, done) => {
  const kidData = {
    name: req.body.name.trim(),
    password: req.body.password.trim()
  };

  // find a kid by name
  return Kid.findOne({ name: kidData.name }, (err, kid) => {
    if (err) { return done(err); }

    if (!kid) {
      const error = new Error('Incorrect name or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // check if a hashed user's password is equal to a value saved in the database
    return kid.comparePassword(kidData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error('Incorrect name or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: kid._id
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: kid.name
      };

      return done(null, token, data);
    });
  });
});