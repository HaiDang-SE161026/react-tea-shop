import React from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../shared/baseURL";

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-left col-4 col-sm-4">
                        <Link to="/home"><img src={baseURL+"images/logo.png"} height="100"></img></Link>
                        <p><strong>Copyright @2022 Serenitea Shop</strong></p>
                    </div>
                    <div className="footer-right col-8 col-sm-8">
                        <ul className="d-flex flex-wrap list-unstyled">
                            <li className="col-3"><Link to="/home"><strong>HOME</strong></Link></li>
                            <li className="col-3"><Link to="/about"><strong>ABOUT</strong></Link></li>
                            <li className="col-3"><Link to="/menu"><strong>MENU</strong></Link></li>
                            <li className="col-3"><Link to="/contact"><strong>CONTACT</strong></Link></li>
                        </ul>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-phone fa-lg"></i><strong> : +879 5588 4296</strong></li>
                            <li><i className="fa fa-envelope fa-lg"></i><strong> : <a href="mailto:serenitea@shop.gmail.com">serenitea@shop.gmail.com</a></strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;