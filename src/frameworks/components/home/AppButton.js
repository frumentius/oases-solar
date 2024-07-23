import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AppButton.scss";

const AppButtonIcon = ({icon}) => {
    return <FontAwesomeIcon icon={icon} className="fa-fw fs-5" />;
}

const AppButton = ({ colorClass, title, body, link, icon }) => {
  return (
    <>
      <div className="d-none d-lg-block">
        <Link
          type="button"
          className={"btn d-block btn-link-app " + colorClass}
          to={link}
        >
          <div className="text-start mb-5">
            <h6 className="text-white fw-bold">{title}</h6>
            {body && (
              <p className="text-white fw-normal">
                {body}
              </p>
            )}
          </div>
          <div className="text-end mt-5">
            <AppButtonIcon icon={icon} />
          </div>
        </Link>
      </div>
      <div className="text-center d-lg-none">
        <Link
          type="button"
          className={"btn btn-link-app p-0 mb-2 " + colorClass}
          to={link}
        >
          <AppButtonIcon icon={icon} />
        </Link>
        <p className="text-xs lh-1">
          <strong>{title}</strong>
        </p>
      </div>
    </>
  );
};

export default AppButton;
