import React from "react";

import PageMainCard from "../../frameworks/components/PageMainCard";
import SolarEnergyPotentialForm from "../../frameworks/components/solarEnergyPotential/SolarEnergyPotentialForm.js";

const SolarEnergyPotentialApp = () => {
  return (
    <>
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
