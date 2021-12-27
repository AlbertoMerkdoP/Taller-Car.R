const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Nombre completo es requerido']
        },
        telefono: {
            type: Number,
            required: [true, 'Numero de telefono es requerido']
        },
        tipo_documento: {
            type: String,
            required: [true, 'Tipo de identificacion es requerido']
        },
        documento: {
            type: Number,
            unique: true,
            required: [true, 'Numero de identificacion es requerido']
        },
        fecha_nacimiento: {
            type: String,
            required: [true, 'Fecha de nacimiento es requerida']
        },
        rol: {
            type: String,
            required: [true, 'Tipo de usuario es requerido']
        },
        estado: {
            type: String,
            default: "Activo"
        },
        usuario: {
            type: String,
            unique: true,
            required: [true, 'Usuario es requerido']
        },
        pwd: {
            type: String,
            required: [true, 'Contraseña es requerida'],
            min: [8, 'Longitud minima de 8 caracteres']
        }
    }, {
    timestamps: true
}
);
module.exports = model('usuarios', userSchema);