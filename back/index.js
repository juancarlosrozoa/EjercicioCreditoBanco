const express=require("express");
const cors=require("cors");

const rutasAdministrador=require("./Routes/rutasAdministrador")
const rutaLogin=require("./Routes/rutaLogin")

const validarToken=require("./Token/validarToken")

const app=express();
const puerto=8080;

corsConfig={
    origin:"*",
}

app.listen(puerto,()=>{
    console.log("Servidor conectado");
})

app.get("/",(req,res)=>{
     res.json({
         mensaje:"Probando servidor"
     })
})

app.use("/crearUsuario/",express.json(),cors(corsConfig),rutasAdministrador);

app.use("/obteniendoDatos/",rutasAdministrador);

app.use('/login/',express.json(),cors(corsConfig),rutaLogin)

app.use('/administrador/',express.json(),cors(corsConfig),validarToken,rutasAdministrador)