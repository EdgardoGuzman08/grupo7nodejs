
const Usuario = require('./modelologin');
const Contact = require('./modelocontacto');

exports.CrearModelos = async () =>{
    

    await Usuario.sync().then(()=>{
        console.log('Modelo Usuario Creado correctamente');
    })
    .catch((err) =>{
        console.log('Error al crear el modelo usuario');
    })

    await Contact.sync().then(()=>{
        console.log('Modelo Contacto Creado correctamente');
    })
    .catch((err) =>{
        console.log('Error al crear el modelo contacto');
    })
    
};