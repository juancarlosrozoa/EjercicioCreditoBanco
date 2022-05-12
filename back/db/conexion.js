const mongoose = require("mongoose");

const usuario = "grupo2";
const pass = "eMXcKBganSJwtCFD";
const nombre_bd = "Banco_DB";

const url_bd = `mongodb+srv://${usuario}:${pass}@servidor.bn42n.mongodb.net/${nombre_bd}?retryWrites=true&w=majority`;


mongoose.connect(url_bd)
    .then(() => console.log("Base de datos conectada"))
    .catch((e) => console.log("Error ", e));

module.exports = mongoose;