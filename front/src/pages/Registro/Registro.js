//React library

import React from "react";
import { useNavigate } from "react-router-dom";
//Template css Library
import "../../style/css/bootstrap.min.css"
import "../../style/css/bootstrap-icons.css"
import "../../style/css/magnific-popup.css"
import "../../style/css/aos.css"
import "../../style/css/templatemo-nomad-force.css"
import "../../style/css/custon.css"

//Components library
import FormularioRegistro from "../../components/Registro/FormularioRegistro";
import NavBar from "../../components/Cliente/NavBar";
import PiePag from "../../components/Cliente/PiePag";

class Registro extends React.Component {


    consultarCorreo = (datos) => {

        let correo = {
            "correo": datos.correo,
        }

        fetch("http://localhost:8080/crearUsuario/consultarCorreo", {
            method: "POST",
            body: JSON.stringify(correo),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                
                if(response){
                    alert("El correo ingresado para el usuario ya se encuentra registrado en la DB")
                }
                else{
                    this.crearUsuario(datos)
                }
            })
        
    }
    
    
    consultarCedula = (datos) => {
        //console.log(this.clase);

        let cedula = {
            "cedula": datos.numeroCedula,
        }

        fetch("http://localhost:8080/crearUsuario/consultarCliente", {
            method: "POST",
            body: JSON.stringify(cedula),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                if(response){
                    alert("Numero de cedula ya registrado, por favor ingrese otro numero de identificación")
                }
                else{
                    this.consultarCorreo(datos);
                }
            })

    }

    crearUsuario = (datos) => {

        fetch("http://localhost:8080/crearUsuario/crear", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                //console.log(response);
                if(response.registro==="registrado"){
                    alert("Usuario registrado")
                    window.location.href="/login"
                }
            });
    }


    render() {

        return (
            <div>
                
                <NavBar/>

                <section class="login p-3">
                    <div class="container">
                        <div class="login-title">
                            <p><h1 class="text-center text-dark">Registro</h1></p>
                        </div>
                    </div>
                </section>

                <section className="registro">
                    <div className="container mt-3">

                        <FormularioRegistro bus={this.consultarCedula} />

                    </div>
                </section>

                <PiePag/>
               
            </div>
        )

    }

}

export default Registro;