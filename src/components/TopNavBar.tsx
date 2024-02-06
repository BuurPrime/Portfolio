import React, { FC } from "react";
import "./TopNavBar.css";

const TopBarNav: FC = () => {
  return (
    <div className="top-nav-bar-container">
      <p className="name-logo-top-left"> SOFIE BUUR </p>
      <hr className="horizontal-line"/>
      <div className="navigation-menu">
        <p className="navigation-menu-item"> WORK </p>
        <p className="navigation-menu-item"> ABOUT ME </p>
        <p className="navigation-menu-item"> CONTACT </p>
      </div>
      <div>
        <img src='../images/linkedin.png' alt="" width="20" height="20"/>
      </div>
    </div>
  );
};

export default TopBarNav;
