import React, { Component } from 'react'
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

export default class NavPaginaCliente extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        
                            <Navbar.Brand href="#">Colpatria</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/about">Nuestra Historia</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Portafolio</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Noticias</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contactenos</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Ingresar</Nav.Link>
                                
                            </Nav>
                            </Navbar.Collapse>
                        
                        </Navbar>
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
