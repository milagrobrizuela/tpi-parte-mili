const sequelize = require("../models/database.js");
const { Op } = require("sequelize");

const PilotosControllers = {
  get: async (req, res) => {
    try {
      const data = await sequelize.models.Pilotos.findAll();
      res.status(200).json(data);
    } catch (error) { 
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const data = await sequelize.models.Pilotos.findByPk(req.params.id);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "No se encontró el registro." });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getByNacionalidad: async (req, res) => {
    try {
      const { filtro } = req.query;
      const data = await sequelize.models.Pilotos.findAll({
        where: {Nacionalidad: {[Op.like]: filtro}}
      });
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "No se encontró el registro." });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  
  post: async (req, res) => {
    try {
      const data = await sequelize.models.Pilotos.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
    
  put: async (req, res) => {
    try {
      const updated = await sequelize.models.Pilotos.update(req.body, { where: { Id: req.params.id } });
      if (updated.length > 0) {
        const data = await sequelize.models.Pilotos.findByPk(req.params.id);
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "No se encontró el registro" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  
  delete: async (req, res) => {
    try {
      const deleted = await sequelize.models.Pilotos.destroy({ where: { Id: req.params.id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "No se encontró el registro." });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = PilotosControllers;
