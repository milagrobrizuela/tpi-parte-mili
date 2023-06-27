const DataTypes = require("sequelize")

const VuelosAtributos = {
    IdVuelo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreVuelo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Debes ingresar el nombre del vuelo",
            },
            min: {
                arg: 5,
                msg: 'El Nombre del vuelo debe contener al menos 5 caracteres.'
            },
        },
    },
    FechaDespegue: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Desbes ingresar la fecha de despegue del vuelo",
            }
        }
    },
    Precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Debes ingresar el precio del vuelo",
            }
        }
    },
    IdAvion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Debes ingresar el id del avion del vuelo",
            }
        }
    },
    IdAeropuertoOrigen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Debes ingresar el id del aeropuerto del origen",
            }
        }
    },
    IdAeropuertoDestino: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Debes ingresar el id del aeropuerto del destino",
            }
        }
    }
}

module.exports = VuelosAtributos
