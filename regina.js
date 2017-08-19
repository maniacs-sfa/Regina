var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var mongo = require('mongodb');
var monk = require('monk');

var dblocation = 'localhost:27017/reginadb';
var db = monk(dblocation); //load reginadb

var regina = express();

regina.use(morgan('combined')) // Active le middleware de logging
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: false }));


/*
* Find
*/
regina
.get('/find/:coll', function(req, res) {
  db.get(req.params.coll)
  .find({})
  .then((docs) => {
    res.json(docs);
  })
})
.get('/find/:coll/:q', function(req, res) {
  db.get(req.params.coll)
  .find(JSON.parse(req.params.q))
  .then((docs) => {
    res.json(docs);
  })
})
.get('/find/:coll/:q/:opt', function(req, res) {
  db.get(req.params.coll)
  .find(JSON.parse(req.params.q),JSON.parse(req.params.opt))
  .then((docs) => {
    res.json(docs);
  })
})
;



/*
* FindOne
*/
regina
.get('/findone/:coll', function(req, res) {
  db.get(req.params.coll)
  .findOne({})
  .then((docs) => {
    res.json(docs);
  })
})
.get('/findone/:coll/:q', function(req, res) {
  db.get(req.params.coll)
  .findOne(JSON.parse(req.params.q))
  .then((docs) => {
    res.json(docs);
  })
})
.get('/findone/:coll/:q/:opt', function(req, res) {
  db.get(req.params.coll)
  .findOne(JSON.parse(req.params.q),JSON.parse(req.params.opt))
  .then((docs) => {
    res.json(docs);
  })
})
;



/*
* Insert
*/
regina
.post('/insert/:coll', function(req, res) {
  db.get(req.params.coll)
  .insert(req.body.docs,req.body.opt === undefined ?{} : req.body.opt)
  .then((docs) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(200, 'OK!');
  })
})
;





regina
.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.send(404, 'Regina : Unknown service !');
});

console.log("Regina is ready to talk with '"+dblocation+"' !");

regina.listen(8080);
