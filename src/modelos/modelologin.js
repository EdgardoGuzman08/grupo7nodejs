const  { DataTypes } = require('sequelize');
const db = require('../configuracion/db');
const bcrypt = require('bcrypt');
const Login = db.define(
    'login',
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        usuario: {
            type: DataTypes.STRING(250), 
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password:{
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        activo:{
            type: DataTypes.TINYINT(1),
            allowNull: true,
        },
    },
    {
        tableName: 'Login',
        timestamps: false,
        /*hooks: {
            beforeCreate(usuarios) {
                const hash = bcrypt.hashSync(usuarios.password, 10);
                usuarios.password = hash;
            },
            beforeUpdate(usuarios) {
                if (usuarios.password) {
                    const hash = bcrypt.hashSync(usuarios.password, 10);
                    usuarios.password = hash;
                }
            },
        }*/
    }
);

/*Login.prototype.VerificarContrasena = (con, com) => {
    return bcrypt.compareSync(con, com);
};*/
module.exports = Login;