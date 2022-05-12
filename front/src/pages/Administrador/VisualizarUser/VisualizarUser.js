//React library
import React from "react";

//React Bootstrap library
import { Table, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//CSS
import Style from './VisualizarUser.module.css'

//Components
import NavAdministrador from "../../../components/Administrador/NavAdministrador/NavAdministrador";


class VisualizarUser extends React.Component {

    constructor() {
        super();
        this.state = {
            "usuarios":[]
        };
    }

    peticion = {
        usuarios: [
            {
                "name": "Carlos Cabrera",
                "alias": "Drap",
                "rol": "Usuario",
                "requisitos": "Si",
                "fechaCreacion": "30/09/2021",
                "hora": "13:20",
            },
            {
                "name": "Diego Alejandro",
                "alias": "Alejo",
                "rol": "Interno",
                "requisitos": "Si",
                "fechaCreacion": "01/10/2021",
                "hora": "10:15",
            },
            {
                "name": "Federico Gonzales Mendoza",
                "alias": "Fede",
                "rol": "Interno",
                "requisitos": "Si",
                "fechaCreacion": "02/10/2021",
                "hora": "15:25",
            },
        ]
    }

    tipoUsuario = React.createRef()


    consultarTipoUsuario = () => {
        //console.log(this.clase);
        let token = window.localStorage.token

        let usuario = {
            "tipo_usuario": this.tipoUsuario.current.value,
        }


        fetch("http://localhost:8080/administrador/consultarTipoUsuario", {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                "Content-Type": "application/json",
                "auth-token-jwt": token,
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
                //console.log(response)
                this.setState({
                "usuarios":response,
                })
                
            })
    }

    render() {

        return (

            <div>
                <NavAdministrador />
                <div className="row justify-content-center text-center">
                    <div className="col-sm-9">
                        <div className={Style['rowDiv']}>
                            <h1>Visualizar usuarios</h1>
                            <br />
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Ingresa el tipo de usuario que deseas ver</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa el rol" ref={this.tipoUsuario}/>
                                    <Form.Text className="text-muted">
                                        Los tipos de usuario son: usuario, interno y administrador
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="button" onClick={this.consultarTipoUsuario}>
                                    Consultar
                                </Button>
                            </Form>
                            <br />
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre del usuario</th>
                                        <th>Identificación</th>
                                        <th>Rol</th>
                                        <th>Correo</th>
                                        <th>Genero</th>
                                        <th>Telefono</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.usuarios.map((usuario, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{usuario.nombre}</td>
                                                    <td>{usuario.numeroCedula}</td>
                                                    <td>{usuario.tipoUsuario}</td>
                                                    <td>{usuario.correo}</td>
                                                    <td>{usuario.genero}</td>
                                                    <td>{usuario.telefono}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

        );
    };

}

export default VisualizarUser;