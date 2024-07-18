import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

import WhiteWaveSVG from "../../frameworks/components/SVG/WhiteWaveSVG.js";

import "./HomeApp.scss";

function HomeApp() {
  return (
    <div className="App">
      <header className="bg-gradient-dark">
        <div className="page-header min-vh-75">
          <span className="mask bg-gradient-info opacity-8"></span>
          <div className="container">
            <Row className="justify-content-center">
              <Col lg={8} className="text-center mx-auto my-auto">
                <h1 className="text-white">Work with an amazing design</h1>
                <p className="lead mb-4 text-white opacity-8">
                  We're constantly trying to express ourselves and actualize our
                  dreams. If you have the opportunity to play this game
                </p>
                <Button type="submit" className="bg-white text-dark">
                  Create Account
                </Button>
                <h6 className="text-white mb-2 mt-5">Find us on</h6>
                <div className="d-flex justify-content-center">
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-lg text-white me-4"
                    />
                  </a>
                  <a href="/">
                  <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-lg text-white me-4"
                    />
                  </a>
                  <a href="/">
                  <FontAwesomeIcon
                      icon={faXTwitter}
                      className="text-lg text-white me-4"
                    />
                  </a>
                  <a href="/">
                  <FontAwesomeIcon
                      icon={faGooglePlus}
                      className="text-lg text-white me-4"
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="position-absolute w-100 z-index-1 bottom-0">
            <WhiteWaveSVG />
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomeApp;