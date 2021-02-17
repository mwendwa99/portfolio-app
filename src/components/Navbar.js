import React from "react";
import mylogo from "../mylogo.png";

// REACT SCROLLER
// import * as Scroll from "react-scroll";
// import {
//   Link,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";

//REACT FONT AWESOME!
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // scroll to Home
  const home = () => {
    var Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;

    scroll.scrollToTop();
  };

  // scroll to about
  const about = () => {
    var Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;

    scroll.scrollTo(800, {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: "ContainerElementID",
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={mylogo} alt="mylogo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={home}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={about}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CV
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
