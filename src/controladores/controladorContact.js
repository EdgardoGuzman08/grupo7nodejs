const Contact = require('../modelos/modelocontacto');
const { validationResult } = require('express-validator');
const { text } = require('express');
const { emit } = require('nodemon');

exports.Inicio = (req, res)=>{
    res.render('contact');
}

exports.Guardar = async (req, res) =>{
    console.log(req.body)
    const validacion = validationResult(req);
    if(validacion.errors.length>0){
        let mensaje='';
        validacion.errors.forEach(element => {
            console.log(element);
            mensaje+=element.msg + '. ';
        });
        res.send(mensaje);
    }
    else{
        const { name, email, subject, message} = req.body;
        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(message);
        var texto="";
        try {
            await Contact.create({ ...req.body })
            .then((data)=>{
                console.log(data);
                texto="Registro guardado";
            })
            .catch((error)=>{
                console.log(error);
                texto= "Error al guardar los datos";
            });
        } catch (error) {
            console.log(error);
            texto="Error al guardar los datos";
        }
        res.send(texto);
    }
};