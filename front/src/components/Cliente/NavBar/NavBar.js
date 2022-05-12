import React from "react";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-light shadow-lg">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">
                            <strong>Colpatria</strong>
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Inicio</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="index.html#about">Nuestra historia</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="index.html#portfolio">Portafolio</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="index.html#news">Noticias</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="index.html#contact">Contactenos</a>
                                </li>

                                <a class="btn btn-primary" id="btn-login" href="/login" role="button">Ingresar</a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;