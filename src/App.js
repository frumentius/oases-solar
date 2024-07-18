import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

import "./App.css";

function App() {
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
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 40"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="moving-waves">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="-1"
                  fill="rgba(255,255,255,0.40"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.35)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.25)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="8"
                  fill="rgba(255,255,255,0.20)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="13"
                  fill="rgba(255,255,255,0.15)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="16"
                  fill="rgba(255,255,255,1"
                />
              </g>
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
