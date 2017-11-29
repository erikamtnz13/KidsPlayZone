const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require("mongoose");
const config = require('./config');

const fileUpload = require('express-fileupload');
const path = require("path");

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// Connect to the Mongo DB
require('./server/models').connect(config.dbUri);

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// pass the passport middleware
app.use(passport.initialize());
// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// default options
app.use(fileUpload());

// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "client/src/containers/UserProfile.js"));
// })
 
app.post('/upload', function(req, res) {
    console.log(req);
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  console.log(sampleFile);
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('./client/src/imgs/'+ sampleFile.name , function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});