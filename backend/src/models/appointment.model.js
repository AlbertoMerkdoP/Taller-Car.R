const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema(
    {
        estado_servicio:{
            type:String,
            required:[true,'El estado del servicio es requerido']
        },
        nombre_servicio:{
            type:String,
            required:[true,'El tipo de servicio es requerido']
        },
        placa:{
            type:String,
            required:[true,'La placa del vehiculo es requerida']
        },
        fecha:{
            type:String,
            required:[true,'La fecha es requerida']
        },
        hora:{
            type:String,
            required:[true,'La hora es requerida']
        },
        estado_vehiculo:{
            type:String,
            required:[true,'El estado del vehiculo es requerido']
        },
        nombre_mecanico:{
            type:String,
            required:[true,'El mecanico encargado es requerido']
        },
        nombre_cliente:{
            type:String,
            required:[true,'El nombre del cliente es requerido']
        },
        comentario:String
    },
    {
        timestamps: true
    }
)
module.exports = model('citas', appointmentSchema);