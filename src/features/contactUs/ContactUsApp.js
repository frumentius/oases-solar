import React from "react";
import { Helmet } from "react-helmet";

import * as CONFIG from "../../utilities/config.js";

import PageMainCard from "../../frameworks/components/PageMainCard";
import ContactUsForm from "../../frameworks/components/contactUs/ContactUsForm";

const ContactUsApp = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | {CONFIG.APP_NAME}</title>
      </Helmet>
      <PageMainCard
        colorClass="bg-gradient-dark"
        title="Contact Us"
        subTitle="info@oases-solar.com"
      >
        <ContactUsForm />
      </PageMainCard>
    </>
  );
};

export default ContactUsApp;
