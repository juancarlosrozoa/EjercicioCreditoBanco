const { model } = require("mongoose");
const mongoose = require("../db/conexion");

const Schema = mongoose.Schema;

const modelSchem = new Schema({
    nombre:String,
    tipoIdentificacion:String,
    numeroIdentificacion:Number,
    fechaSolicitud:Date,
    valorSolicitado:Number,
    fechaAprobacion:Date,
    valorAprobado:Number,
    fechaRechazo:Date,
    mesesCredito:Number,
    fechaFinaliacion:Date,
    estadoSolicitud:String,
});

const consulta = mongoose.model("banco_cliente",modelSchem);

module.exports = consulta;