import React from "react";
import "./css/aboutHeader.css";
import { useState } from "react";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";

const AboutHeader = () => {
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
            <p>About</p>
          </div>
          <div className="card_row">
            <p onClick={() => section1_show()}>Section 1</p>
            <p onClick={() => section2_show()}>Section 2</p>
          </div>
        </div>
      </div>
      {section1 ? <AboutSection1 /> : ""}
      {section2 ? <AboutSection2 /> : ""}
    </>
  );
};

export default AboutHeader;
