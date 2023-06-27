const { Op } = require('sequelize');
const sequelize = require('../models/database.js');

const avionesController = {
  get: async (req, res) => {
    try {
      const data = await sequelize.models.Aviones.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const data = await sequelize.models.Aviones.findByPk(req.params.id);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'No se encontró el registro' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getByFabricante: async (req, res) => {
    try {
      const fabricante = req.query.fabricante;
      const data = await sequelize.models.Aviones.findAll({
        where: {fabricante:{
                            [Op.like]: fabricante
                          }
                }
              });
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'No se encontró el registro' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  post: async (req, res) => {
    try {
      const data = await sequelize.models.Aviones.create({
        ID: req.body.ID,
        Modelo: req.body.Modelo,
        Fecha: req.body.Fecha,
        CapacidadDeCarga: req.body.CapacidadDeCarga,
        CapacidadDePasajeros: req.body.CapacidadDePasajeros,
        Fabricante: req.body.Fabricante,
      });
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
put: async (req, res) => {
    try {
      const updated = await sequelize.models.Aviones.update(req.body, { where: { ID: req.params.id } });
      if (updated.length > 0) {
        const data = await sequelize.models.Aviones.findByPk(req.params.id);
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'No se encontró el registro' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await sequelize.models.Aviones.destroy({ where: { ID: req.params.id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'No se encontró el registro' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = avionesController;