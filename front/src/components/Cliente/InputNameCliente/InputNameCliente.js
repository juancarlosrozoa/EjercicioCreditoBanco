import React from "react";

class InputNameCliente extends React.Component {
    render(){
        return (
            <div>
            <label>{this.props.label}</label>
            <input type={this.props.type}  name={this.props.name} placeholder={this.props.placeholder} />
            </div>
        );
    }
}

   
    export default InputNameCliente;
