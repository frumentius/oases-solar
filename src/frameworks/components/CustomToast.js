import React from "react";

import { Button, Toast } from "react-bootstrap";

import "./CustomToast.scss";

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
        className={"border-0 text-bg-" + variant}
        onClose={closeToast}
        show={is_show}
        autohide={autohide}
      >
        <div class="d-flex">
          <Toast.Body>{children}</Toast.Body>
          {!autohide && (
            <Button
              variant="close"
              className="me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={closeToast}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          )}
        </div>
      </Toast>
    </div>
  );
};

export default CustomToast;
