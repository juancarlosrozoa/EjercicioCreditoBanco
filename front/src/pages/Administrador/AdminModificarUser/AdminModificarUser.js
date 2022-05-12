//React library
import React from "react";

//React Bootstrap library
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//CSS
import Style from "./AdminModificarUser.module.css"

//Components
import TablaDatos from "../../../components/Administrador/TablaDatos";
import NavAdministrador from "../../../components/Administrador/NavAdministrador/NavAdministrador";

class AdminModificarUser extends React.Component {

    constructor() {
        super();
        this.state = {
            "name": "",
            "pass": "",
            "rol": "",
            "direccion": "",
            "genero": "",
            "identificacion": "",
            "correo": "",
            "telefono": "",
        };
    }

    componentDidMount() {

        let rol = window.localStorage.getItem("rol");

        if (rol === "Administrador") {
            console.log("Ud es administrador");
        }
        else if (rol === "Usuario interno") {
            window.location.href = "/inicioUsuarioInterno"
        }
        else if (rol === "Cliente") {
            window.location.href = "/inicioCliente";
            alert("Ud no es administrador")
        }
        else {
            window.location.href = "/login"
        }

    }

    input_id = React.createRef();
    clase = React.createRef();

    input_nombre = React.createRef();
    input_identificacion = React.createRef();
    input_pass = React.createRef();
    input_genero = React.createRef();
    input_rol = React.createRef();
    input_telefono = React.createRef();
    input_correo = React.createRef();
    input_direccion = React.createRef();


    eliminarUsuario = () => {
        let token = window.localStorage.token

        let cedula = this.input_identificacion.current.value

        fetch(`http://localhost:8080/administrador/eliminarCLiente/${cedula}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token-jwt": token
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                if (response.mensaje === "Usuario Eliminado") {
                    this.clase.current.className = "row justify-content-center text-center d-none";
                    alert("Usuario eliminado")
                }
                else {
                    alert("Usuario no se encontro o no se elimino")
                }
            });
    }


    actualizarDatos = (datosNuevos) => {

        let token = window.localStorage.token

        fetch("http://localhost:8080/administrador/modificarCliente", {
            method: "PUT",
            body: JSON.stringify(datosNuevos),
            headers: {
                "Content-Type": "application/json",
                "auth-token-jwt": token
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                //console.log(response)
                //return response
                alert("Datos actualizados")
            });
    }


    cambiarDatos = () => {
        //console.log(this.input_nombre.current.value,this.input_identificacion.current.value);

            let datosNuevos = {
                correo: this.input_correo.current.value,
                direccion: this.input_direccion.current.value,
                genero: this.input_genero.current.value,
                identificacion: this.input_identificacion.current.value,
                name: this.input_nombre.current.value,
                pass: this.input_pass.current.value,
                rol: this.input_rol.current.value,
                telefono: this.input_telefono.current.value
            }
            //console.log(datosNuevos);

            this.actualizarDatos(datosNuevos)
    }

    consultarDato = (e) => {
        e.preventDefault();
        //console.log(this.clase);

        let datos = {
            "cedula": this.input_id.current.value,
        }

        let token = window.localStorage.token

        fetch("http://localhost:8080/administrador/consultarCliente", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json",
                "auth-token-jwt": token
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                //console.log(JSON.stringify(response).hasOwnProperty("error"));

                if (!JSON.stringify(response).hasOwnProperty("error")) { //Para saber si tiene la clave error.
                    if (response) {
                        if (response.tipoUsuario === "Cliente") {

                            this.clase.current.className = "row justify-content-center text-center d";
                            this.setState({
                                correo: response.correo,
                                direccion: response.direccion,
                                genero: response.genero,
                                identificacion: response.numeroCedula,
                                name: response.nombre,
                                pass: response.pass,
                                rol: response.tipoUsuario,
                                telefono: response.telefono
                            })

                            this.input_nombre.current.value = this.state.name;
                            this.input_identificacion.current.value = this.state.identificacion;
                            this.input_pass.current.value = this.state.pass;
                            this.input_rol.current.value = this.state.rol;
                            this.input_genero.current.value = this.state.genero;
                            this.input_direccion.current.value = this.state.direccion;
                            this.input_telefono.current.value = this.state.telefono;
                            this.input_correo.current.value = this.state.correo;

                            alert("Usuario modificado")
                        }
                        else {
                            this.clase.current.className = "row justify-content-center text-center d-none";
                            alert("Si desea consultar usuario interno o administrador dirigirse a la opcion correspondiente")

                        }
                    }
                    else {
                        this.clase.current.className = "row justify-content-center text-center d-none";
                        alert("Usuario no encontrado")
                    }

                }
                else {
                    window.location.href = "/login"
                    alert("Sesion finalizada")
                }

            });

    }


    render() {

        return (

            <div >
                <NavAdministrador />
                <div className="row justify-content-center text-center p-4">
                    <h1>Modificar o eleminar usuarios</h1>
                    <br />
                    <div className="col-sm-10">
                        <Form onSubmit={this.consultarDato}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ingresa la cedula del usuario que deseas modificar o eliminar</Form.Label>
                                <Form.Control id={Style['celda-input']} type="number" placeholder="Ingresa la identificación" ref={this.input_id} />
                                <Form.Text className="text-muted">
                                    Los datos de la cedula deben ser numericos.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Consultar
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="row justify-content-center text-center d-none" ref={this.clase}>
                    <h1>Usuario consultado</h1>
                    <div className="col-sm-6 p-3">

                        <TablaDatos titulo1="Nombre" titulo2="Identificacion" contenido1="nombre" contenido2="identificacion" referencia1={this.input_nombre} referencia2={this.input_identificacion} />
                        <TablaDatos titulo1="Correo" titulo2="Rol" contenido1="correo" contenido2="rol" referencia1={this.input_correo} referencia2={this.input_rol} />
                        <TablaDatos titulo1="Telefono" titulo2="Dirección" contenido1="telefono" contenido2="direccion" referencia1={this.input_telefono} referencia2={this.input_direccion} />
                        <TablaDatos titulo1="Contraseña" titulo2="Genero" contenido1="contraseña" contenido2="genero" referencia1={this.input_pass} referencia2={this.input_genero} />

                        <div className="col-sm-5 d-inline p-1 pt-4">
                            <Button variant="primary" type="submit" onClick={this.cambiarDatos} name="modificar">Modificar</Button>
                        </div>
                        <div className="col-sm-5 d-inline p-1 pt-4">
                            <Button variant="primary" type="submit" onClick={this.eliminarUsuario} name="eliminar">Eliminar</Button>
                        </div>

                    </div>


                </div>

                <br />

            </div>


        )

    }

}

export default AdminModificarUser;