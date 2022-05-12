import React from "react";

class PiePag extends React.Component {
    render() {
        return (
            <div>
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

export default PiePag;