'use strict';

function pruebas(req, res){
    res.status(200).send({
        message: 'Probando una action del controller de usuarios api con NODE y MONGOOSE'
    });
}

module.exports = {
    pruebas
};