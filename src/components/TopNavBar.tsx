import React, { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopBarNav: FC = () => {

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>(location.pathname);
  
  const handleLinkClick = (path: string) => {
    setCurrentPath(path);
  };
  
  return (
    <div className="grid grid-cols-3 gap-4 mx-36 my-6 ">
      <div>
        <Link to="/portfolio" className="col-span-1 font-bold tracking-wider ">
          SOFIE BUUR
        </Link>
      </div>
      <div className="flex align-center justify-center">
        <div className="group text-black transition-all duration-300 ease-in-out">
          <Link
            to="/portfolio/Work"
            className={currentPath === "/portfolio/Work" ? "menu-navigation-item-active" : "menu-navigation-item"}
            onClick={() => handleLinkClick("/portfolio/Work")}
          >
            WORK
          </Link>
        </div>
        <div className="group text-black transition-all duration-300 ease-in-out">
          <Link
            to="/portfolio/AboutMe"
            className={currentPath === "/portfolio/AboutMe" ? "menu-navigation-item-active" : "menu-navigation-item"}
            onClick={() => handleLinkClick("/portfolio/AboutMe")}
          >
            ABOUT ME
          </Link>
        </div>
        <div className="group text-black transition-all duration-300 ease-in-out">
          <Link
            to="/portfolio/Contact"
            className={currentPath === "/portfolio/Contact" ? "menu-navigation-item-active" : "menu-navigation-item"}
            onClick={() => handleLinkClick("/portfolio/Contact")}
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="flex justify-end">
        <a href="https://www.linkedin.com/in/sofie-buur-msc-softwaredesign/">
          <img
            src={process.env.PUBLIC_URL + "/images/linkedin.png"}
            alt=""
            width="20"
            height="20"
            className="ml-6"
          />
        </a>
        <a href="https://github.com/BuurPrime">
          <img
            src={process.env.PUBLIC_URL + "/images/github.png"}
            alt=""
            width="20"
            height="20"
            className="ml-6"
          />
        </a>
      </div>
      <hr className="col-span-3" />
    </div>
  );
};

export default TopBarNav;
