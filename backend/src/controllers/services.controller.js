const serviciosCtrl = {};
const servicios = require('../models/service.model');
const serviceSchema = require('../models/service.model');

serviciosCtrl.getServices = async (req, res) => {
    try {
        const services = await servicios.find();
        res.json(services);
    } catch (error) {
        res.json({ message: error });
    }
};

serviciosCtrl.createService = async (req, res) => {
    try {
        const newService = await serviceSchema(req.body);
        await newService.save();
        res.json("¡El servicio ha sido creado con exito!");
    } catch (error) {
        if (error.code === 11000) {
            res.json("Ya existe un servicio con este codigo")
        } else {
            res.json({ error });
        }
    }
};

serviciosCtrl.getService = async (req, res) => {
    try {
        const service = await servicios.findById(req.params.id);
        res.json(service);
    } catch (error) {
        res.json({ message: error });
    }
}

serviciosCtrl.deleteService = async (req, res) => {
    try {
        await servicios.findByIdAndDelete(req.params.id)
        res.json('Servicio eliminado');
    } catch (error) {
        res.json({ error });
    }
}

serviciosCtrl.updateService = async (req, res) => {
    try {
        const { nombre_servicio, duracion, costo, descripcion, estado } = req.body;
        await servicios.findByIdAndUpdate(req.params.id, {
            nombre_servicio,
            estado,
            duracion,
            costo,
            descripcion,
        });
        res.json('Servicio actualizado');
    } catch (error) {
        res.json({ error });
    }
}

serviciosCtrl.getAvailableServices = async (req, res) => {
    try {
        const service = await servicios.find({ estado: "Disponible" })
        res.json(service)
    } catch (error) {
        res, json({ error })
    }
}

module.exports = serviciosCtrl;