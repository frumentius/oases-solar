import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeApp from "./features/home/HomeApp.js";
import DocumentationsApp from "./features/documentations/DocumentationsApp.js";
import ContactUsApp from "./features/contactUs/ContactUsApp.js";
import FinancialAnalysisProApp from "./features/comingSoon/FinancialAnalysisProApp.js";
import TermsConditions from "./features/legalDocuments/TermsConditions.js";
import Disclaimer from "./features/legalDocuments/Disclaimer.js";
import PrivacyPolicies from "./features/legalDocuments/PrivacyPolicies.js";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomeApp />} />
        <Route path="documentations" element={<DocumentationsApp />} />
        <Route path="contact-us" element={<ContactUsApp />} />
        <Route path="coming-soon">
          <Route
            path="financial-analysis-pro"
            element={<FinancialAnalysisProApp />}
          />
        </Route>
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="privacy-policies" element={<PrivacyPolicies />} />
        <Route path="terms-and-conditions" element={<TermsConditions />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
