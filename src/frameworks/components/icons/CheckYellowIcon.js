import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CheckYellowIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faCheck}
      className="fa-fw text-main-yellow text-sm"
    />
  );
};

export default CheckYellowIcon;
