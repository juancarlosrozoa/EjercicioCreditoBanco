import React from 'react'
import InputNameCliente from '../../Cliente/InputNameCliente'
import Boton from "../Boton"

class Formulario extends React.Component {
    render() {
        return (
            <div>
                <InputNameCliente label={' '} type= {'text'} name={'cliente'} />
                
                    
            </div>
        )
    }
}
export default Formulario
