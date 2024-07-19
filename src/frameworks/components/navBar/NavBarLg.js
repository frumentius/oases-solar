import React from "react";

import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./NavBarLg.scss";

const NavBarLg= () => {
  return (
    <Navbar fixed="top" bg="light" data-bs-theme="light" className="px-0 d-none d-md-flex">
      <Container>
        <Navbar.Brand href="/">
          <img
            className="nav-logo"
            src="/assets/images/logo.png"
            alt="Oases Solar"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/documentations">
              Documentations
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLg;
