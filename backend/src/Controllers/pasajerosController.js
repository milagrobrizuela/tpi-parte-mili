const sequelize = require('../models/database.js')

const pasajeroController = {
  
  get: async (req, res) => {
    try {
      const data = await sequelize.models.Pasajeros.findAll();
      res.status(200).json(data);
    } 
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      
      const data = await sequelize.models.Pasajeros.findByPk(req.params.id);
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
      
      const data = await sequelize.models.Pasajeros.create(req.body);
      res.status(201).json(data);
      
    } catch (error) {
      
      res.status(500).json({ error: error.message });
    }
  },
  
  put: async (req, res) => {
    try {
      
      const updated = await sequelize.models.Pasajeros.update(req.body, { where: { IdPasajero: req.params.id } });
      if (updated.length > 0) {
       
        const data = await sequelize.models.Pasajeros.findByPk(req.params.id);
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
      
      const deleted = await sequelize.models.Pasajeros.destroy({ where: { IdPasajero: req.params.id } });
      if (deleted) { 
        
        res.status(204).end();
      } else {
        
        res.status(404).json({ error: 'No se encontró el registro' });
      }
    } catch (error) {
      
      res.status(500).json({ error: error.message });
    }
  }
  

}

module.exports = pasajeroController;

