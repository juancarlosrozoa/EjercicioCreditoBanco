//React Module
import React from "react";

//Library for redirect
//mport {Carousel} from "react-router-dom";

//Bootstrap Library
import { Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import NavAdministrador from "../../../components/Administrador/NavAdministrador/NavAdministrador";

//Resource
import imagen1 from "./imagen1.jpg"
import imagen2 from "./imagen2.jpg"

class AdminInicio extends React.Component {

    componentDidMount(){
        
        let rol = window.localStorage.getItem("rol");

        if(rol==="Administrador"){
            alert("Ud es administrador")
        }
        else if(rol==="Usuario interno"){
            window.location.href="/inicioUsuarioInterno"
        }
        else if(rol==="Cliente"){
            window.location.href="/inicioCliente";
            alert("Ud no es administrador")
        }
        else{
            window.location.href="/login"
        }

    }

         

    render() {
        return (
            <div className="row justify-content-center">

            <NavAdministrador/>

                <div className="text-center col-sm-8" style={{ padding: "30px" }}>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imagen1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>Gestion a tiempo</h5>
                                <p>Cumple con tus deberes y responde tus clientes a tiempo para obtener premios.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imagen2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Creditos</h5>
                                <p>Actualiza el estado de los usuarios que tengan sus creditos terminados.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }

}

export default AdminInicio;