
const express = require("express");
const router = require("./src/routes/AeropuertoRouter.js");
const PilotosRouter = require("./src/routes/pilotos.router.js");
const vuelosRouter = require("./src/routes/vuelosrouter.js");
const avionesRouter = require('./src/routes/avionesRouter.js')
const pasajerosRouter = require('./src/routes/pasajerosRouter.js');
const cors = require("cors")

const app = express(); 

app.use(express.json()); 
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/aeropuertos', router);
app.use("/pilotos", PilotosRouter);
app.use('/vuelos', vuelosRouter);
app.use('/aviones', avionesRouter);
app.use('/pasajeros', pasajerosRouter);

if (!module.parent) {
  const port = process.env.PORT || 3001;
  app.locals.fechaInicio = new Date();
  app.listen(port, () => {
    console.log(`Sitio escuchando en el puerto ${port}`);
  });
}

module.exports = app;



