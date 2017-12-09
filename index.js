const mongoose = require("mongoose");
// const kidsController = require("./server/controllers/kidsController.js");

const fileUpload = require('express-fileupload');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const Kid = require('./server/models/Kid.js');
const kidsController = require("./server/controllers/kidsController");


const config = require('./config');

const path = require("path");

const app = express();

app.use(fileUpload());

const PORT = process.env.PORT || 3000

var server = require('http').createServer(app);
var io = require('socket.io')(server);

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
const parentSignupStrategy = require('./server/passport/parent-signup');
const parentLoginStrategy = require('./server/passport/parent-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
passport.use('parent-signup', parentSignupStrategy);
passport.use('parent-login', parentLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
const parentCheckMiddleware = require('./server/middleware/parent-check')
app.use('/api', authCheckMiddleware);
app.use('/parentapi', parentCheckMiddleware)

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
const uploadRoute = require('./server/routes/upload.js')
const parentAuthRoutes = require('./server/routes/parent-auth.js')
app.use('/auth', authRoutes);
app.use('/parent-auth', parentAuthRoutes);
app.use('/api', apiRoutes);
app.use('/parentapi', apiRoutes)
app.use('/upload', uploadRoute);

app.post('/upload', kidsController.update)


// // start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
// });

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat message', function(msg){
        // console.log(msg)
        socket.emit('chat message', msg)
        socket.broadcast.emit('chat message', msg)
    })

   

    socket.on('disconnect', function(){
        console.log('user disconnected')
    })
 
    
})
server.listen(PORT);