import React from "react";
import { Helmet } from "react-helmet";

import * as CONFIG from "../../utilities/config.js";

import PageMainCard from "../../frameworks/components/PageMainCard";
import SolarEnergyPotentialForm from "../../frameworks/components/solarEnergyPotential/SolarEnergyPotentialForm.js";

const SolarEnergyPotentialApp = () => {
  return (
    <>
      <Helmet>
        <title>Solar Energy Potential | {CONFIG.APP_NAME}</title>
      </Helmet>
      <PageMainCard
        colorClass="bg-gradient-warning"
        title="Solar Energy Potential"
      >
        <SolarEnergyPotentialForm />
      </PageMainCard>
    </>
  );
};

export default SolarEnergyPotentialApp;
