const express = require('express');
const router = express.Router();
const { getServices, createService, getService, deleteService, updateService, getAvailableServices } = require('../controllers/services.controller');
const verifyToken = require('../middlewares/verifyToken')
const verifyRol = require('../middlewares/verifyRol')

//Rutas para los servicios

router.get('/get_services', [verifyToken,verifyRol.Planta], getServices)
router.get('/get_service/:id', [verifyToken,verifyRol.Planta],getService)
router.get('/get_availableservices', verifyToken, getAvailableServices)
router.post('/new_service', [verifyToken,verifyRol.Planta], createService)
router.put('/update_service/:id', [verifyToken,verifyRol.Planta], updateService)
router.delete('/delete_service/:id', [verifyToken,verifyRol.Planta],deleteService)

module.exports= router;