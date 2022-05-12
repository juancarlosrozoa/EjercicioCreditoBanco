const express = require("express");
const rutas = express.Router();

const consulta = require("../models/comunidadBanco")

const bcrypt = require("bcrypt")

const jwt=require("jsonwebtoken")


rutas.get("/obteniendoDatos", async (req, res) => {
    const datos = await consulta.find();
    res.json(datos);
})

rutas.post("/consultarUsuario", async (req, res) => {
    let body = req.body

    let usuario = await consulta.findOne({ "correo": body.correo })

    //res.send(usuario)

    if (usuario) {

        let password = req.body.pass;
        let validar_password = await bcrypt.compare(password, usuario.pass)

        if (!validar_password) {
            return (res.json({
                mensaje: "Clave equivocada",
                validar_password:validar_password,
            }))
        }
        else{

            let token_jwt=jwt.sign({
                id:usuario.id,
                nombre:usuario.nombre,
                rol:usuario.rol,
            },
            "Colpatria",
            )

            return (res.json({ 
                mensaje: "Acceso correcto",
                cedula:usuario.cedula,
                nombre:usuario.nombre,
                rol:usuario.tipoUsuario,
                token:token_jwt, 
            }))
        }

    }
    else {
        return (res.json({ 
            mensaje: "Correo equivocado" 
        }))
    }


})

module.exports = rutas;