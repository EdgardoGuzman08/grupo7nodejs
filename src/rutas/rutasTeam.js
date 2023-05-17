const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorTeam = require('../controladores/controladorTeam');
const rutas = Router();
rutas.get('/', controladorTeam.Inicio);
module.exports= rutas;