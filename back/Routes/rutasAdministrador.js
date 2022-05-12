const express=require("express");
const rutas=express.Router();

const consulta=require("../models/comunidadBanco")

const bcrypt=require("bcrypt")


rutas.get("/obteniendoDatos", async (req,res)=>{
    const datos = await consulta.find();
    res.json(datos);
})

rutas.post("/crear", async(req,res)=>{
    let body = req.body

    let salto = await bcrypt.genSalt(10)

    let password = await bcrypt.hash(body.pass,salto)

    body.pass = password

    let usuario = new consulta(body)

    await usuario.save()

    res.json({
        registro:"registrado"
    })
})

rutas.post("/consultarCliente", async(req,res)=>{

    let cedula = req.body.cedula;

    let usuario = await consulta.findOne({"numeroCedula":cedula})

    res.json(usuario)

    
})

rutas.post("/consultarTipoUsuario", async(req,res)=>{

    let tipoUsuario = req.body.tipo_usuario

    let usuarios = await consulta.find({tipoUsuario:tipoUsuario})

    //console.log(usuarios)

    res.json(usuarios)

})

rutas.post("/consultarCorreo", async(req,res)=>{

    let correo = req.body.correo;

    let usuario = await consulta.findOne({"correo":correo})

    res.json(usuario)

    
})

rutas.put("/modificarCliente", async(req,res)=>{
    let cedula = req.body.identificacion

    let usuario = await consulta.findOne({"numeroCedula":cedula})

    usuario.nombre = req.body.name
    usuario.numeroCedula = req.body.identificacion
    usuario.correo = req.body.correo
    usuario.pass = req.body.pass
    usuario.tipoUsuario = req.body.rol
    usuario.genero = req.body.genero
    usuario.direccion = req.body.direccion
    usuario.telefono = req.body.telefono

    console.log(usuario)

    await usuario.save()

    res.json({
        mensaje:"Usuario actualizado",
    })
})

rutas.delete("/eliminarCliente/:cedula", async(req,res)=>{

    let cedula = req.params.cedula

    try {
        let usuario = await consulta.findOne({"numeroCedula":cedula})

        await usuario.delete()

        res.json({
            mensaje:"Usuario Eliminado"
        })
    } catch (error) {
        res.json({
            mensaje:"Error Eliminando"
        })
    }

    

})

module.exports = rutas;