import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import PackageCard from "./PackageCard";

const ComingSoonCards = () => {
  return (
    <div className="mt-sm-n8 mt-n7">
      <Container>
        <Row className="justify-content-center row">
          {/* <Col lg={4} className="mb-4 mb-lg-0">
            <PackageCard
              title="PV Design Off-Grid Pro"
              subTitle="Coming Soon"
              bodyText="For DC-coupled and AC-coupled PV system."
              bodyList={[
                "Save projects",
                "Save solar panel technical data",
                "Rough single line diagram",
                "PDF report export",
                "Technical support",
              ]}
              link="/coming-soon/pv-design-off-grid-pro"
              linkText="Learn More"
            />
          </Col> */}
          <Col lg={4}>
            <PackageCard
              title="Financial Analysis Pro"
              subTitle="Coming Soon"
              bodyText="Includes NPV, LCOE, Amortization, CRF, IRR, EAA."
              bodyList={[
                "Save projects",
                "PDF report export",
                "Technical support",
              ]}
              link="/coming-soon/financial-analysis-pro"
              linkText="Learn More"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const ComingSoonSection = () => {
  return (
    <>
      <Container className="mt-5 mt-lg-6 mb-3">
        <Row>
          <Col>
            <h5>Coming Soon</h5>
          </Col>
        </Row>
      </Container>
      <section className="pb-lg-7 pb-5 overflow-hidden">
        <div className="bg-gradient-dark position-relative mx-3 border-radius-xl">
          <img
            src="/assets/images/waves-white.svg"
            alt="pattern-lines"
            className="position-absolute start-0 top-md-0 w-100 opacity-7"
          />
          <Container className="pb-lg-9 pb-7 pt-7 postion-relative z-index-2">
            <Row>
              <Col md={8} className="mx-auto text-center">
                <span className="badge bg-gradient-primary mb-2">
                  Under Development
                </span>
                <h3 className="text-white">Pro Version</h3>
                <p className="text-white">
                  Coming soon our Oases Solar Application pro version with more
                  detailed calculation, more features, and greater UI/UX.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <ComingSoonCards />
      </section>
    </>
  );
};

export default ComingSoonSection;
