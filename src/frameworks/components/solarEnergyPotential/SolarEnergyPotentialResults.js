import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { isEmptyArray } from "../../../utilities/validators.js";

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

const LOCALE_OPTIONS = {
  style: "decimal", // Other options: 'currency', 'percent', etc.
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const SolarEnergyPotentialResult = ({
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
        <td className="text-end px-2">
          {direct[i].toLocaleString(undefined, LOCALE_OPTIONS)}
        </td>
        <td className="text-end px-2">
          {diffuse[i].toLocaleString(undefined, LOCALE_OPTIONS)}
        </td>
        <td className="text-end px-2">
          {total[i].toLocaleString(undefined, LOCALE_OPTIONS)}
        </td>
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
        <td className="text-end px-2">{values[i].toLocaleString(undefined, LOCALE_OPTIONS)}</td>
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
        <td className="text-end px-2">
          {min[i].toLocaleString(undefined, LOCALE_OPTIONS)}
        </td>
        <td className="text-end px-2">
          {max[i].toLocaleString(undefined, LOCALE_OPTIONS)}
        </td>
      </tr>
    );
  }

  return (
    <>
      <Row className="mt-4 row">
        <Col>
          <h6>Air Temperatures - &deg;C</h6>
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

export default SolarEnergyPotentialResult;
