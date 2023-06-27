const Sequelize = require("sequelize")

const AeropuertosModelo = require("./AeropuertoModels.js");
const PilotosModelo = require("./pilotos.js");
const VuelosModelo = require("./vuelos.js");
const Aviones = require('./aviones.js');
const PasajeroModels = require('./modeloPasajeros.js');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data/aerolinea.sqlite'
    })
const Opciones = {
        timestamps: false
    }

sequelize.define(
    'Aeropuertos',
    AeropuertosModelo, Opciones
);
    
sequelize.define(
    'Pilotos',
    PilotosModelo, Opciones
);

sequelize.define(
    'Vuelos',
    VuelosModelo, Opciones
);

sequelize.define(
    'Aviones', 
    Aviones, Opciones
);
    
sequelize.define(
    'Pasajeros', 
    PasajeroModels, Opciones
);

async function sincronizarBD() {
    try {
      await sequelize.sync();
      console.log('Sincronización de BD ok', sequelize.models);
    } catch (err) {
      console.error('Sincronización de BD con error', err.message);
  }
};
  
sincronizarBD();

module.exports = sequelize;

