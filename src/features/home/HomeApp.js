import React from "react";

import "./HomeApp.scss";
import AppSection from "../../frameworks/components/home/AppSection.js";
import ComingSoonSection from "../../frameworks/components/home/ComingSoonSection.js";

function HomeApp() {
  return (
    <>
      <AppSection />
      <ComingSoonSection />
    </>
  );
}

export default HomeApp;
