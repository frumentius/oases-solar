import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

import { useAppState, useDispatch } from "../../AppContext.js";

import * as CONFIG from "../../utilities/config.js";
import "./WelcomeApp.scss";

const WelcomeFooter = () => {
  return (
    <div className="welcome-footer justify-content-center text-center">
      <small className="text-white">
        &#169;{new Date().getFullYear() + " - " + CONFIG.APP_NAME}
      </small>
    </div>
  );
};

const WelcomeApp = () => {
  const app_state = useAppState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (app_state.isWelcome !== "1") {
      app_state.isWelcome = "1";
      localStorage.setItem("isWelcome", "1");

      dispatch({ ...app_state });
    }
  }, []);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="welcome-carousel-container">
        <Carousel
          activeIndex={index}
          interval={null}
          touch={false}
          keyboard={false}
          indicators={false}
          controls={false}
        >
          <Carousel.Item className="first-slide w-100 min-vh-100">
            <Container className="min-vh-100 pt-4 pb-5 flex-mid-center">
              <Row>
                <Col className="text-center">
                  <div className="d-inline-block rounded-pill bg-white p-3 mb-3">
                    <img
                      className="welcome-logo"
                      src="/assets/images/logo.png"
                      alt="Oases Solar"
                    />
                  </div>
                  <br />
                  <div className="display-5 text-white mt-3 mb-5">
                    Desigining Your Solar Energy Systems Wouldn't Be So Easy!
                  </div>
                  <Button
                    type="button"
                    className="btn-round bg-gradient-warning mt-5"
                    onClick={() => {
                      handleSelect(1);
                    }}
                  >
                    Learn More&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faCircleRight} className="fa-fw" />
                  </Button>
                  <br />
                  <small className="text-white">Or</small>
                  <br />
                  <Link className="link-light text-decoration-underline" to="/">
                    Try it Now!
                  </Link>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="w-100 min-vh-100">
            <Container className="min-vh-100 pt-4 pb-5 flex-mid-center">
              <Row>
                <Col
                  md={8}
                  lg={6}
                  className="mb-n4 mb-lg-0 text-center col-illustration"
                >
                  <div className="container-illustration">
                    <img
                      src="/assets/images/amico-data-report.svg"
                      alt="Data"
                      className="illustration"
                    />
                  </div>
                </Col>
                <Col md={8} lg={6} className="col-card-description">
                  <div className="h-100 d-flex align-items-center">
                    <Card>
                      <Card.Body>
                        <Card.Title className="h5">Integrated Data</Card.Title>
                        <Card.Text>
                          Assist Your design process with calculation tools
                          (solar energy potential, components sizing, energy
                          production to finacial analysis) and integrated data
                          view.
                        </Card.Text>
                        <Button
                          type="button"
                          className="p-0 m-0 text-gradient text-dark border-radius-0 btn-link"
                          onClick={() => {
                            handleSelect(2);
                          }}
                        >
                          Next&nbsp;&nbsp;&gt;&gt;
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="w-100 min-vh-100">
            <Container className="min-vh-100 pt-4 pb-5 flex-mid-center">
              <Row>
                <Col
                  md={8}
                  lg={6}
                  className="mb-n4 mb-lg-0 text-center col-illustration"
                >
                  <div className="container-illustration">
                    <img
                      src="/assets/images/amico-web-devices.svg"
                      alt="Ease of Access"
                      className="illustration"
                    />
                  </div>
                </Col>
                <Col md={8} lg={6} className="col-card-description">
                  <div className="h-100 d-flex align-items-center">
                    <Card>
                      <Card.Body>
                        <Card.Title className="h5">Ease of Access</Card.Title>
                        <Card.Text>
                          Our progressive web based application runs on any
                          device of Your choice (PC, Tablet, Smartphone, etc.).
                        </Card.Text>
                        <Link
                          type="button"
                          className="btn bg-gradient-dark"
                          to="/"
                        >
                          Try it Now!
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
      <WelcomeFooter />
    </>
  );
};

export default WelcomeApp;
