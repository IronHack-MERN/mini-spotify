'use strict'

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// cargar rutas
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/pruebas', function(req, res){
    res.status(200).send({message: 'Welcome to the api rest de MiniSpotify by helen helen'})
});

module.exports = app;