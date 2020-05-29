import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import LoginPopUP from "./LoginPopUp";

class SignedOutLinks extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          Gogle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">The vision</Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <NavDropdown title="Our Company" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/ceo">
                Meet the Ceo
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Staff">
                Meet the management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <LoginPopUP />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SignedOutLinks;
