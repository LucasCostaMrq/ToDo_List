var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('./configURL')

//routes
var indexRouter = require('./routes/index');
var tasksRouter = require('./routes/tasks');

var app = express();

const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require("cors");

require('dotenv').config();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//indexing routes
app.use('/', indexRouter);
app.use('/tasks', tasksRouter);

//conexão com o BD
mongoose.connect(config.MONGO_URI)
.then(()=> console.log('Conectado ao DB'))
.catch(err => {console.log(err.message)});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT,'0.0.0.0', ()=> console.log(`Servidor rodando na porta ${PORT}`))

module.exports = app;
