import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import LoginPopUP from "./LoginPopUp";

class SignedOutLinks extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">Gogle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">The vision</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <NavDropdown title="Our Company" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/ceo">Meet the Ceo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
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
