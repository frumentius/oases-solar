import React from "react";
import { Helmet } from "react-helmet";

import * as CONFIG from "../../utilities/config.js";

import PageMainCard from "../../frameworks/components/PageMainCard.js";
import PDFRedIcon from "../../frameworks/components/icons//PDFRedIcon.js";

const Download = ({ title, fileSrc, isTop = false }) => {
  return (
    <>
      <h6 className={!isTop ? "mt-5" : ""}>{title}</h6>
      <div className="justify-content-start d-flex">
        <div>
          <PDFRedIcon />
        </div>
        <div className="ps-2">
          <a
            href={fileSrc}
            className="text-decoration-underline"
            rel="noopener noreferrer nofollow"
            download
          >
            Download here
          </a>
        </div>
      </div>
    </>
  );
};

const DocumentationsApp = () => {
  return (
    <>
      <Helmet>
        <title>Documentations | {CONFIG.APP_NAME}</title>
      </Helmet>
      <PageMainCard
        colorClass="bg-gradient-dark"
        title="Documentations"
        subTitle="Download"
      >
        <div className="p-3 p-lg-5 pt-0">
          <Download
            title="Solar Energy Potential"
            fileSrc="/assets/pdf/solar-energy-potential-docs.pdf"
            isTop={true}
          />
          <Download
            title="PV-design off-grid SCC"
            fileSrc="/assets/pdf/scc-docs.pdf"
          />
          <Download
            title="Cable Sizing"
            fileSrc="/assets/pdf/cable-sizing-docs.pdf"
          />
        </div>
      </PageMainCard>
    </>
  );
};

export default DocumentationsApp;
