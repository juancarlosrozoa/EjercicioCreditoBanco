//React Library
import React from "react";

//Bootstrap Library
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

//Template css Library
import "../../style/css/bootstrap.min.css"
import "../../style/css/bootstrap-icons.css"
import "../../style/css/magnific-popup.css"
import "../../style/css/aos.css"
import "../../style/css/templatemo-nomad-force.css"
import "../../style/css/custon.css"

//Components
import NavBar from "../../components/Cliente/NavBar";
import PiePag from "../../components/Cliente/PiePag";

//video
import video from "../../style/videos/814dc43e870597176cad645798825c03.mp4"
import imagen from "../../style/videos/792bd98f3e617786c850493560e11c45.jpg"



class InicioAplicacion extends React.Component {

    render() {
        return (
            <div>
                <section className="hero" id="hero">
                    <div className="heroText">
                        <h1 className="text-white mt-5 mb-lg-4">
                            Colpatria
                        </h1>

                        <p className="text-secondary-white-color">
                            Solicite su credito de libre inversión <strong className="custom-underline"> <a href="login.html" target="">Aqui</a></strong>
                        </p>
                    </div>

                    <div className="videoWrapper">
                        <video autoplay="true" loop="true" muted="" className="custom-video" poster={imagen}>
                            <source src={video} type="video/mp4" />

                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="overlay"></div>
                </section>

                <NavBar/>

                <PiePag/>
                
            </div>
        )
    }

}

export default InicioAplicacion;