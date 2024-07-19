import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import CheckYellowIcon from "../icons/CheckYellowIcon.js";

const PackageCard = ({
  title,
  subTitle,
  bodyText,
  bodyList,
  link,
  linkText,
}) => {
  return (
    <Card>
      <Card.Header className="text-center pt-4 pb-3">
        <h6 className="text-dark opacity-8 text mb-0">{subTitle}</h6>
        <h3 className="font-weight-bolder">
          <small>{title}</small>
        </h3>
      </Card.Header>
      <Card.Body className="mx-auto pt-0">
        <div className="justify-content-start d-flex px-2 py-1">
          <small>{bodyText}</small>
        </div>
        {bodyList.map((item, index) => (
          <div key={index} className="justify-content-start d-flex px-2 py-1">
            <div>
              <CheckYellowIcon />
            </div>
            <div className="ps-2">
              <small>{item}</small>
            </div>
          </div>
        ))}
      </Card.Body>
      <Card.Footer className="pt-0">
        <Link className="btn w-100 bg-gradient-dark mb-0" to={link}>
          {linkText}
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default PackageCard;
