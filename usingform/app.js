var express = require('express');
var pug = require('pug');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require ('body-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var formRouter = require('./routes/forms');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/forms',formRouter);

app.post('/',function(req,res){
var username = req.body.txtUsername;
var password = req.body.txtPassword;

var detail= '<a href="/"> Home </a>' + '<br/>' + 
'Hello: ' + username + ' ' + password;
res.send(detail);
});



module.exports = app;
