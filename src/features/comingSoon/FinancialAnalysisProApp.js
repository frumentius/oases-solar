import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import * as CONFIG from "../../utilities/config.js";

import PageMainCard from "../../frameworks/components/PageMainCard.js";
import CheckYellowIcon from "../../frameworks/components/icons/CheckYellowIcon.js";

const FinancialAnalysisProApp = () => {
  return (
    <>
      <Helmet>
        <title>Coming Soon - Financial Analysis Pro | {CONFIG.APP_NAME}</title>
      </Helmet>
      <PageMainCard
        colorClass="bg-gradient-primary"
        title="Financial Analysis Pro"
        subTitle="Coming Soon"
      >
        <Container>
          <Row>
            <Col>
              <p>Detailed financial analysis for any kind of pv projects.</p>
              <h5 className="mt-3">What can it do:</h5>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>
                    Calculates NPV, LCOE, Amortization, CRF, IRR, EAA
                  </small>
                </div>
              </div>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>
                    Detailed input of PV-Plant's materials (include listing of
                    material costs and lifetime of materials)
                  </small>
                </div>
              </div>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>
                    Detailed input for all kinds of fixed and running costs
                  </small>
                </div>
              </div>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>Adjustable observation period</small>
                </div>
              </div>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>Generate cash flow</small>
                </div>
              </div>
              <h5 className="mt-3">Features:</h5>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>Save projects</small>
                </div>
              </div>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>PDF report export</small>
                </div>
              </div>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>Technical support</small>
                </div>
              </div>
              <p className="mt-3">
                Financial analysis PRO is also included in PV-design off-grid
                PRO.
              </p>
              <p>
                Financial analysis PRO is separately offered for user, who
                doesn't need technical designing tool. This tool is suitable for
                off-grid and on-grid pv projects
              </p>
            </Col>
          </Row>
        </Container>
      </PageMainCard>
    </>
  );
};

export default FinancialAnalysisProApp;
