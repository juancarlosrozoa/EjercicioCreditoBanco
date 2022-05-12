//library React
import React from "react";
import { useNavigate } from "react-router-dom";
 

//Template css Library
import "../../style/css/bootstrap.min.css"
import "../../style/css/bootstrap-icons.css"
import "../../style/css/magnific-popup.css"
import "../../style/css/aos.css"
import "../../style/css/templatemo-nomad-force.css"
import "../../style/css/custon.css"
//Components
import NavBar from "../../components/Cliente/NavBar";
import PiePag from "../../components/Cliente/PiePag";
import FormularioLogin from "../../components/Login/FormularioLogin";

const Login = ({bus}) => {

    let navigate = useNavigate();

    const verificar_usuario = (datos) => {
        fetch("http://localhost:8080/login/consultarUsuario", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                console.log(response);
                if(response.mensaje==="Clave equivocada"){
                    alert("Contraseña erroena")
                }
                else if(response.mensaje==="Acceso correcto"){
                    //console.log(response);
                    bus(response,navigate)
                    alert("acceso correcto")
                }
                else{
                    alert("Correo equivocado")
                }
            });
    }

    return (
        <div>
            <NavBar />

            <FormularioLogin bus={verificar_usuario} />

            <PiePag />
        </div>
    )

}

export default Login;