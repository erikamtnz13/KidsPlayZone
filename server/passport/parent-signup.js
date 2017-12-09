const Parent = require('mongoose').model('Parent');
const PassportLocalStrategy = require('passport-local').Strategy;


//Return the Passport Local Strategy object.
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {

    const parentData = {
        email: req.body.email.trim(),
        password: req.body.password.trim(),
        group: "placeholder"
    };

    const newParent = new Parent(parentData);
    newParent.save((err) => {
      if (err) { return done(err); }
  
      return done(null);
    });
  });

