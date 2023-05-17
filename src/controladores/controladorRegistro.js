const Registro = require('../modelos/modelologin');
const { validationResult } = require('express-validator');
const { text } = require('express');
let alert = require('alert'); 

exports.Inicio = (req, res)=>{
    res.render('registro');
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
        const { usuario, password } = req.body;
        console.log(usuario);
        console.log(password);
        var texto="";
        try {
            await Registro.create({ ...req.body })
            .then((data)=>{
                console.log(data);
                //texto="Registro guardado";
                alert("registros guardados");
            })
            .catch((error)=>{
                console.log(error);
                texto= "Dato Guardado Correctamente";
                //alert("error al guardar el dato")
            });
        } catch (error) {
            console.log(error);
            texto="Error al guardar los datos";
            alert("error al guardar los dato")
        }
        res.send(texto);
    }
};

