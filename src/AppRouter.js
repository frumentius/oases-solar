import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { WelcomedRoute } from "./utilities/hoc.js";

const HomeApp = lazy(() => import("./features/home/HomeApp.js"));
const WelcomeApp = lazy(() => import("./features/welcome/WelcomeApp.js"));
const DocumentationsApp = lazy(() =>
  import("./features/documentations/DocumentationsApp.js")
);
const ContactUsApp = lazy(() => import("./features/contactUs/ContactUsApp.js"));
const FinancialAnalysisProApp = lazy(() =>
  import("./features/comingSoon/FinancialAnalysisProApp.js")
);
const CableSizingProApp = lazy(() =>
  import("./features/comingSoon/CableSizingProApp.js")
);
const TermsConditions = lazy(() =>
  import("./features/legalDocuments/TermsConditions.js")
);
const Disclaimer = lazy(() =>
  import("./features/legalDocuments/Disclaimer.js")
);
const PrivacyPolicies = lazy(() =>
  import("./features/legalDocuments/PrivacyPolicies.js")
);
const SolarEnergyPotentialApp = lazy(() =>
  import("./features/solarEnergyPotential/SolarEnergyPotentialApp.js")
);
const CableSizingApp = lazy(() =>
  import("./features/cableSizing/CableSizingApp.js")
);
const PVDesignSccApp = lazy(() =>
  import("./features/pvDesignScc/PVDesignSccApp.js")
);

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/">
          <Route path="welcome" element={<WelcomeApp />} />
          <Route path="contact-us" element={<ContactUsApp />} />
          <Route element={<WelcomedRoute />}>
            <Route index element={<HomeApp />} />
            <Route path="documentations" element={<DocumentationsApp />} />
            <Route path="app">
              <Route
                path="solar-energy-potential"
                element={<SolarEnergyPotentialApp />}
              />
              <Route path="scc" element={<PVDesignSccApp />} />
              <Route path="cable-sizing" element={<CableSizingApp />} />
            </Route>
            <Route path="coming-soon">
              <Route
                path="financial-analysis-pro"
                element={<FinancialAnalysisProApp />}
              />
              <Route
                path="cable-sizing-pro"
                element={<CableSizingProApp />}
              />
            </Route>
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="privacy-policies" element={<PrivacyPolicies />} />
            <Route path="terms-and-conditions" element={<TermsConditions />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
