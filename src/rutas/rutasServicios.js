const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorServicios = require('../controladores/controladorServicios');
const rutas = Router();
rutas.get('/', controladorServicios.Inicio);
module.exports= rutas;