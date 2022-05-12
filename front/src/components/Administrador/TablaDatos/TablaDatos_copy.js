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
                <div className="row-sm-6 justify-content-center text-center" >
                    <div className="col" id={Style['celda-titulo']}>
                        {this.props.titulo1}
                    </div>
                    <div className="col" id={Style['celda-contenido']}>
                        {this.props.children}
                    </div>
                </div>
            </div>

        )
    }

}

export default TablaDatos;