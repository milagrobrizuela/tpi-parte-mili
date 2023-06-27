const sequelize = require('../models/database.js');

const aeropuertoController = {
  get: async (req, res) => {
    try {
      const data = await sequelize.models.Aeropuertos.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const data = await sequelize.models.Aeropuertos.findByPk(req.params.id);
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
      const data = await sequelize.models.Aeropuertos.create({
        Nombre: req.body.Nombre,
        Ciudad: req.body.Ciudad,
        Pais: req.body.Pais,
        CodigoIATA: req.body.CodigoIATA,
        FechaInauguracion: req.body.FechaInauguracion,
      });
      res.status(201).json(data);
      console.log(req.body);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  put: async (req, res) => {
    try {
      const updated = await sequelize.models.Aeropuertos.update(req.body, { where: { IdAeropuerto: req.params.id } });
      if (updated.length > 0) {
        const data = await sequelize.models.Aeropuertos.findByPk(req.params.id);
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
      const deleted = await sequelize.models.Aeropuertos.destroy({ where: { IdAeropuerto: req.params.id } });
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

module.exports = aeropuertoController;
