var express = require('express')
var app = express.Router();

var Game = require('./model');

var game = new Game();

module.exports = app

    app.get('/quotes',  (req, res) => res.send(["A quote"]))