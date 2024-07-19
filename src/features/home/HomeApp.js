import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import WhiteWaveSVG from "../../frameworks/components/svg/WhiteWaveSVG.js";

import "./HomeApp.scss";
import AppSection from "../../frameworks/components/home/AppSection.js";
import ComingSoonSection from "../../frameworks/components/home/ComingSoonSection.js";

function HomeApp() {
  return (
    <>
      <AppSection />
      <ComingSoonSection />
    </>
  );
}

export default HomeApp;
