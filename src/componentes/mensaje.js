const mensaje = (msj,estado,data,res)=>{
    var mensajes={
        msj:msj,
        data:data
    };
    res.setHeader("Content-Type","aplication/json");
    res.statusCode=estado;
    res.json(mensajes);
};
module.exports=mensaje;