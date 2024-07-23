import React from "react";
import { Helmet } from "react-helmet";

import PageMainCard from "../../frameworks/components/PageMainCard";

import * as CONFIG from "../../utilities/config.js";

const CableSizingApp = () => {
  return (
    <>
      <Helmet>
        <title>Cable Sizing | {CONFIG.APP_NAME}</title>
      </Helmet>
      <PageMainCard colorClass="bg-gradient-success" title="Cable Sizing">
        <div className="py-2">
          <iframe title="Cable Sizing" src={CONFIG.APP_URL + "/cable-sizing"} />
        </div>
      </PageMainCard>
    </>
  );
};

export default CableSizingApp;
