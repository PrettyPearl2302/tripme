import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg" className="custom-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                <Nav>
                    <Navbar.Brand href="#home">Tripme</Navbar.Brand>
                </Nav>
                <Nav>
                    <Nav.Link href="#travel">Flights</Nav.Link>
                    <Nav.Link href="#book">Travel Information</Nav.Link>
                    <Nav.Link href="#aa">Tripmiles</Nav.Link>
                    <Nav.Link href="#help">My Trips</Nav.Link>
                    <NavDropdown title={<><FontAwesomeIcon icon={faUser} /> Sophie</>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;