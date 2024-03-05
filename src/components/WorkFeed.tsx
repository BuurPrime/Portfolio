import { FC } from "react";

const WorkFeed: FC = () => {
    return (
      <div className="home-content-container">
        <div className="home-header-container">
          <p className="cursive-header header-general"> aspiring </p>
          <p className="main-header header-general">
            FRONT END DEVELOPER
          </p>
          <p className="main-sub-header header-general"> WITH PROFICIENCY IN UI/UX </p>
          <img
              src={process.env.PUBLIC_URL + "/images/homePicMe.png"}
              alt=""
              className="home-page-me"
            />
        </div>
        <hr className="horizontal-line" />
      </div>
    );
  };

export default WorkFeed;
