import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faAt, faBuilding } from "@fortawesome/free-solid-svg-icons";

import { SendMessage } from "../../../useCases/ContactUs.js";
import * as CONFIG from "../../../utilities/config.js";
import CustomToast from "../CustomToast.js";

const ContactUsForm = () => {
  const recaptchaRef = React.createRef();
  const def_toast_val = { is_show: false, body: "" };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [toast, setToast] = useState(def_toast_val);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleOrganizationChange = (e) => setOrganization(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleCaptchaChange = () => setCaptcha(recaptchaRef.current.getValue());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captcha) {
      const send_message = new SendMessage();
      send_message
        .execute(name, organization, email, message, captcha)
        .then((res) => {
          if (res.status === 201) {
            setToast({
              variant: "success",
              is_show: true,
              body: <><strong>Message sent.</strong><br/>Thank You! We'll get back to you as soon as possible.</>,
            });
            resetForm();
          } else {
            res.json().then((resData) => {
              setToast({
                variant: "danger",
                is_show: true,
                body: resData.message,
              });
            });
          }
        })
        .catch(() => {
          setToast({
            variant: "danger",
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
    setName("");
    setEmail("");
    setOrganization("");
    setMessage("");
    setCaptcha("");
    recaptchaRef.current.reset();
  };

  return (
    <>
      <Form
        id="contact-form"
        method="post"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Container>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label>Full name</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="describe-full-name">
                    <FontAwesomeIcon icon={faUser} className="fa-fw" />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="John Smith"
                    aria-label="Full Name"
                    name="name"
                    aria-describedby="describe-full-name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="ps-md-2">
              <Form.Group className="mb-4">
                <Form.Label>Organization</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="describe-organization">
                    <FontAwesomeIcon icon={faBuilding} className="fa-fw" />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="My Company Ltd."
                    name="organization"
                    aria-label="Organization"
                    aria-describedby="describe-organization"
                    type="text"
                    id="organization"
                    value={organization}
                    onChange={handleOrganizationChange}
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-4">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="describe-email">
                    <FontAwesomeIcon icon={faAt} className="fa-fw" />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="john.smith@email.com"
                    name="email"
                    aria-label="Email"
                    aria-describedby="describe-email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-4 mt-md-0 mt-4">
            <Form.Label>What can we help You?</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="message"
              placeholder="Typed your message here..."
              id="message"
              className="form-control"
              value={message}
              onChange={handleMessageChange}
              required
            />
          </Form.Group>
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
          <Row>
            <Col className="text-center">
              <Button
                type="submit"
                variant="dark"
                className="bg-gradient-dark mt-4"
              >
                Send Message
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
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

export default ContactUsForm;
