import React from "react";

import PageMainCard from "../../frameworks/components/PageMainCard";
import ContactUsForm from "../../frameworks/components/contactUs/ContactUsForm";

const ContactUsApp = () => {
  return (
    <>
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
