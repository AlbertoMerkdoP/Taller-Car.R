const express = require('express');
const router = express.Router();
const { getServices, createService, getService, deleteService, updateService, getAvailableServices } = require('../controllers/services.controller');

//Rutas para los servicios

router.get('/get_services', getServices)
router.get('/get_service/:id',getService)
router.get('/get_availableservices', getAvailableServices)
router.post('/new_service', createService)
router.put('/update_service/:id', updateService)
router.delete('/delete_service/:id',deleteService)

module.exports= router;