import React from "react";
import { Helmet } from "react-helmet";

import PageMainCard from "../../frameworks/components/PageMainCard";

import * as CONFIG from "../../utilities/config.js";

const PVDesignSccApp = () => {
  return (
    <>
      <Helmet>
        <title>PV Design Off-grid SCC | {CONFIG.APP_NAME}</title>
      </Helmet>
      <PageMainCard
        colorClass="bg-gradient-info"
        title="PV Design Off-grid SCC"
      >
        <div className="py-2">
          <iframe
            title="PV Design Off-grid SCC"
            src={CONFIG.APP_URL + "/scc"}
          />
        </div>
      </PageMainCard>
    </>
  );
};

export default PVDesignSccApp;
