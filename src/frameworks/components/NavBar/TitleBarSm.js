import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavBtnBack from "./NavBtnBack";

const TitleBarSm = () => {
  return (
    <Navbar fixed="top" bg="light" data-bs-theme="light" className="px-0 py-1 d-md-none">
      <Container className="justify-content-start">
        <NavBtnBack />
        <Navbar.Brand>
          Oases Solar
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TitleBarSm;
