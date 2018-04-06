var express = require('express')
var app = express.Router();

var Game = require('./model');

var game = new Game();

module.exports = app
    .get('/quotes',  (req, res) => res.send(game.GetQuotes()))
    .get('/state',(req,res) => res.send(game))
    .post('/picture', (req, res) => res.send(game.FlipPicture()))