const { Router } = require('express');
const { body, query} = require('express-validator');
const controladorContact = require('../controladores/controladorContact');
const rutas = Router();
rutas.get('/', controladorContact.Inicio);
rutas.post('/',
body('name').notEmpty().withMessage('Debe escribir su nombre')
.isLength({min: 3, max:50}).withMessage('Debe escribir su nombre minimo de 3 letras'),
controladorContact.Guardar);
module.exports= rutas;