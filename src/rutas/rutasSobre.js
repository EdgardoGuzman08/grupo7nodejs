const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorSobre = require('../controladores/controladorSobre');
const rutas = Router();
rutas.get('/', controladorSobre.Inicio);
module.exports= rutas;