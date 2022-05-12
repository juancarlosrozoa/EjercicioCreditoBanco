//React Library
import React from "react";

//Bootstrap Library
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

//Template css Library
import "../../../style/css/bootstrap.min.css"

import "../../../style/css/bootstrap-icons.css"
import "../../../style/css/magnific-popup.css"
import "../../../style/css/aos.css"
import "../../../style/css/templatemo-nomad-force.css"
import "../../../style/css/custon.css"

//video
//import video from "../../../style/videos/814dc43e870597176cad645798825c03.mp4"
//import imagen from "../../../style/videos/792bd98f3e617786c850493560e11c45.jpg"



class ClienteAdministrador extends React.Component {

    render() {
        return (
            <div>
                <main>
                <nav className="navbar navbar-expand-lg bg-light shadow-lg">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <strong>Colpatria</strong>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html#hero">Inicio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="index.html#about">Nuestra historia</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="index.html#portfolio">Portafolio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="index.html#news">Noticias</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="index.html#contact">Contactenos</a>
                            </li>

                            <a className="btn btn-primary" id="btn-login" href="login.html" role="button">Ingresar</a>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className=" clienteAdministrador">
                <div className="container">
                    
                    <div className="h100 d-flex justify-content-center clienteAdministradorConten">
                        <div className="clienteAdministradorBotones btn-group-vertical" role="group" aria-label="Vertical button group">
                            <button type="button" className="btn btn-primary">Solicitar crédito</button>
                            <button type="button" className="btn btn-primary">Generar historial</button>
                            <button type="button" className="btn btn-primary">Solicita una prorroga</button>
                            <button type="button" className="btn btn-primary">Generar certificado</button>
                            <button type="button" className="btn btn-primary">Salir</button>
                            
                        </div>

                        <div className=" clienteAdministradorIdentificador p-2 flex-fill bd-highlight "> 

                            <div className="d-flex p-2 ">
                                
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                <img src="" className="rounded float-end justify-content-end" alt="..."/>
                            
                            </div>
                            

                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                

                                           
                </div>
            </section>
            </main>
            <footer className="site-footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <h5 className="text-white">
                                    <i className="bi-geo-alt-fill me-2"></i>
                                    Colombia
                                </h5>

                                <a href="mailto:info@company.com" className="custom-link mt-3 mb-5">
                                    info@colpatria.com
                                </a>
                            </div>

                            <div className="col-6">
                                <p className="copyright-text mb-0">Copyright © 2021</p>


                            </div>

                            <div className="col-lg-3 col-5 ms-auto">
                                <ul className="social-icon">
                                    <li><a href="#" className="social-icon-link bi-facebook"></a></li>

                                    <li><a href="#" className="social-icon-link bi-twitter"></a></li>

                                    <li><a href="#" className="social-icon-link bi-whatsapp"></a></li>

                                    <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                                    <li><a href="#" className="social-icon-link bi-youtube"></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </footer>

            </div>
        )
    }

}

export default ClienteAdministrador;