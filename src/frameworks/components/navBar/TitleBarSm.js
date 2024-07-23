import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavBtnBack from "./NavBtnBack";

import * as CONFIG from "../../../utilities/config.js";

const TitleBarSm = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/app/solar-energy-potential":
        setTitle("Solar Energy Potential");
        break;
      case "/app/scc":
        setTitle("PV Design Off-grid SCC");
        break;
      case "/app/cable-sizing":
        setTitle("Cable Sizing");
        break;
      case "/coming-soon/financial-analysis-pro":
        setTitle("Financial Aanalysis Pro");
        break;
      case "/contact-us":
        setTitle("Contact Us");
        break;
      case "/documentations":
        setTitle("Documentations");
        break;
      case "/disclaimer":
        setTitle("Disclaimer");
        break;
      case "/privacy-policies":
        setTitle("Privacy Policies");
        break;
      case "/terms-and-conditions":
        setTitle("Terms and Conditions");
        break;
      default:
        setTitle(CONFIG.APP_NAME);
        break;
    }
  }, [location]);

  return (
    <Navbar
      fixed="top"
      bg="light"
      data-bs-theme="light"
      className="px-0 py-1 d-md-none"
    >
      <Container className="justify-content-start">
        {location.pathname !== "/" && <NavBtnBack />}
        <Navbar.Brand>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TitleBarSm;
