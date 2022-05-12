//React Library
import React from "react";

//React-Bootstrap Library
import { Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Component
import TablaDatos from "../../../components/Administrador/TablaDatos";
import NavAdministrador from "../../../components/Administrador/NavAdministrador/NavAdministrador";

//CSS
import Style from "./AdminModificarCredito.module.css";


class AdminModificarCredito extends React.Component {

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
                "estado": "mora",
                "cuotas_mora": "5",
            },
            {
                "name": "Credito vivienda",
                "identificacion": "123456789",
                "numero_producto": "00254857912",
                "fecha_inicio": "30/09/2021",
                "fecha_corte": "15/09/2021",
                "meses_credito": "22",
                "fecha_finalizacion": "15/07/2023",
                "estado": "normal",
                "cuotas_mora": "0",
            },
            {
                "name": "Credito compra de cartera",
                "identificacion": "123456789",
                "numero_producto": "0043489678",
                "fecha_inicio": "30/09/2020",
                "fecha_corte": "15/09/2020",
                "meses_credito": "10",
                "fecha_finalizacion": "15/07/2021",
                "estado": "normal",
                "cuotas_mora": "0",
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

    //Funcion para activar el div de modificacion productos y asignacón de valores a los div.
    //con el evento se obtiene el target del boton, que tiene de nombre el mismo numero del producto seleccionado
    btnModificar = (e) => {
        //console.log(e.target.name);
        //console.log(this.peticion.productos[0]['numero_producto'])
        this.peticion.productos.forEach((producto) => {
            //console.log(producto.numero_producto);

            //Estamos evaluando si el producto consultado del administrador corresponde con el producto en la DB
            //Recordar que el targe.name es el nombre del boton (numero del producto) y producto.numero_producto
            //es el numero del producto que tiene el cliente.
            if (producto.numero_producto === e.target.name) {
                this.setState({
                    producto: e.target.name, //Para actualizar el numero de producto en el estado
                })
                //se cambia la clase para que muestre el div
                this.clase.current.className = "col-sm-8 d";
                //Se agregan los valores de la DB a los input, para poderlo modificar.
                this.input_cuotasMora.current.value = producto.cuotas_mora
                this.input_estado.current.value = producto.estado
                this.input_fcorte.current.value = producto.fecha_corte
                this.input_ffinalizacion.current.value = producto.fecha_finalizacion
                this.input_mesesCredito.current.value = producto.meses_credito
                this.input_tipoCredito.current.value = producto.name
                //console.log(producto.numero_producto);
            }
        })
    }

    btnEliminar = (e) => {
        console.log(this.peticion.productos);
    }

    //Funcion para modificar los datos de la data base.
    btnModificarDB = (e) => {
        this.peticion.productos.forEach((producto) => {
            if (producto.numero_producto === this.state.producto) {

                producto.cuotas_mora = this.input_cuotasMora.current.value
                producto.estado = this.input_estado.current.value
                producto.fecha_corte = this.input_fcorte.current.value
                producto.fecha_finalizacion = this.input_ffinalizacion.current.value
                producto.meses_credito = this.input_mesesCredito.current.value
                producto.name = this.input_tipoCredito.current.value
            }
        })
    }

    render() {

        return (
            <div>
                <NavAdministrador />
                <div className="col-sm-12">
                    <div className="row justify-content-center text-center p-4">
                        <h1>Modificar o eleminar credito usuarios</h1>
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
                                        <th>Fecha inicio</th>
                                        <th>Fecha corte</th>
                                        <th>Meses credito</th>
                                        <th>Fecha finalización</th>
                                        <th>Estado</th>
                                        <th>Cuotas mora</th>
                                        <th>Modificar</th>
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
                                                    <td>{producto.fecha_inicio}</td>
                                                    <td>{producto.fecha_corte}</td>
                                                    <td>{producto.meses_credito}</td>
                                                    <td>{producto.fecha_finalizacion}</td>
                                                    <td>{producto.estado}</td>
                                                    <td>{producto.cuotas_mora}</td>
                                                    <td><Button onClick={this.btnModificar} ref={this.modificar} name={producto.numero_producto}>Modificar</Button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <div className="col-sm-8 d-none" ref={this.clase}>
                            <h1>Modificar producto #{this.state.producto}</h1>
                            <TablaDatos titulo1="Tipo credito" titulo2="Fecha corte" contenido1="tipo_credito" contenido2="fecha_corte" referencia1={this.input_tipoCredito} referencia2={this.input_fcorte} />
                            <TablaDatos titulo1="Meses credito" titulo2="Fecha finalización" contenido1="meses_credito" contenido2="fecha_finalizacion" referencia1={this.input_mesesCredito} referencia2={this.input_ffinalizacion} />
                            <TablaDatos titulo1="Estado" titulo2="Cuotas mora" contenido1="estado" contenido2="cuotas_mora" referencia1={this.input_estado} referencia2={this.input_cuotasMora} />
                            <div className="p-1">
                                <Button onClick={this.btnModificarDB} ref={this.modificarDB}>Modificar</Button>
                            </div>
                            <div className="p-1">
                                <Button onClick={this.btnEliminar} ref={this.eliminarDB}>Eliminar</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default AdminModificarCredito;