var express = require('express');
const notesRouter = require('./note');
const ethnicRouter = require('./ethnic');
const professionRouter = require('./profession');
//var router = express.Router();

function route(app){
    app.use('/notes', notesRouter);
    app.use('/api/feature/v1/ethnic', ethnicRouter);
    app.use('/api/feature/v1/profession', professionRouter);

    /* GET home page. */
    app.use('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });
    
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });
}

module.exports = route;
