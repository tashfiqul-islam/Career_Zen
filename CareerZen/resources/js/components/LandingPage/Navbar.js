import React, { useState } from "react";
import Scroll from "react-scroll";
import { Link } from "react-router-dom";

// import PropTypes from "prop-types"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink

    // NavbarText
} from "reactstrap";
const ScrollLink = Scroll.Link;

const NavBar = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" fixed="top" dark expand="md">
                <NavbarBrand className="navbar-brand text-light">
                    Career Zen
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="container-fluid">
                        <NavItem>
                            <NavLink
                                className="text-light"
                                tag={ScrollLink}
                                to="about"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                            >
                                <Link className="text-light" to="/">
                                    About
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="text-light"
                                tag={ScrollLink}
                                to="desc"
                                spy={true}
                                smooth={true}
                            >
                                <Link className="text-light" to="/">
                                    Description
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={ScrollLink}
                                to="login"
                                spy={true}
                                smooth={true}
                            >
                                <Link className="text-light" to="/">
                                    Login
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="ml-auto">
                            <NavLink
                                className="text-light"
                                tag={Link}
                                to="/signup"
                                spy={true}
                                smooth={true}
                            >
                                Sign up
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
// Navbar.propTypes = {
//     light: PropTypes.bool,
//     dark: PropTypes.bool,
//     fixed: PropTypes.string,
//     color: PropTypes.string,
//     role: PropTypes.string,
//     expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
// };
// NavbarBrand.propTypes = {
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
// };
// NavbarText.propTypes = {
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
// };

export default NavBar;
