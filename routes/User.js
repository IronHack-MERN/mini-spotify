'use strict'

const express = require('express');
const UserController = require('../controllers/User');

const api = express.Router();

api.get('/test-controller', UserController.pruebas);

module.exports = api;