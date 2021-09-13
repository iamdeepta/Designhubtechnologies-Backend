import React from "react";
import "./css/aboutHeader.css";
import { useState } from "react";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";
import HomeSection6 from "./HomeSection6";
import HomeSection7 from "./HomeSection7";
import HomeSection8 from "./HomeSection8";

const HomeHeader = () => {
  const [section1, setSection1] = useState(false);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);
  const [section4, setSection4] = useState(false);
  const [section5, setSection5] = useState(false);
  const [section6, setSection6] = useState(false);
  const [section7, setSection7] = useState(false);
  const [section8, setSection8] = useState(false);

  function section1_show() {
    setSection1(true);
    setSection2(false);
    setSection3(false);
    setSection4(false);
    setSection5(false);
    setSection6(false);
    setSection7(false);
    setSection8(false);
  }

  function section2_show() {
    setSection2(true);
    setSection1(false);
    setSection3(false);
    setSection4(false);
    setSection5(false);
    setSection6(false);
    setSection7(false);
    setSection8(false);
  }

  function section3_show() {
    setSection3(true);
    setSection1(false);
    setSection2(false);
    setSection4(false);
    setSection5(false);
    setSection6(false);
    setSection7(false);
    setSection8(false);
  }

  function section4_show() {
    setSection4(true);
    setSection1(false);
    setSection3(false);
    setSection2(false);
    setSection5(false);
    setSection6(false);
    setSection7(false);
    setSection8(false);
  }

  function section5_show() {
    setSection5(true);
    setSection1(false);
    setSection3(false);
    setSection4(false);
    setSection2(false);
    setSection6(false);
    setSection7(false);
    setSection8(false);
  }

  function section6_show() {
    setSection6(true);
    setSection1(false);
    setSection3(false);
    setSection4(false);
    setSection5(false);
    setSection2(false);
    setSection7(false);
    setSection8(false);
  }

  function section7_show() {
    setSection7(true);
    setSection1(false);
    setSection3(false);
    setSection4(false);
    setSection5(false);
    setSection6(false);
    setSection2(false);
    setSection8(false);
  }

  function section8_show() {
    setSection8(true);
    setSection1(false);
    setSection3(false);
    setSection4(false);
    setSection5(false);
    setSection6(false);
    setSection7(false);
    setSection2(false);
  }
  return (
    <>
      <div className="container card about_header_card">
        <div className="card-body">
          <div className="row text-center about_text">
            <p>Home</p>
          </div>
          <div className="card_row">
            <p onClick={() => section1_show()}>Section 1</p>
            <p onClick={() => section2_show()}>Section 2</p>
            <p onClick={() => section3_show()}>Section 3</p>
            <p onClick={() => section4_show()}>Section 4</p>
            <p onClick={() => section5_show()}>Section 5</p>
            <p onClick={() => section6_show()}>Section 6</p>
            <p onClick={() => section7_show()}>Section 7</p>
            <p onClick={() => section8_show()}>Section 8</p>
          </div>
        </div>
      </div>
      {section1 ? <HomeSection1 /> : ""}
      {section2 ? <HomeSection2 /> : ""}
      {section3 ? <HomeSection3 /> : ""}
      {section4 ? <HomeSection4 /> : ""}
      {section5 ? <HomeSection5 /> : ""}
      {section6 ? <HomeSection6 /> : ""}
      {section7 ? <HomeSection7 /> : ""}
      {section8 ? <HomeSection8 /> : ""}
    </>
  );
};

export default HomeHeader;
