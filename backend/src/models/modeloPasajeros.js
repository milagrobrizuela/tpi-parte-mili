const DataTypes = require('sequelize')

const PasajerosAtributos = {
    IdPasajero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'El Nombre es requerido.'
            },
        },
    },
    Apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'El apellido es requerido.'
            },
        },
    },
    FechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "La Fecha es necesaria.",
            }
        }
    },
    IdVuelo:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'El id del vuelo es requerido.'
    }}
}}


module.exports = PasajerosAtributos

