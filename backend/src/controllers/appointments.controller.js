const citasCtrl = {};
const citas = require('../models/appointment.model');
const usuarios = require('../models/user.model');
const citaSchema = require('../models/appointment.model');

citasCtrl.getAppointments = async (req, res) => {
    try {
        const cita = await citas.find();
        res.json(cita);
    } catch (error) {
        res.json({ message: error });
    }
};

citasCtrl.createAppointment = async (req, res) => {
    try {
        const newAppointment = await citaSchema(req.body);
        //const newUser = new usuarios(userSchema(req.body));
        await newAppointment.save();
        res.json("¡Cita creada con exito!");
    } catch (error) {
        res.json({ error });
    }
};

citasCtrl.getAppointment = async (req, res) => {
    try {
        const appointment = await citas.findById(req.params.id);
        res.json(appointment);
    } catch (error) {
        res.json({ message: error });
    }
}

citasCtrl.deleteAppointment = async (req, res) => {
    try {
        await citas.findByIdAndDelete(req.params.id)
        res.json('Cita eliminado con exito');
    } catch (error) {
        res.json({ error });
    }
}

citasCtrl.updateAppointment = async (req, res) => {
    try {
        const { estado_servicio, nombre_servicio, placa, fecha, hora, estado_vehiculo, nombre_mecanico, nombre_cliente, comentario } = req.body;
        await citas.findByIdAndUpdate(req.params.id, {
            estado_servicio,
            nombre_servicio,
            placa,
            fecha,
            hora,
            estado_vehiculo,
            nombre_mecanico,
            nombre_cliente,
            comentario
        });
        res.json('¡Cita actualizada con exito!');
    } catch (error) {
        res.json({ error });
    }
}

citasCtrl.getAssigned = async (req, res) => {
    try {
        const user = await usuarios.findById(req.params.id);
        //const assigned = await citas.find({ mechanic })
        const mechanic = user.nombre
        const assigned = await citas.find({ nombre_mecanico: mechanic })
        res.json(assigned)
    } catch (error) {
        
    }
}

citasCtrl.getComplete = async (req, res) => {
    try {
        const report = await citas.find({ estado_servicio: "Completado" })
        res.json(report)
    } catch (error) {
        res.json({error})
    }
}

citasCtrl.getPending = async (req, res) =>  {
    try {
        const report = await citas.find({ estado_servicio: "Pendiente" })
        res.json(report)
    } catch (error) {
        res.json({error})
    }
}
citasCtrl.getRequested = async (req, res) => {
    try {
        const request = await citas.find()
        let tipo=[]
        request.map((item) => {tipo.push(item.nombre_servicio)})
        res.json(tipo)
    } catch (error) {
        res.json({error})
    }
}

module.exports = citasCtrl;