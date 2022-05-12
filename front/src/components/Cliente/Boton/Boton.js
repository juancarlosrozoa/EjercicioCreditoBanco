import React, { Component } from 'react'
import Style from "./Boton.module.css"

export default class Boton extends Component {
    render() {
        return (
            <button 
            className={Style[this.props.clase]} 
            onClick={this.props.function}>
              {this.props.texto}  
            </button>
        )
    }
}
