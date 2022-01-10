const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments, updateAppointment, getAppointment, deleteAppointment, getAssigned, getComplete, getPending, getRequested } = require('../controllers/appointments.controller')
const verifyToken = require('../middlewares/verifyToken')
const verifyRol = require('../middlewares/verifyRol')

//Rutas para las citas

router.get('/assigned/:id', [verifyToken,verifyRol.Mecanico], getAssigned)
router.get('/completed',getComplete)
router.get('/pending',getPending)
router.get('/requested', getRequested)
router.get('/get_appointments', [verifyToken,verifyRol.Planta], getAppointments)
router.get('/get_appointment/:id', [verifyToken,verifyRol.Planta],getAppointment)
router.post('/create_appointment', [verifyToken,verifyRol.Planta], createAppointment)
router.put('/update_appointment/:id', [verifyToken,verifyRol.PlantaOrMecanico], updateAppointment)
router.delete('/delete_appointment/:id', [verifyToken,verifyRol.Planta],deleteAppointment)

module.exports= router;