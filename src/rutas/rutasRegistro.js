const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorRegistro = require('../controladores/controladorRegistro');

const rutas = Router();

rutas.get('/', controladorRegistro.Inicio);
rutas.post('/guardar', controladorRegistro.Guardar);
module.exports= rutas;