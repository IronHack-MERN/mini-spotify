'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mini-spotify', (err) =>{
    if(err){
        throw err;
    }else{
        console.log('Connection to the Mini-Spotify DB is okey!!!');
    }
});