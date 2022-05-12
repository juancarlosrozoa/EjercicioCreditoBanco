import React from "react";
import NavBar from "../../../components/Cliente/NavBar";
import PiePag from "../../../components/Cliente/PiePag";

class ClienteSolicitudProrroga extends React.Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>

                <section class="clienteAdministradorTitulo">
                    <div class="container">
                        <div class="login-title">
                            <p><h4 class="text-center">Administra tu crédito</h4></p>
                        </div>
                    </div>
                </section>



                <section class=" clienteAdministrador">
                    <div class="container">

                    <div class ="h100 d-flex justify-content-center clienteAdministradorConten">
                    <div class ="clienteAdministradorBotones btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type ="button" class ="btn btn-primary">Solicitar crédito</button>
                    <button type ="button" class ="btn btn-primary">Generar historial</button>
                    <button type ="button" class ="btn btn-primary">Solicita una prorroga</button>
                    <button type ="button" class ="btn btn-primary">Generar certificado</button>
                    <button type ="button" class ="btn btn-primary">Salir</button>

                    </div>

                    <div class =" clienteAdministradorIdentificador p-2 flex-fill bd-highlight ">

                    <div class ="d-flex p-2 ">

                    <input type ="text" class ="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                    <img src="" class ="rounded float-end justify-content-end" alt="..."/>

                    </div>

                    <div class ="row mb-3">
                    <label for="colFormLabelSm" class ="col-sm-6 col-form-label col-form-label-sm text-center">Ingresa el número de cuotas</label>
                    <div class ="col-sm-6">
                    <input type ="text" class ="form-control form-control-sm" id="colFormLabelSm" placeholder=""/>
                    </div>

                    </div>
                    <div class ="d-grid gap-2 col-6 mx-auto">
                    <button type ="button" class ="btn btn-primary ">Guardar cambios</button>
                    </div>
                    </div>

                    </div>



                    </div>
                </section>



                <PiePag></PiePag>


            </div>
        )
    }
}

export default ClienteSolicitudProrroga;