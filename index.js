'use strict';

var mongoose = require('mongoose');
var app = require('./app');

// eslint-disable-next-line no-undef
var port = process.env.port || 3001;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mini-spotify', (err) =>{
    if(err){
        throw err;
    }else{
        console.log('Connection to the Mini-Spotify DB is okey!!!');
        // configuro que el puerto 
        app.listen(port, function(){
            console.log(`servidor de apirest de musica escuchando en http://localhost: ${port}`);
        })
    }
});