import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
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

const NavBar = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" dark fixed="top" expand="md">
                <NavbarBrand href="/">Career Zen</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/#about" tag={HashLink} smooth={true}>
                                About
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/#login" tag={HashLink} smooth={true}>
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/#desc" tag={HashLink} smooth={true}>
                                Features and Description
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/signup" tag={HashLink} smooth={true}>
                                Sign up
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
