import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./AppRouter.js";
import NavBarLg from "./frameworks/components/NavBar/NavBarLg.js";
import TitleBarSm from "./frameworks/components/NavBar/TitleBarSm.js";
import NavBarSm from "./frameworks/components/NavBar/NavBarSm.js";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarLg />
      <TitleBarSm />
      <NavBarSm />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
