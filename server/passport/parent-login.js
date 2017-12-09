const jwt = require('jsonwebtoken');
const Parent = require('mongoose').model('Parent');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');


//Return the Passport Local Strategy object.
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const parentData = {
    email: req.body.email.trim(),
    password: req.body.password.trim()
  };

  // find a parent by email
  return Parent.findOne({ email: parentData.email }, (err, parent) => {
   
    if (err) { return done(err); }

    if (!parent) {

      const error = new Error('Incorrect name or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // check if a hashed user's password is equal to a value saved in the database
    return parent.comparePassword(parentData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error('Incorrect name or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: parent._id
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        email: parent.email,
        id: parent._id
      };
    

      return done(null, token, data);
    });
  });
});