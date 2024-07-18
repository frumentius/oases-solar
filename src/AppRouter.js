import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeApp from "./features/home/HomeApp.js";
import DocumentationsApp from "./features/documentations/DocumentationsApp.js";
import ContactUsApp from "./features/contactUs/ContactUsApp.js";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomeApp />} />
        <Route path="documentations" element={<DocumentationsApp />} />
        <Route path="contact-us" element={<ContactUsApp />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
