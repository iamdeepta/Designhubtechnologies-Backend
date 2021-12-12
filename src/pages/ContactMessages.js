import React from "react";
import ContactMessage from "../components/ContactMessage";
import ContactMessageHeader from "../components/ContactMessageHeader";
import Header from "../components/Header";

const ContactMessages = () => {
  return (
    <>
      <Header />
      <ContactMessageHeader />
      <ContactMessage />
    </>
  );
};

export default ContactMessages;
