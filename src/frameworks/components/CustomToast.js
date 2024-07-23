import React from "react";

import { Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./CustomToast.scss";

const CloseButton = ({ variant, closeToast }) => {
  return (
    <div
      type="button"
      className={"me-2 m-auto text-bg-" + variant}
      data-bs-dismiss="toast"
      aria-label="Close"
      onClick={closeToast}
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="fa-fw text-sm"
      />
      {/* <span aria-hidden="true">&times;</span> */}
    </div>
  );
};

const CustomToast = ({
  variant = "light",
  position = "bottom",
  autohide = true,
  is_show = false,
  closeToast,
  children,
}) => {
  return (
    <div
      className={
        "custom-toast custom-toast-" +
        position +
        " toast-container position-fixed end-0 p-3"
      }
    >
      <Toast
        className={"border-0 text-bg-" + variant + " bg-gradient-" + variant}
        onClose={closeToast}
        show={is_show}
        autohide={autohide}
      >
        <div class="d-flex">
          <Toast.Body>{children}</Toast.Body>
          {!autohide && (
            <CloseButton variant={variant} closeToast={closeToast} />
          )}
        </div>
      </Toast>
    </div>
  );
};

export default CustomToast;
