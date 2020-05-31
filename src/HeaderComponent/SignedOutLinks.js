import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import LoginPopUP from "./LoginPopUp";

import Logo from "./gogle_logoAsset9.png";

class SignedOutLinks extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} className="d-inline-block align-top" alt="Gogle" />
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
                Meet the Founder
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Staff">
                The board
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
