import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./NavBtnBack.scss";

const NavBtnBack = () => {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <a
      variant="light"
      type="button"
      className="nav-btn-back"
      onClick={handleBack}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </a>
  );
};

export default NavBtnBack;
