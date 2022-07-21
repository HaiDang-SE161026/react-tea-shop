import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavItem, Nav, Button, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";
import { baseURL } from "../shared/baseURL";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src={baseURL+'images/logo.png'} height="100"></img></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-star fa-lg"></span> HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about"><span className="fa fa-info fa-lg"></span> ABOUT US</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span className="fa fa-coffee fa-lg"></span> MENU</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact"><span className="fa fa-comment fa-lg"></span> CONTACT</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;