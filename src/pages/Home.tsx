import { FC } from "react";
import "./Home.css";

const Home: FC = () => {
  return (
    <div className="home-content-container">
      <div className="home-header-container">
        <div className="headers">
        <p className="cursive-header header-general"> aspiring </p>
        <p className="main-header header-general">
          FRONT END DEVELOPER
        </p>
        <p className="main-sub-header header-general"> WITH PROFICIENCY IN UI/UX </p>
        </div>
        <div className="image-container-me">
          </div>
      </div>
      <hr className="horizontal-line" />
    </div>
  );
};

export default Home;
