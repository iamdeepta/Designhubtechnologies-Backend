import React from "react";
import ContactDetail from "../components/ContactDetail";
import ContactDetailHeader from "../components/ContactDetailHeader";
import Header from "../components/Header";

const ContactDetails = () => {
  return (
    <>
      <Header />
      <ContactDetailHeader />
      <ContactDetail />
    </>
  );
};

export default ContactDetails;
