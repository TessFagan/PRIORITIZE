const express = require("express");
const session = require('express-session');
const path = require("path");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const routes = require("./routes/apiroutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// MIDDLEWARE MORGAN
app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())


// Connect to the Mongo DB
mongoose.Promise = global.Promise

//your local database url, 27017 is the default mongoDB port
let uri = 'mongodb://localhost:27017/simple-PRIORITIZE'

if (process.env.NODE_ENV === "production") {
  // uri = 'mongodb://heroku_vwt7t66n:fcj39god2coilujrt2itvevrrp@ds217548.mlab.com:17548/heroku_vwt7t66n'
  uri = 'mongodb://heroku_dr05z7cx:oe0etbq06g54jq1rg0odtfsmhb@ds217548.mlab.com:17548/heroku_dr05z7cx'
}

mongoose.connect(uri).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log('Connected to Mongo');

  },
  err => {
    /** handle initial connection error */
    console.log('error connecting to Mongo: ')
    console.log(err);

  }
);
var db = mongoose.connection;


// Sessions
app.use(
  session({
    secret: 'tessisamazing', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: db }),
    resave: false, //required
    saveUninitialized: false //required
  })
)


// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Define API routes here
app.use(routes)

// Send every other request to the React app
// Define any API routes before this runs

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
