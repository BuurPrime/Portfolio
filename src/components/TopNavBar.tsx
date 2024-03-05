import React, { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopBarNav: FC = () => {

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>(location.pathname);

  
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
            className="menu-navigation-item"
          >
            WORK
          </Link>
        </div>
        <div className="group text-black transition-all duration-300 ease-in-out">
          <Link
            to="/portfolio/AboutMe"
            className="menu-navigation-item"
          >
            ABOUT ME
          </Link>
        </div>
        <div className="group text-black transition-all duration-300 ease-in-out">
          <Link
            to="/portfolio/Contaxt"
            className="menu-navigation-item"
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
            className="ml-4"
          />
        </a>
        <a href="https://github.com/BuurPrime">
          <img
            src={process.env.PUBLIC_URL + "/images/github.png"}
            alt=""
            width="20"
            height="20"
            className="ml-4"
          />
        </a>
      </div>
      <hr className="col-span-3" />
    </div>
  );
};

export default TopBarNav;
