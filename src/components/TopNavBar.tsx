import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./TopNavBar.css";

const TopBarNav: FC = () => {
  return (
    <div className="top-nav-bar-container">
      <Link to="/portfolio" className="name-logo-top-left">
        SOFIE BUUR
      </Link>
      <hr className="horizontal-line" />
      <div className="navigation-menu">
        <Link to="/portfolio/Work" className="navigation-menu-item">
          WORK
        </Link>
        <Link to="/portfolio/AboutMe" className="navigation-menu-item">
          ABOUT ME
        </Link>
        <Link to="/portfolio/Contact" className="navigation-menu-item">
          CONTACT
        </Link>
      </div>
      <div className="platform-links">
        <a href="https://www.linkedin.com/in/sofie-buur-msc-softwaredesign/">
          <img
            src={process.env.PUBLIC_URL + "/images/linkedin.png"}
            alt=""
            width="20"
            height="20"
            className="platform-icon"
          />
        </a>
        <a href="https://github.com/BuurPrime">
          <img
            src={process.env.PUBLIC_URL + "/images/github.png"}
            alt=""
            width="20"
            height="20"
            className="platform-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default TopBarNav;
