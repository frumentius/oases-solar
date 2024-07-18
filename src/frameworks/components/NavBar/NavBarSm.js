import React from "react";
import { Link } from "react-router-dom";

import { Col, Container, Navbar, Row } from "react-bootstrap";

import "./NavBarSm.scss";
import DocsSVG from "../SVG/DocsSVG";
import ShopSVG from "../SVG/ShopSVG";
import CsSVG from "../SVG/CsSVG";

const NavBarSm = () => {
  return (
    <Navbar
      fixed="bottom"
      bg="light"
      data-bs-theme="light"
      className="pt-1 pb-0 px-0 d-md-none"
    >
      <Container className="d-block">
        <Row>
          <Col className="text-center">
            <Link to="/documentations" className="d-inline-block text-center">
              <DocsSVG />
              <br />
              <small className="text-xs">Docs</small>
            </Link>
          </Col>
          <Col className="text-center">
            <Link to="/" className="d-inline-block text-center">
              <ShopSVG />
              <br />
              <small className="text-xs">Home</small>
            </Link>
          </Col>
          <Col className="text-center">
            <Link to="/contact-us" className="d-inline-block text-center">
              <CsSVG />
              <br />
              <small className="text-xs">Contact Us</small>
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBarSm;
