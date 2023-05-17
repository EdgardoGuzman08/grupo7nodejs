const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const session = require('express-session');
require('dotenv').config();
const db = require('./configuracion/db');
const Modelos = require('./modelos')

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));
app.use('/public', express.static(path.join(__dirname, 'public/')));
app.use(morgan("common"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/*cookie login */
app.use(session({ 
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000, httpOnly: true}
}))

/*rutas*/
app.use('/app/', require('./rutas/index'));
app.use('/app/entre', require('./rutas/rutasEntre'));
app.use('/app/registro', require('./rutas/rutasRegistro'));
app.use('/app/sobre', require('./rutas/rutasSobre'));
app.use('/app/contact', require('./rutas/rutasContact'));
app.use('/app/reserva', require('./rutas/rutasReserva'));
app.use('/app/servicios', require('./rutas/rutasServicios'));
app.use('/app/team', require('./rutas/rutasTeam'));
app.use('/app/testimonial', require('./rutas/rutasTestimonial'));


/* puerto que usamos*/
app.listen(process.env.port, () =>{
    console.log('Servidor agencia de viaje iniciado en el puerto ' + process.env.port);
    db.authenticate().then(()=>{
        console.log('se ha establecido la conexion a la bd');
        Modelos.CrearModelos();
    })
    .catch((error)=>{
        console.log('error al conectar la bd');
        console.error(error);
    })
});



