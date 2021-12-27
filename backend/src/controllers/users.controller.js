const usuariosCtrl = {};
const usuarios = require('../models/user.model');
const { encrypt, compare } = require('../db/encryptPassword');
const userSchema = require('../models/user.model');

usuariosCtrl.getUsers = async (req, res) => {
    try {
        const users = await usuarios.find();
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    }
};

usuariosCtrl.createUser = async (req, res) => {
    try {
        const { nombre, telefono, tipo_documento,documento,fecha_nacimiento, rol, estado, usuario, pwd } = req.body
        const passwordHash = await encrypt(pwd)
        const registerUser = await userSchema.create({
            nombre,
            telefono,
            tipo_documento,
            documento,
            fecha_nacimiento,
            rol,
            estado,
            usuario,
            pwd: passwordHash
        })
        res.json("¡Usuario creado con exito!");

    } catch (error) {
        if (error.code === 11000) {
            res.json("Ya existe un usuario con este correo electronico y/o numero de documento")
        } else {
            res.json({ error });
        }
    }
};

usuariosCtrl.getUser = async (req, res) => {
    try {
        const user = await usuarios.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
}

usuariosCtrl.deleteUser = async (req, res) => {
    try {
        await usuarios.findByIdAndDelete(req.params.id)
        res.json('Usuario eliminado con exito');
    } catch (error) {
        res.json({ error });
    }
}

usuariosCtrl.updateUser = async (req, res) => {
    try {
        const { nombre, telefono, tipo_documento,documento,fecha_nacimiento, rol, estado } = req.body;
        const updateUser = await userSchema.findByIdAndUpdate(req.params.id, {
            nombre,
            telefono,
            tipo_documento,
            documento,
            fecha_nacimiento,
            rol,
            estado
        });
        res.json('¡Usuario actualizado con exito!');
    } catch (error) {
        res.json({ error });
    }
}

usuariosCtrl.loginUser = async (req, res) => {

    try {
        const { usuario, pwd } = req.body

        const user = await userSchema.findOne({ usuario })

        if (!user) {
            res.json([])
            return
        }

        const checkPassword = await compare(pwd, user.pwd)

        if (checkPassword) {
            res.json([user])
            return
        }

        if (!checkPassword) {
            res.json([])
            return
        }

    } catch (e) {
        res.json({ message: e })
    }
}

usuariosCtrl.getMechanics = async (req, res) => {
    try {
        const user = await usuarios.find({ rol: "Mecanico", estado: "Activo" });
        res.json(user)
    } catch (error) {
        res.json({ error })
    }
}

module.exports = usuariosCtrl;