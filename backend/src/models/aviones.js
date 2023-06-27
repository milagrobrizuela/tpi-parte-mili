const { Sequelize } = require('sequelize');

const Aviones = {
    ID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
        
    },
    Modelo: {
        type: Sequelize.STRING
    },
    Fecha: {
        type: Sequelize.DATEONLY
    },
    CapacidadDeCarga: {
        type: Sequelize.INTEGER
    },
    CapacidadDePasajeros: {
        type: Sequelize.INTEGER
    },
    Fabricante: {
        type: Sequelize.STRING
    }
};

module.exports = Aviones;