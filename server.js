var express = require('express');
var MessageQueue = require('mongoose-pubsub');
var messenger = new MessageQueue();
var channelName = 'news';

//channel names are used as filters 


var app = express();
var port = process.env.PORT || 8081;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var configDB = require('./config/database.js');




require('./config/passport')(passport);

mongoose.connect(configDB.url);

app.use(morgan('dev'));
app.use(bodyParser());
app.use(cookieParser());

app.set('view engine', 'ejs');

app.use(session({ secret: "My name is Paul"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app, passport);


// connect() begins "tailing" the collection 


app.listen(port);
console.log("The magic is happening on port " + port);