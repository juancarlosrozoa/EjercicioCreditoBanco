//library React
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Pages inicio aplicacion
import InicioAplicacion from "./pages/InicioAplicacion/"

//Pages administrador
import AdminAprobarSolicitud from "./pages/Administrador/AdminAprobarSolicitud"
import AdminInicio from "./pages/Administrador/AdminInicio/AdminInicio";
import NavAdministrador from "./components/Administrador/NavAdministrador/NavAdministrador"
import AdminModificarCredito from "./pages/Administrador/AdminModificarCredito/AdminModificarCredito"
import AdminModificarInternalUser from "./pages/Administrador/AdminModificarInternalUser/AdminModificarInternalUser"
import AdminModificarUser from "./pages/Administrador/AdminModificarUser/AdminModificarUser"
import VisualizarUser from "./pages/Administrador/VisualizarUser/VisualizarUser";

//Pagina Inicio
import Login from "./pages/Login";

//Paginas Cliente
import ClienteAdministrador from "./pages/Clientes/ClienteAdministrador/ClienteAdministrador"
import ClienteCertificado from "./pages/Clientes/ClienteCertificado"
import ClienteSolicitudCredito from "./pages/Clientes/ClienteSolicitudCredito"
import ClienteSolicitudProrroga from "./pages/Clientes/ClienteSolicitudProrroga"

//Pagina Registro
import Registro from "./pages/Registro";

class App extends React.Component{

    datos_Validacion = (datos,navigate) =>{

        window.localStorage.setItem('token',datos.token)
        window.localStorage.setItem('cedula',datos.cedula)
        window.localStorage.setItem('nombre',datos.nombre)
        window.localStorage.setItem('rol',datos.rol)

        if(datos.rol==="Cliente"){
            navigate("/inicioCliente")
        }
        else if(datos.rol==="Usuario interno"){
            navigate("/inicioUsuarioInterno")
        }
        else if(datos.rol==="Administrador"){
            navigate("/inicioAdministrador")
        }
        else{
            navigate("/inicioPagina")
        }

    }

    render(){
        return(
            <div>
                   <BrowserRouter>
                   
                        <Routes>
                            <Route path={"/"} element={<InicioAplicacion/>}/>
                            <Route path={"/login"} element={<Login bus={this.datos_Validacion}/>}/>
                            <Route path={"/registro"} element={<Registro/>}/>
                            {/*Rutas administrador*/}
                            <Route path={"/inicioAdministrador"} element={<AdminInicio/>}/>
                            <Route path={"/AdminAprobarSolicitud"} element={<AdminAprobarSolicitud/>}/>
                            <Route path={"/AdminModificarCredito"} element={<AdminModificarCredito/>}/>
                            <Route path={"/AdminModificarInternalUser"} element={<AdminModificarInternalUser/>}/>
                            <Route path={"/AdminModificarUser"} element={<AdminModificarUser/>}/>
                            <Route path={"/VisualizarUser"} element={<VisualizarUser/>}/>
                            {/*Rutas cliente*/}
                            <Route path={"/inicioCliente"} element={<ClienteSolicitudCredito/>}/>
                            
                        </Routes>

                   </BrowserRouter>
            </div>
        )
    }

}

export default App;