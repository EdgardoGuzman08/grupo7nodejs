const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorTestimonial = require('../controladores/controladorTestimonial');
const rutas = Router();
rutas.get('/', controladorTestimonial.Inicio);
module.exports= rutas;