import React from "react";
import "./css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [servicesOpen1, setServicesOpen1] = useState(false);
  const [blogOpen1, setBlogOpen1] = useState(false);

  function closeSidebar() {
    let element = document.getElementById("sidebar_div");
    ReactDOM.findDOMNode(element).classList.remove("sidebar_opened");

    let element1 = document.getElementById("sidebar_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("sidebar_blur_bg_opened");

    //   let element1 = document.getElementById("body-overlay");
    //   ReactDOM.findDOMNode(element1).classList.remove("opened");
  }

  function servicesOpen() {
    setServicesOpen1(!servicesOpen1);
  }

  function blogOpen() {
    setBlogOpen1(!blogOpen1);
  }

  return (
    <>
      <div className="sidebar_div" id="sidebar_div">
        <ul className="sidebar_ul">
          <Link to="/home" className="sidebar_link">
            <li className="sidebar_li">Home</li>
          </Link>
          <hr />
          <Link to="/about" className="sidebar_link">
            <li className="sidebar_li">About</li>
          </Link>
          <hr />

          <li className="sidebar_li" onClick={() => servicesOpen()}>
            Services
            <FontAwesomeIcon
              icon={faChevronDown}
              className="sidebar_down_icon"
            />
            <ul
              className={
                servicesOpen1
                  ? "sidebar_sub_ul active_sidebar_sub_services_li"
                  : "sidebar_sub_ul"
              }
              onClick={() => closeSidebar()}
            >
              <Link to="/services" className="sidebar_link">
                <li>Services</li>
              </Link>
              <Link to="/services-details" className="sidebar_link">
                <li>Services Details</li>
              </Link>
            </ul>
          </li>
          <hr />
          <li className="sidebar_li" onClick={() => blogOpen()}>
            Blog
            <FontAwesomeIcon
              icon={faChevronDown}
              className="sidebar_down_icon"
            />
            <ul
              className={
                blogOpen1
                  ? "sidebar_sub_ul active_sidebar_sub_blog_li"
                  : "sidebar_sub_ul"
              }
              onClick={() => closeSidebar()}
            >
              <Link to="/blog" className="sidebar_link">
                <li>Blog</li>
              </Link>
              <Link to="/blog-details" className="sidebar_link">
                <li>Blog Details</li>
              </Link>
            </ul>
          </li>
          <hr />
          <Link to="/" className="sidebar_link">
            <li className="sidebar_li">Logout</li>
          </Link>
        </ul>
      </div>

      <div
        className="sidebar_blur_bg"
        id="sidebar_blur_bg"
        onClick={() => closeSidebar()}
      ></div>
    </>
  );
};

export default Sidebar;
