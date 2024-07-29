import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import * as CONFIG from "../../utilities/config.js";

import PageMainCard from "../../frameworks/components/PageMainCard.js";
import CheckYellowIcon from "../../frameworks/components/icons/CheckYellowIcon.js";

const CableSizingProApp = () => {
  return (
    <>
      <Helmet>
        <title>Coming Soon - Cable Sizing Pro | {CONFIG.APP_NAME}</title>
      </Helmet>
      <PageMainCard
        colorClass="bg-gradient-primary"
        title="Cable Sizing Pro"
        subTitle="Coming Soon"
      >
        <Container>
          <Row>
            <Col>
              <p>Cable Sizing for multiple cables. Suitable for large scale projects.</p>
              <h5 className="mt-3">What can it do:</h5>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>
                    Calculates DC solar cable
                  </small>
                </div>
              </div>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>
                    Calculates AC cable
                  </small>
                </div>
              </div>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>
                    Calculates multiple cables
                  </small>
                </div>
              </div>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>Calculation based on German / European standard</small>
                </div>
              </div>
              <div className="justify-content-start d-flex px-2 py-1">
                <div>
                  <CheckYellowIcon />
                </div>
                <div className="ps-2">
                  <small>Create list of deocumentations</small>
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
              <p>&nbsp;</p>
              {/* <p className="mt-3">
                Financial analysis PRO is also included in PV-design off-grid
                PRO.
              </p>
              <p>
                Financial analysis PRO is separately offered for user, who
                doesn't need technical designing tool. This tool is suitable for
                off-grid and on-grid pv projects
              </p> */}
            </Col>
          </Row>
        </Container>
      </PageMainCard>
    </>
  );
};

export default CableSizingProApp;
