import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import * as CONFIG from "../../utilities/config.js";

const Footer = () => {
  return (
    <footer className="mb-5 mb-md-0">
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <p className="mt-4 mb-0 text-sm">
                <Link
                  className="text-decoration-underline"
                  to="/terms-and-conditions"
                >
                  Terms &amp; Conditions
                </Link>
                &nbsp;&#8226;&nbsp;
                <Link
                  className="text-decoration-underline"
                  to="/privacy-policies"
                >
                  Privacy Policies
                </Link>
                &nbsp;&#8226;&nbsp;
                <Link className="text-decoration-underline" to="/disclaimer">
                  Disclaimer
                </Link>
              </p>
              <p className="mb-4 text-sm">&#169;{new Date().getFullYear() + " - " + CONFIG.APP_NAME}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
