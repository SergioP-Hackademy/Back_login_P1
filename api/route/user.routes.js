const express = require('express');

const usuario = require('../controller/user.controllers');
const auth = require('../middleware/authentication');
const emptyBodycheck = require('../middleware/emptyBody');

const routes = express.Router();

// create a user
routes.post('/', emptyBodycheck, usuario.register);

routes.put('/tierUp', emptyBodycheck, auth.authenticateToken, auth.authenticateAdmin, usuario.tierUp);

routes.put('/', emptyBodycheck, auth.authenticateToken, usuario.updateUser);

routes.delete('/', auth.authenticateToken, auth.authenticateAdmin, usuario.defuse);

routes.get('/', auth.authenticateToken, usuario.findOne);

module.exports = routes;
