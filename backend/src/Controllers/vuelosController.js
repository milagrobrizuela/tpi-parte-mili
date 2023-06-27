const sequelize = require("../models/database.js");
const { ValidationError } = require("sequelize")
const { Op } = require("sequelize")

const vuelosController = {
  get: async (req, res) => {
    const {filtro} = req.query 
    try {
      if (!filtro || filtro == "Todos") {
      const data = await sequelize.models.Vuelos.findAll();
      res.status(200).json(data)}
      else {
        const data = await sequelize.models.Vuelos.findAll({
          where :{"NombreVuelo": {[Op.startsWith]: filtro}}});
        if (data.length === 0) {
          res.status(404).json({error: "No se encontró ningún vuelo"})
        }
        else {
        res.status(200).json(data)}}
    } 
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      let vuelo = await sequelize.models.Vuelos.findByPk(req.params.idVuelo);
      if (vuelo) res.status(200).json(vuelo);
      else res.status(404).json({ error: `Vuelo ${req.params.idVuelo} no encontrado` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  post: async (req, res) => {
    try {
      const resultado = await sequelize.models.Vuelos.create({
        NombreVuelo: req.body.NombreVuelo,
        FechaDespegue: req.body.FechaDespegue,
        Precio: req.body.Precio,
        IdAvion: req.body.IdAvion,
        IdAeropuertoOrigen: req.body.IdAeropuertoOrigen,
        IdAeropuertoDestino: req.body.IdAeropuertoDestino,
      });
      return res.status(201).json(resultado);
    } catch (err) {
      if (err instanceof ValidationError) {
        return res.status(400).json({ error: err.message });
      } else {
        throw err;
      }
    }
  },
  put: async (req, res) => {
    try {
      const vueloActualizado = await sequelize.models.Vuelos.update(
        {
          NombreVuelo: req.body.NombreVuelo,
          FechaDespegue: req.body.FechaDespegue,
          Precio: req.body.Precio,
          IdAvion: req.body.IdAvion,
          IdAeropuertoOrigen: req.body.IdAeropuertoOrigen,
          IdAeropuertoDestino: req.body.IdAeropuertoDestino,
        },
        {
          where: { IdVuelo: req.params.idVuelo }
        }
      );
      if (vueloActualizado[0] > 0) {
        res.status(200).json({ message: `Vuelo ${req.params.idVuelo} Actualizado` });
      } else {
        res.status(404).json({ error: `No se encontró el vuelo ${req.params.idVuelo}` });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleted = await sequelize.models.Vuelos.destroy({ where: { IdVuelo: req.params.idVuelo } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: `Vuelo ${req.params.idVuelo} no encontrado` });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = vuelosController;