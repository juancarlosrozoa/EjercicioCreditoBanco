import React, { Component } from 'react'
import Style from "./NavSideCliente.module.css"
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

    import Home from '../../../pages/Clientes/Home';
    import Contact from '../../../pages/Clientes/Contact';
    import About from '../../../pages/Clientes/ClienteHistorial/About'

export default class NavSideCliente extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav className="flex-column " >
                        <Nav.Link className={Style['navSideCliente']} as={Link} to="/home">Solicitar rédito</Nav.Link>
                        <Nav.Link className={Style['navSideCliente']} as={Link} to="/about">General historial</Nav.Link>
                        <Nav.Link className={Style['navSideCliente']} as={Link} to="/contact">Solicitar prorroga</Nav.Link>
                        <Nav.Link className={Style['navSideCliente']} as={Link} to="/contact">Generar certificado</Nav.Link>
                        <Nav.Link className={Style['navSideCliente']} as={Link} to="/contact">Salir</Nav.Link>
                    </Nav>
                </div>
                <div>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
