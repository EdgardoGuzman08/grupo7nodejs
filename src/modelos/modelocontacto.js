const  { DataTypes } = require('sequelize');
const db = require('../configuracion/db');
const bcrypt = require('bcrypt');
const Contacto = db.define(
    'contacto',
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(250), 
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        subject:{
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        message:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        tableName: 'Contacto',
        timestamps: false,
    }
);

module.exports = Contacto;