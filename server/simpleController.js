var express = require('express')
var app = express.Router();


module.exports = app
    app.use(function(req,res,next){
        res.write('This is provided by Ramya Keerthana at new paltz.edu\r\n');
        next();
    })
    .get('/hello', function (req, res) {
        res.write(' world');
        res.end();
    })

    .get('/goodbye', function (req, res) {
        res.write('New Paltz');
        res.end();
    })
                                          