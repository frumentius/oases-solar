import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import WhiteWaveSVG from "./svg/WhiteWaveSVG";

import "./PageMainCard.scss";

const PageMainCard = ({ colorClass, title, subTitle, children }) => {
  return (
    <Container>
      <Row className="pt-5">
        <Col md={10} lg={8} className="mx-auto pb-5">
          <Card className="shadow-lg">
            <Card.Header
              className={colorClass + " p-3 p-lg-5 position-relative"}
            >
              <h3 className="text-white mb-0">{title}</h3>
              {subTitle && (
                <p className="text-white opacity-8 mb-4">{subTitle}</p>
              )}
              <div className="position-absolute w-100 z-index-1 bottom-0 ms-n3 ms-lg-n5">
                <WhiteWaveSVG />
              </div>
            </Card.Header>
            <Card.Body className="p-0">{children}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PageMainCard;
