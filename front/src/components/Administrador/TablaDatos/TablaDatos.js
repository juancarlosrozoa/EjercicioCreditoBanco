//React library
import React from "react";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap library
import Style from "./TablaDatos.module.css"

class TablaDatos extends React.Component {

    render() {
        return (
            <div className="row p-1">
                <div className="row justify-content-center text-center" >
                    <div className="col" id={Style['celda-titulo']}>
                        {this.props.titulo1}
                    </div>
                    <div className="col" id={Style['celda-titulo']}>
                        {this.props.titulo2}
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col" id={Style['celda-contenido']}>
                        <input id={Style['celda-input']} className="form-control" name={this.props.contenido1} ref={this.props.referencia1}/>
                    </div>
                    <div className="col" id={Style['celda-input']}>
                        <input id={Style['celda-input']} className="form-control" name={this.props.contenido2} ref={this.props.referencia2}/>
                    </div>
                </div>
            </div>

        )
    }

}

export default TablaDatos;