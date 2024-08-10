import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import CustomToast from "../CustomToast.js";

import { CalculateInsolIrrad } from "../../../useCases/SolarEnergyPotential.js";
import SolarEnergyPotentialResult from "./SolarEnergyPotentialResults.js";

import { isEmptyObject } from "../../../utilities/validators.js";
import * as CONFIG from "../../../utilities/config.js";

const SolarEnergyPotentialForm = () => {
  const recaptchaRef = React.createRef();
  const def_toast_val = { is_show: false, body: "" };

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [altitude, setAltitude] = useState("");
  const [azimuthAngle, setAzimuthAngle] = useState("");
  const [elevationAngle, setElevationAngle] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [calcResult, setResult] = useState({});
  const [toast, setToast] = useState(def_toast_val);

  const handleLatitudeChange = (e) => setLatitude(e.target.value);
  const handleLongitudeChange = (e) => setLongitude(e.target.value);
  const handleAltitudeChange = (e) => setAltitude(e.target.value);
  const handleAzimuthAngleChange = (e) => setAzimuthAngle(e.target.value);
  const handleElevationAngleChange = (e) => setElevationAngle(e.target.value);
  const handleCaptchaChange = () => setCaptcha(recaptchaRef.current.getValue());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captcha) {
      setIsLoading(true);
      const calc_sep = new CalculateInsolIrrad();
      calc_sep
        .execute(
          latitude,
          longitude,
          altitude,
          azimuthAngle,
          elevationAngle,
          captcha
        )
        .then((res) => {
          const res_stat = res.status;
          res.json().then((resData) => {
            if (res_stat === 200) {
              setResult({ ...resData });
            } else {
              setToast({
                variant: "danger",
                autohide: false,
                is_show: true,
                body: resData.message,
              });
            }
          });
        })
        .catch(() => {
          setToast({
            variant: "danger",
            autohide: false,
            is_show: true,
            body: "Something wrong please try again later.",
          });
          resetForm();
        });
    } else {
      setToast({
        variant: "danger",
        autohide: false,
        is_show: true,
        body: "Please prove you're not a robot (captcha).",
      });
    }
  };

  const resetForm = () => {
    setLatitude("");
    setLongitude("");
    setAltitude("");
    setAzimuthAngle("");
    setElevationAngle("");
    setIsLoading(false);
    setResult({});
    setCaptcha("");
    recaptchaRef.current.reset();
  };

  return (
    <>
      {isEmptyObject(calcResult) ? (
        <Form
          id="sep-form"
          method="post"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-4">
                  <Form.Label>Latitude</Form.Label>
                  <Form.Control
                    aria-label="Latitude"
                    name="latitude"
                    aria-describedby="describe-latitude"
                    type="number"
                    id="latitude"
                    min={-90}
                    max={90}
                    step={0.0001}
                    value={latitude}
                    onChange={handleLatitudeChange}
                    disabled={isLoading}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-4">
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control
                    aria-label="Longitude"
                    name="longitude"
                    aria-describedby="describe-longitude"
                    type="number"
                    id="longitude"
                    min={-180}
                    max={180}
                    step={0.0001}
                    value={longitude}
                    onChange={handleLongitudeChange}
                    disabled={isLoading}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-4">
                  <Form.Label>Altitude (Km)</Form.Label>
                  <Form.Control
                    aria-label="Altitude"
                    name="altitude"
                    aria-describedby="describe-altitude"
                    type="number"
                    id="altitude"
                    min={0}
                    max={9}
                    step={0.001}
                    value={altitude}
                    onChange={handleAltitudeChange}
                    disabled={isLoading}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>Azimuth Angle</Form.Label>
                  <Form.Control
                    aria-label="Azimuth Angle"
                    name="azimuthAngle"
                    aria-describedby="describe-azimuth-angle"
                    type="number"
                    id="azimuthAngle"
                    min={0}
                    max={360}
                    step={0.0001}
                    value={azimuthAngle}
                    onChange={handleAzimuthAngleChange}
                    disabled={isLoading}
                    required
                  />
                  <Form.Text>
                    South:0&deg;, West:90&deg;, North:180&deg;, East:270&deg;
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6} className="ps-md-2">
                <Form.Group className="mb-4">
                  <Form.Label>Elevation Angle</Form.Label>
                  <Form.Control
                    aria-label="Elevation Angle"
                    name="elevationAngle"
                    aria-describedby="describe-elevation-angle"
                    type="number"
                    id="elevationAngle"
                    min={1}
                    max={90}
                    step={0.0001}
                    value={elevationAngle}
                    onChange={handleElevationAngleChange}
                    disabled={isLoading}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <div className="captcha-container">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="compact"
                    sitekey={CONFIG.RECAPTCHA_SITEKEY}
                    onChange={handleCaptchaChange}
                  />
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-center">
                <Button
                  type="submit"
                  variant="dark"
                  className="bg-gradient-dark mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      Calculating&nbsp;
                      <FontAwesomeIcon
                        icon={faSpinner}
                        className="fa-spin-pulse"
                      />
                    </>
                  ) : (
                    "Calculate"
                  )}
                </Button>
                {isLoading && (
                  <div className="text-sm">
                    Please be patience, this might take a while.
                    <br />
                    Getting data from external source
                    (https://power.larc.nasa.gov/).
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </Form>
      ) : (
        <SolarEnergyPotentialResult
          latitude={latitude}
          longitude={longitude}
          altitude={altitude}
          azimuthAngle={azimuthAngle}
          elevationAngle={elevationAngle}
          calcResult={calcResult}
        />
      )}

      <CustomToast
        {...toast}
        closeToast={() => {
          setToast(def_toast_val);
        }}
      >
        {toast.body}
      </CustomToast>
    </>
  );
};

export default SolarEnergyPotentialForm;
