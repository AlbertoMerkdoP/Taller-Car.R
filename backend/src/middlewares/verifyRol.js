const usuarios = require('../models/user.model');
const userSchema = require('../models/user.model');

const SuperAdministrador = async (req, res, next) => {
    try {
        const user = await usuarios.findById(req.userId);

        if(user.rol === "SuperAdministrador") {
            next()
            return
        } else {
            return res.status(401).json({ message: "Rol de SuperAdministrador requerido" });
        }
    } catch (error) {
        res.json({ message: error })
    }
}

const Administrador = async (req, res, next) => {
    try {
        const user = await usuarios.findById(req.userId);

        if (user.rol === "Administrador" || user.rol === "SuperAdministrador") {
            next()
            return
        } else {
            return res.status(401).json({ message: "Rol de administrador requerido" });
        }

    } catch (error) {
        res.json({ message: error });
    }
}

const Mecanico = async (req, res, next) => {
    try {
        const user = await usuarios.findById(req.userId);

        if (user.rol === "Mecanico"  || user.rol === "SuperAdministrador") {
            next()
            return
        } else {
            return res.status(401).json({ message: "Rol de mecanico requerido" });
        }
        
    } catch (error) {
        res.json({ message: error });
    }
}

const Planta = async (req, res, next) => {
    try {
        const user = await usuarios.findById(req.userId);

        if (user.rol === "Planta" || user.rol === "SuperAdministrador") {
            next()
            return
        } else {
            return res.status(401).json({ message: "Rol de usuario de planta requerido" });
        }
        
    } catch (error) {
        res.json({ message: error });
    }
}

const PlantaOrMecanico = async (req, res, next) => {
    try {
        const user = await usuarios.findById(req.userId);

        if (user.rol === "Planta" || user.rol === "Mecanico" || user.rol === "SuperAdministrador") {
            next()
            return
        } else {
            return res.status(401).json({ message: "Rol de usuario de planta o mecanico requerido" });
        }
        
    } catch (error) {
        res.json({ message: error });
    }
}
module.exports = { SuperAdministrador, Administrador, Mecanico, Planta, PlantaOrMecanico }