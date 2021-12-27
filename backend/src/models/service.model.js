const { Schema, model } = require('mongoose');


const serviceSchema = new Schema(
    {
        cod: {
            type: Number,
            required: [true, 'El codigo es requerido'],
            unique: true
        },
        nombre_servicio: {
            type: String,
            required: [true, 'El nombre del servicio es requerido']
        },
        estado: {
            type: String,
            default: "Disponible"
        },
        duracion: {
            type: Number,
            required: [true, 'La duracion estimada es requerida']
        },
        costo: {
            type: Number,
            required: [true, 'El costo es requerido']
        },
        descripcion: {
            type: String,
            required: [true, 'La descripcion es requerida']
        }
    }, {
    timestamps: true
}
)
module.exports = model('servicios', serviceSchema);