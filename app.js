'use strict'

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// cargar rutas
const userRouter = require('./routes/User')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cabeceras http

// Rutas base
// cualquier solicitud a nuestra api tendrá un /api delante
app.use('/api', userRouter);

module.exports = app;