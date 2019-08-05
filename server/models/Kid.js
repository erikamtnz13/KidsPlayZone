const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the User model schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    index: { unique: true }
  },
  password: String,
  img: String
});


//Compare the passed password with the value in the database. A model method.
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


//The pre-save hook method.
UserSchema.pre('save', function saveHook(next) {
  const kid = this;

  // proceed further only if the password is modified or the user is new
  if (!kid.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(kid.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      kid.password = hash;

      return next();
    });
  });
});

const Kid = mongoose.model('Kid', UserSchema);
module.exports = Kid 