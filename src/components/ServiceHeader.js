import React from "react";
import "./css/aboutHeader.css";
import { useState } from "react";
import ServiceSection1 from "./ServiceSection1";
import ServiceSection2 from "./ServiceSection2";
import ServiceSection1Main from "./ServiceSection1Main";

const ServiceHeader = () => {
  const [section1, setSection1] = useState(false);
  const [section2, setSection2] = useState(false);

  function section1_show() {
    setSection1(true);
    setSection2(false);
  }

  function section2_show() {
    setSection2(true);
    setSection1(false);
  }
  return (
    <>
      <div className="container card about_header_card">
        <div className="card-body">
          <div className="row text-center about_text">
            <p>Service</p>
          </div>
          <div className="card_row">
            <p onClick={() => section1_show()}>Section 1</p>
            <p onClick={() => section2_show()}>Section 2</p>
          </div>
        </div>
      </div>
      {section1 ? (
        <>
          <ServiceSection1 />
          <br />
          <ServiceSection1Main />
        </>
      ) : (
        ""
      )}
      {section2 ? (
        <>
          <ServiceSection2 />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ServiceHeader;
