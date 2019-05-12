var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
/*var parsers = require('./routes/parsers');
var parserModel = require('./models/parserModel');
*//*
var my_parser = new parserModel({
    PARSER_TYPE: 'CVS',
    CONFIG_NAME: 'PARSER_CFG_MSS',
    VERSION: '1.1',
    RECORD_TYPE_VALIDATION: false,
    IGNORE_HEADER: true,
    INPUT_DESCRIPTION:
    {
        FIELDS:[
        {
            NAME:"record_type",
            TYPE:"char",
            LONG:2
        },
        {
            NAME:"calling_number",
            TYPE:"string"
        },
        {
            NAME:"called_number",
            TYPE:"string"
        },
        {
            NAME:"msisdn",
            TYPE:"integer"
        },
        {
            NAME:"file_seq_name",
            TYPE:"integer"
        },
        {
            NAME:"call_reference",
            TYPE:"integer"
        },
        {
            NAME:"dialled_digits",
            TYPE:"integer"
        },
        {
            NAME:"called_msrn",
            TYPE:"double"
        }
    ]}
});
*/
//Mongo Config
/*var uri ='mongodb://valquiria:val2019@cluster0-shard-00-00-rshdw.mongodb.net:27017,' +
    'cluster0-shard-00-01-rshdw.mongodb.net:27017,' +
    'cluster0-shard-00-02-rshdw.mongodb.net:27017/' +
    'test?ssl=true&replicaSet=Cluster0-shard-0' +
    '&authSource=admin&retryWrites=true';
*/
var uri = 'mongodb+srv://m001-student:m001-mongodb-basics@cluster0-xolhc.mongodb.net/test?retryWrites=true';

mongoose.connect(uri, function (err){
    if (err) throw err;
    console.log('Successfully connected to mongo DB Cluster');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000,"0.0.0.0",()=>{
    console.log('Escuchando en el puerto 3000');
});  


module.exports = app;
