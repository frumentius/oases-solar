import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import CustomToast from "../CustomToast.js";

import { CalculateInsolIrrad } from "../../../useCases/SolarEnergyPotential.js";

import { isEmptyArray, isEmptyObject } from "../../../utilities/validators.js";
import * as CONFIG from "../../../utilities/config.js";

const MONTH_STRING_LONG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
                    min={0}
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
        <ResultTables
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

const ResultTables = ({
  latitude,
  longitude,
  altitude,
  azimuthAngle,
  elevationAngle,
  calcResult,
}) => {
  return (
    <Container className="pb-4">
      <dl className="row">
        <dt className="col-7 col-sm-4">Latitude:</dt>
        <dd className="col-5 col-sm-8">{latitude}</dd>

        <dt className="col-7 col-sm-4">Longitude:</dt>
        <dd className="col-5 col-sm-8">{longitude}</dd>

        <dt className="col-7 col-sm-4">Altitude:</dt>
        <dd className="col-5 col-sm-8">{altitude}</dd>

        <dt className="col-7 col-sm-4">Azimuth Angle:</dt>
        <dd className="col-5 col-sm-8">{azimuthAngle}</dd>

        <dt className="col-7 col-sm-4">Elevation Angle:</dt>
        <dd className="col-5 col-sm-8">{elevationAngle}</dd>
      </dl>
      {!isEmptyArray(calcResult.solar_insolation) &&
        !isEmptyArray(calcResult.solar_insolation_dir) &&
        !isEmptyArray(calcResult.solar_insolation_diff) && (
          <InsolationTable
            direct={calcResult.solar_insolation_dir}
            diffuse={calcResult.solar_insolation_diff}
            total={calcResult.solar_insolation}
          />
        )}
      {!isEmptyArray(calcResult.solar_irradiance) && (
        <IrradianceTable values={calcResult.solar_irradiance} />
      )}
      {!isEmptyArray(calcResult.min_air_temp) &&
        !isEmptyArray(calcResult.max_air_temp) && (
          <AirTempsTable
            min={calcResult.min_air_temp}
            max={calcResult.max_air_temp}
          />
        )}
    </Container>
  );
};

const InsolationTable = ({ direct, diffuse, total }) => {
  const row_elements = [];
  for (let i = 0; i < total.length; i++) {
    row_elements.push(
      <tr key={i}>
        <td className="text-sm font-weight-bold px-2">
          {MONTH_STRING_LONG[i]}
        </td>
        <td className="text-end px-2">{direct[i].toFixed(2)}</td>
        <td className="text-end px-2">{diffuse[i].toFixed(2)}</td>
        <td className="text-end px-2">{total[i].toFixed(2)}</td>
      </tr>
    );
  }

  return (
    <>
      <Row className="mt-4">
        <Col>
          <h6>
            Solar Insolation - kWh/(m<sup>2</sup> x d)
          </h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-responsive">
            <table className="mb-0 table">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-start text-sm font-weight-bolder opacity-7 px-2">
                    Month
                  </th>
                  <th className="text-end text-uppercase text-secondary text-sm font-weight-bolder opacity-7 px-2">
                    Direct
                  </th>
                  <th className="text-end text-uppercase text-secondary text-sm font-weight-bolder opacity-7 px-2">
                    Diffuse
                  </th>
                  <th className="text-end text-uppercase text-secondary text-sm font-weight-bolder opacity-7 px-2">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>{row_elements}</tbody>
            </table>
          </div>
          <small className="text-xs form-text text-muted">
            To calculate the monthly average of solar insolation and maximum
            solar irradiance we use the all sky insolation clearness index data,
            which were obtained from the NASA Langley Research Center (LaRC)
            POWER Project funded through the NASA Earth Science/Applied Science
            Program.&nbsp;
            <a
              href="https://power.larc.nasa.gov"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Go to source website
            </a>
            .
          </small>
        </Col>
      </Row>
    </>
  );
};

const IrradianceTable = ({ values }) => {
  const row_elements = [];
  for (let i = 0; i < values.length; i++) {
    row_elements.push(
      <tr key={i}>
        <td className="text-sm font-weight-bold px-2">
          {MONTH_STRING_LONG[i]}
        </td>
        <td className="text-end px-2">{values[i].toFixed(1)}</td>
      </tr>
    );
  }

  return (
    <>
      <Row className="mt-4 row">
        <Col>
          <h6>
            Solar Irradiance - W/m<sup>2</sup>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-responsive">
            <table className="mb-0 table">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-start text-sm font-weight-bolder opacity-7 px-2">
                    Month
                  </th>
                  <th className="text-end text-uppercase text-secondary text-sm font-weight-bolder opacity-7 px-2">
                    Irradiance
                  </th>
                </tr>
              </thead>
              <tbody>{row_elements}</tbody>
            </table>
          </div>
          <small className="text-xs form-text text-muted">
            To calculate the monthly average of solar insolation and maximum
            solar irradiance we use the all sky insolation clearness index data,
            which were obtained from the NASA Langley Research Center (LaRC)
            POWER Project funded through the NASA Earth Science/Applied Science
            Program.&nbsp;
            <a
              href="https://power.larc.nasa.gov"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Go to source website
            </a>
            .
          </small>
        </Col>
      </Row>
    </>
  );
};

const AirTempsTable = ({ min, max }) => {
  const row_elements = [];
  for (let i = 0; i < min.length; i++) {
    row_elements.push(
      <tr key={i}>
        <td className="text-sm font-weight-bold px-2">
          {MONTH_STRING_LONG[i]}
        </td>
        <td className="text-end px-2">{min[i].toFixed(2)}</td>
        <td className="text-end px-2">{max[i].toFixed(2)}</td>
      </tr>
    );
  }

  return (
    <>
      <Row className="mt-4 row">
        <Col>
          <h6>Air Temperatures - °C</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-responsive">
            <table className="mb-0 table">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-start text-sm font-weight-bolder opacity-7 px-2">
                    Month
                  </th>
                  <th className="text-end text-uppercase text-secondary text-sm font-weight-bolder opacity-7 px-2">
                    Minimum
                  </th>
                  <th className="text-end text-uppercase text-secondary text-sm font-weight-bolder opacity-7 px-2">
                    Maximum
                  </th>
                </tr>
              </thead>
              <tbody>{row_elements}</tbody>
            </table>
          </div>
          <small className="text-xs form-text text-muted">
            The max and min air temperature were obtained from the NASA Langley
            Research Center (LaRC) POWER Project funded through the NASA Earth
            Science/Applied Science Program.&nbsp;
            <a
              href="https://power.larc.nasa.gov"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Go to source website
            </a>
            .
          </small>
        </Col>
      </Row>
    </>
  );
};

export default SolarEnergyPotentialForm;
