const sequelize = require('sequelize');
const db = new sequelize(
    process.env.nombrebd,
    process.env.usuariobd,
    process.env.contrasenabd,
    {
        host: process.env.ipdbd,
        dialect: 'mysql',
        port: 3306,
    }
);
module.exports = db;