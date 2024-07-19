import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const CheckYellowIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faFilePdf}
      className="fa-fw text-gradient text-danger"
    />
  );
};

export default CheckYellowIcon;
