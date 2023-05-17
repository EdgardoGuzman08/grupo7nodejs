const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorReserva= require('../controladores/controladorReserva');
const rutas = Router();
rutas.get('/', controladorReserva.Inicio);
module.exports= rutas;