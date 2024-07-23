import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "./AppContext.js";
import AppRouter from "./AppRouter.js";
import NavBarLg from "./frameworks/components/navBar/NavBarLg.js";
import TitleBarSm from "./frameworks/components/navBar/TitleBarSm.js";
import NavBarSm from "./frameworks/components/navBar/NavBarSm.js";
import Footer from "./frameworks/components/Footer.js";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBarLg />
        <TitleBarSm />
        <NavBarSm />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
