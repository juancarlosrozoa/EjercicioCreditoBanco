const express=require("express");
const rutas=express.Router();

const consulta=require("../models/clienteBanco")


rutas.get("/obteniendoDatos", async (req,res)=>{
    const datos = await consulta.find();
    res.json(datos);
})

rutas.post("/crear", async(req,res)=>{
    let body = req.body
    let usuario = new consulta(body)

    await usuario.save()

    res.json(usuario)
})

module.exports = rutas;