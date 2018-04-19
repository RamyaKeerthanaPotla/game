const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const simple = require('./simpleController');
const game = require('./game/controller');

const app = express()

const servername = "localhost";
const port = 8080;



app
     .use(bodyParser.json())
     .use(bodyParser.urlencoded({ extended: false }))
     .use('/', (req,res,next) =>{
         res.header("Access-Control-Allow-Origin", "*");
         res.header("Access-Control-Allow-Headers", "*");
         next();
     })
     .use('/', express.static(path.join(__dirname, "../dist/")))
     .use('/simple', simple)
     .use('/game', game)
     .use('/', (req, res, next) => {
         res.sendFile(path.join(__dirname, "../dist/index.html"));
     })
     .listen(port);


console.log("running on http://" + servername + ":" + port)



/*var express = require('express')
var app = express() 

const servername="localhost";
const port=3000;

const simple=require("./simpleController");


app.use(simple).listen(port);

console.log("running on http://"+servername+":" + port)

*/




/* const http = require('http');

//create a server object:
const server = http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});

server.listen(8080); //the server object listens on port 8080

console.log("Listening on http://localhost:8080");

*/

