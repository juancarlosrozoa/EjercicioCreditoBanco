//React Library
import React from "react";

//React-Bootstrap Library
import { Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Component
import TablaDatos from "../../../components/Administrador/TablaDatos";
import NavAdministrador from "../../../components/Administrador/NavAdministrador/NavAdministrador";

//CSS
import Style from "./AdminAprobarSolicitud.module.css";


class AdminAprobarSolicitud extends React.Component {

    //Estado para guardar el numero de producto
    state = {
        producto: "",
    }

    //Referencias para identificar la consulta del usuario
    input_id = React.createRef();
    //Ref para identificar los botones de modificacion en la tabla
    modificar = React.createRef();
    //Ref para identificar el boton de eliminar producto
    eliminar = React.createRef();

    //Ref para activar el div que muestra los inputs para modificar los productos.
    clase = React.createRef();
    claseDiv2 = React.createRef();

    //Ref para identificar los input y poder agregarle los datos desde la DB
    input_cuotasMora = React.createRef();
    input_estado = React.createRef();
    input_fcorte = React.createRef();
    input_ffinalizacion = React.createRef();
    input_mesesCredito = React.createRef();
    input_tipoCredito = React.createRef();

    //Simulación de DB
    peticion = {
        productos: [
            {
                "name": "Credito libre inversión",
                "identificacion": "123456789",
                "numero_producto": "0025489678",
                "fecha_inicio": "30/09/2021",
                "fecha_corte": "15/09/2021",
                "meses_credito": "10",
                "fecha_finalizacion": "15/07/2022",
                "estado": "pendiente",
                "monto_solicitado": "200000",
            },
            {
                "name": "Credito vivienda",
                "identificacion": "123456789",
                "numero_producto": "00254857912",
                "fecha_inicio": "30/09/2021",
                "fecha_corte": "15/09/2021",
                "meses_credito": "22",
                "fecha_finalizacion": "15/07/2023",
                "estado": "pendiente",
                "monto_solicitado": "500000",
            },
            {
                "name": "Credito compra de cartera",
                "identificacion": "123456789",
                "numero_producto": "0043489678",
                "fecha_inicio": "30/09/2020",
                "fecha_corte": "15/09/2020",
                "meses_credito": "10",
                "fecha_finalizacion": "15/07/2021",
                "estado": "pendiente",
                "monto_solicitado": "3000000",
            },
        ]
    }

    //Este metodo es para consultar en la DB el valor y colocar los datos en la tabla.
    consultarDato = (e) => {
        e.preventDefault();
        if (this.input_id.current.value !== "") {
            this.claseDiv2.current.className = "col-sm-12 d";
            //En esta sección se debe modificar la variable petición para que se actualice la tabla.
        }
    }

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
            <div>
                <NavAdministrador/>
                <div className="col-sm-12">
                    <div className="row justify-content-center text-center p-4">
                        <h1>Aceptar solicitudes de credito</h1>
                        <br />
                        <div className="col-sm-10">
                            <Form onSubmit={this.consultarDato}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Ingresa la cedula del usuario para visualizar los productos del cliente</Form.Label>
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
                        <br />
                        <div name="visualizarProductos" className="col-sm-12 d-none" ref={this.claseDiv2}>
                            <h1>Productos del cliente</h1>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tipo credito</th>
                                        <th>Identificación</th>
                                        <th># producto</th>
                                        <th>Meses credito</th>
                                        <th>Estado</th>
                                        <th>Monto solicitado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.peticion.productos.map((producto, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{producto.name}</td>
                                                    <td>{producto.identificacion}</td>
                                                    <td>{producto.numero_producto}</td>
                                                    <td>{producto.meses_credito}</td>
                                                    <td>{producto.estado}</td>
                                                    <td>{producto.monto_solicitado}</td>
                                                    <td><Button onClick={this.btnModificar} ref={this.modificar} name={producto.numero_producto}>Aceptar</Button>
                                                        <Button onClick={this.btnModificar} ref={this.modificar} name={producto.numero_producto}>Eliminar</Button></td>
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
    }

}

export default AdminAprobarSolicitud;