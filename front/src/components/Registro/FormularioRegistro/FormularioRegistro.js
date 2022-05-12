//React library
import React from "react";
//Template css library
import "../../../style/css/bootstrap.min.css"
import "../../../style/css/bootstrap-icons.css"
import "../../../style/css/magnific-popup.css"
import "../../../style/css/aos.css"
import "../../../style/css/templatemo-nomad-force.css"
import "../../../style/css/custon.css"

const FormularioRegistro = ({bus}) => {

    const envioDatos=(e)=>{
        e.preventDefault();
        let datos={
            "nombre":e.target.nombre.value,
            "tipoCedula":e.target.tipoCedula.value,
            "numeroCedula":e.target.numeroCedula.value,
            "fechaExpedicion":e.target.fechaExpedicion.value,
            "genero":e.target.genero.value,
            "telefono":e.target.telefono.value,
            "direccion":e.target.direccion.value,
            "valorIngresos":e.target.valorIngresos.value,
            "valorEgresos":e.target.valorEgresos.value,
            "correo":e.target.correo.value,
            "confirmarCorreo":e.target.confirmarCorreo.value,
            "pass":e.target.pass.value,
            "confirmarPass":e.target.confirmarPass.value,
            "tipoUsuario":e.target.tipoUsuario.value,
        }

        if(datos.correo===datos.confirmarCorreo){
            if(datos.pass===datos.confirmarPass){
                bus(datos);
            }
            else{
                alert("La confirmación de la constraseña es invalida");
            }
        }
        else{
            alert("La confirmación de correo es invalida");
        }

        
    }

    return (
        <div>
            <form onSubmit={envioDatos} className="text-center">
                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="Username"></label>
                    <input type="text" className="form-control" placeholder="Nombres y apellidos" aria-label="Username" aria-describedby="basic-addon1" name="nombre" required/>
                </div>
                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <select className="col-xs-2 col-md-12 placeholder= Tipo de documento" name="tipoCedula" required>
                        <option>Cedula</option>
                        <option>Cedula de extranjeria</option>
                        <option>Pasaporte</option>
                    </select>
                </div>
                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="NumeroDocumento"></label>
                    <input type="Text" className="form-control" placeholder="Número de documento" aria-label="NumeroDocumento" aria-describedby="basic-addon1" name="numeroCedula" required />
                </div>

                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <div className="input-group date" id="datepicker">
                        <input type="date" className="form-control" name="fechaExpedicion" required/>
                    </div>
                </div>

                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="Genero"></label>
                    <input type="text" className="form-control" placeholder="Genero" name="genero" required/>
                </div>

                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="Telefono"></label>
                    <input type="text" className="form-control" placeholder="Telefono" name="telefono" required/>
                </div>

                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="Dirección"></label>
                    <input type="text" className="form-control" placeholder="Dirección" name="direccion" required/>
                </div>

                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="Username"></label>
                    <input type="number" className="form-control" placeholder="Valor ingresos" name="valorIngresos" required/>
                </div>

                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="Username"></label>
                    <input type="number" className="form-control" placeholder="Valor egresos" name="valorEgresos" required/>
                </div>

                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="email"></label>
                    <input type="email" className="form-control" placeholder="Ingrese correo electrónico" name="correo" required/>
                </div>
                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="email"></label>
                    <input type="email" className="form-control" placeholder="Confirme correo electrónico" name="confirmarCorreo" required/>
                </div>
                <div className="mb-3 col-xs-2 col-md-4 center-block">
                    <label for="pwd"></label>
                    <input type="password" className="form-control" placeholder="Ingrese contraseña" name="pass" required/>
                </div>
                <div className="mb-3 col-xs-2 col-md-4 center-block">
                    <label for="pwd"></label>
                    <input type="password" className="form-control" placeholder="Confirme contraseña" name="confirmarPass" required/>
                </div>

                <select className="mb-3 col-xs-2 col-md-4 center-block" name="tipoUsuario" required>
                    <option>Cliente</option>
                    <option>Usuario interno</option>
                    <option>Administrador</option>
                </select>

                <div className="login-registro">
                    <input type="submit" className="btn btn-danger" value="Registrar" />

                </div>

            </form>
        </div>
    )

}

export default FormularioRegistro;