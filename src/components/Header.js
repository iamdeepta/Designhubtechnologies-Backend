import React from "react";
import "./css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faChevronDown,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const [openService, setOpenService] = useState(true);
  const [openBlog, setOpenBlog] = useState(true);

  //   function closeSidebar() {
  //     let element = document.getElementById("sidebar__area");
  //     ReactDOM.findDOMNode(element).classList.remove("sidebar-opened");

  //     let element1 = document.getElementById("body-overlay");
  //     ReactDOM.findDOMNode(element1).classList.remove("opened");
  //   }

  function openSidebar() {
    let element = document.getElementById("sidebar_div");
    ReactDOM.findDOMNode(element).classList.add("sidebar_opened");

    let element1 = document.getElementById("sidebar_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("sidebar_blur_bg_opened");

    //   let element1 = document.getElementById("body-overlay");
    //   ReactDOM.findDOMNode(element1).classList.remove("opened");
  }

  function servicesToggle() {
    setOpenService(!openService);
    setOpenBlog(true);
  }

  function blogToggle() {
    setOpenService(true);
    setOpenBlog(!openBlog);
  }

  return (
    <>
      <div className="header_div">
        <div className="header_inside_div">
          <p className="header_logo">Designhub Technologies</p>
          <div className="header_list_div">
            <p>
              <Link to="/" className="header_home_text">
                Home
              </Link>
            </p>
            <p>
              <Link to="/about" className="header_home_text">
                About
              </Link>
            </p>
            <div>
              <p
                className="header_services_menu"
                id="header_services_menu"
                onClick={() => servicesToggle()}
              >
                Services{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="services_dropdown_icon"
                />
              </p>
              <div
                className={
                  openService
                    ? "inactive_header_sub_services_div"
                    : "active_header_sub_services_div"
                }
                id="header_sub_services_div"
              >
                <Link to="/services" className="sub_link">
                  <p>Services</p>
                </Link>
                <Link to="/services-details" className="sub_link">
                  <p>Services Details</p>
                </Link>
              </div>
            </div>
            <div>
              <p
                className="header_services_menu"
                id="header_blog_menu"
                onClick={() => blogToggle()}
              >
                Blog{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="blog_dropdown_icon"
                />
              </p>
              <div
                className={
                  openBlog
                    ? "inactive_header_sub_blog_div"
                    : "active_header_sub_blog_div"
                }
                id="header_sub_blog_div"
              >
                <Link to="/blog" className="sub_link">
                  <p>Blog</p>
                </Link>
                <Link to="/blog-details" className="sub_link">
                  <p>Blog Details</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="header_logout_div">
            <a href=".">
              <p className="header_logout_text">
                <FontAwesomeIcon icon={faSignOutAlt} className="header_icon" />
                Logout
              </p>
            </a>
          </div>
          <div className="header_hamburger_div" onClick={() => openSidebar()}>
            <Link to="#">
              <FontAwesomeIcon
                icon={faHamburger}
                className="header_hamburger_icon"
              />
            </Link>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Header;
