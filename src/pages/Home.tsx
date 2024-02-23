import { FC } from "react";
import "./Home.css";

const Home: FC = () => {
  return (
    <div className="home-content-container">
      <div className="home-header-container">
        <p className="cursive-header header-general"> aspiring </p>
        <p className="main-header header-general">
          FRONT END DEVELOPER
        </p>
        <p className="main-sub-header header-general"> WITH PROFICIENCY IN UI/UX </p>
      </div>
      <hr className="horizontal-line" />
    </div>
  );
};

export default Home;
