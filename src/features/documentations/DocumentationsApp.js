import React from "react";

import PageMainCard from "../../frameworks/components/PageMainCard.js";
import PDFRedIcon from "../../frameworks/components/icons//PDFRedIcon.js";

const Download = ({ title, fileSrc }) => {
  return (
    <>
      <h6 className="mt-5">{title}</h6>
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
    <PageMainCard
      colorClass="bg-gradient-dark"
      title="Documentations"
      subTitle="Download"
    >
      <div className="p-3 p-lg-5 pt-0 card-body">
        <Download
          title="Solar Energy Potential"
          fileSrc="/assets/pdf/solar-energy-potential-docs.pdf"
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
  );
};

export default DocumentationsApp;
