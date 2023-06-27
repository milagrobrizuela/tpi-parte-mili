const DataTypes = require("sequelize")

const PilotosAtributos = {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    
    Nombre: {
        type: DataTypes.STRING
    },

    Apellido: {
        type: DataTypes.STRING
    },

    FechaNacimiento: {
        type: DataTypes.DATEONLY
    },

    Nacionalidad: {
        type: DataTypes.STRING
    },

    IdVuelo: {
        type: DataTypes.INTEGER
    }
}

module.exports = PilotosAtributos;
