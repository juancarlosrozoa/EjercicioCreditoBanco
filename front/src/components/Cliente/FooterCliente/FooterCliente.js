
import React from 'react'
import { Card } from 'react-bootstrap'

import Style from "./FooterCliente.module.css"

const FooterCliente= () =>{
    return (
        <Card className="text-center">
            <Card.Body className={Style['footerCliente']} >
                <Card.Title>Colpatria</Card.Title>
                    <Card.Text></Card.Text>

                    <Card.Text>Grupo10Equipo2MinTic2021©</Card.Text>
                  
            </Card.Body>
        </Card>
    )
}
export default FooterCliente;


