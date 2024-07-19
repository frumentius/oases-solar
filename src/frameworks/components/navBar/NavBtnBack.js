import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./NavBtnBack.scss";

const NavBtnBack = () => {
  return (
    <a variant="light" type="button" className="nav-btn-back">
      <FontAwesomeIcon icon={faArrowLeft} />
    </a>
  );
};

export default NavBtnBack;
