//React Library
import React from "react";
import { useNavigate } from "react-router-dom";
//Template css library
import "../../../style/css/bootstrap.min.css"
import "../../../style/css/bootstrap-icons.css"
import "../../../style/css/magnific-popup.css"
import "../../../style/css/aos.css"
import "../../../style/css/templatemo-nomad-force.css"
import "../../../style/css/custon.css"

const FormularioLogin = ({bus}) =>{

    let navigate=useNavigate()

    const envioDatos = (e) =>{
        e.preventDefault();
        let datos={
            "correo":e.target.correo.value,
            "pass":e.target.pass.value,
        }

        bus(datos)
    }

    const registrar = () =>{
        navigate("/registro")
    }

    return(
        <div>
            <form onSubmit={envioDatos} className="text-center">
                <div className="mb-3 mt-3 col-xs-2 col-md-4 center-block">
                    <label for="email"></label>
                    <input type="email" className="form-control" placeholder="Ingrese correo electrónico" name="correo" required/>
                </div>
                <div className="mb-3 col-xs-2 col-md-4 center-block">
                    <label for="pwd"></label>
                    <input type="password" className="form-control" placeholder="Ingrese contraseña" name="pass" required/>
                </div>

                
                <div className="row justify-content-center text-center" style={{textAlign:"center"}}>
                <div className="login-registro text-center">
                    <center>
                    <table width="20%">
                        <tr>
                            <th>
                                <input type="submit" className="btn btn-primary" value="Ingresar" name="Ingresar"/>
                            </th>
                            <th>
                                <button className="btn btn-primary" onClick={registrar}>Registrarse</button>
                            </th>
                        </tr>
                    </table>
                    </center>
                </div>
                </div>
                <div className="login-registro">
                    <button className="btn btn-danger">Recuperar contraseña</button>
                </div>
            </form>
        </div>
    )

}

export default FormularioLogin;