import React from "react";
import "./css/aboutHeader.css";
import { useState } from "react";
import ServicesDetailsSection1 from "./ServicesDetailsSection1";
import ServicesDetailsSection2 from "./ServicesDetailsSection2";
import ServicesDetailsSection3 from "./ServicesDetailsSection3";
import ServicesDetailsSection4 from "./ServicesDetailsSection4";
import ServicesDetailsSection5 from "./ServicesDetailsSection5";

const ServicesDetailsHeader = () => {
  const [section1, setSection1] = useState(false);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);
  const [section4, setSection4] = useState(false);
  const [section5, setSection5] = useState(false);

  function section1_show() {
    setSection1(true);
    setSection2(false);
    setSection3(false);
    setSection4(false);
    setSection5(false);
  }

  function section2_show() {
    setSection2(true);
    setSection1(false);
    setSection3(false);
    setSection4(false);
    setSection5(false);
  }

  function section3_show() {
    setSection3(true);
    setSection1(false);
    setSection2(false);
    setSection4(false);
    setSection5(false);
  }

  function section4_show() {
    setSection4(true);
    setSection1(false);
    setSection3(false);
    setSection2(false);
    setSection5(false);
  }

  function section5_show() {
    setSection5(true);
    setSection1(false);
    setSection3(false);
    setSection4(false);
    setSection2(false);
  }
  return (
    <>
      <div className="container card about_header_card">
        <div className="card-body">
          <div className="row text-center about_text">
            <p>Services Details</p>
          </div>
          <div className="card_row">
            <p onClick={() => section1_show()}>Section 1</p>
            <p onClick={() => section2_show()}>Section 2</p>
            <p onClick={() => section3_show()}>Section 3</p>
            <p onClick={() => section4_show()}>Section 4</p>
            <p onClick={() => section5_show()}>Section 5</p>
          </div>
        </div>
      </div>
      {section1 ? <ServicesDetailsSection1 /> : ""}
      {section2 ? <ServicesDetailsSection2 /> : ""}
      {section3 ? <ServicesDetailsSection3 /> : ""}
      {section4 ? <ServicesDetailsSection4 /> : ""}
      {section5 ? <ServicesDetailsSection5 /> : ""}
    </>
  );
};

export default ServicesDetailsHeader;
