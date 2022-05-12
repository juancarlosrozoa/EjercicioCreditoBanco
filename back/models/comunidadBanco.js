const { model } = require("mongoose");
const mongoose = require("../db/conexion");

const Schema = mongoose.Schema;

const modelSchem = new Schema({
    nombre:String,
    tipoCedula:String,
    numeroCedula:Number,
    fechaExpedicion:String,
    valorIngresos:Number,
    valorEgresos:Number,
    correo:String,
    pass:String,
    tipoUsuario:String,
    genero: String,
    direccion: String,
    telefono: String
});

const consulta = mongoose.model("banco_comunidad",modelSchem);

module.exports = consulta;