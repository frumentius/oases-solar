import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { faChargingStation, faCloudSun, faPenRuler } from "@fortawesome/free-solid-svg-icons";

import AppButton from "./AppButton";

const AppSection = () => {
  return (
    <>
      <Container className="mt-4 mt-md-5">
        <Row className="mb-3">
          <Col>
            <h5>Application</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <AppButton
              colorClass="bg-gradient-warning"
              title="Solar Energy Potential"
              body="Discover solar energy potential of your location (insol. & irrad.)."
              link="/app/solar-energy-potential"
              icon={faCloudSun}
            />
          </Col>
          <Col>
          <AppButton
              colorClass="bg-gradient-info"
              title="PV-design off-grid SCC"
              body="Design your whole PV System and Calculate energy production."
              link="/app/scc"
              icon={faChargingStation}
            />
          </Col>
          <Col>
          <AppButton
              colorClass="bg-gradient-success"
              title="Cable Sizing"
              body="Calculate cable dimension for DC solar cable."
              link="/app/cable-sizing"
              icon={faPenRuler}
            />
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppSection;
