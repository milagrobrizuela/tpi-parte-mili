const DataTypes = require("sequelize");
//import { DataTypes } from "sequelize";

const AeropuertosAtributos = {
    IdAeropuerto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: DataTypes.STRING,
    },
    Ciudad: {
        type: DataTypes.STRING,
    },
    Pais: {
        type: DataTypes.STRING,
    },
    CodigoIATA: {
        type: DataTypes.STRING,
    },
    FechaInauguracion: {
        type: DataTypes.DATEONLY,
        },
}


module.exports = AeropuertosAtributos;
