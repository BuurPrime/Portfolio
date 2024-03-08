import { FC } from "react";
import { Link } from "react-router-dom";

const WorkFeed: FC = () => { 
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 grid-rows-3 mt-10 gap-20">
        <Link to="/portfolio/Work/StealthStories" >
        <div className="w-full h-auto overflow-hidden">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/stealthStories/stealthstoriesCard.png"
            }
            alt=""
            className="zoom-in"
          />
          <h3 className="pt-4"> STEALTHSTORIES </h3>
          <p>
            {" "}
            StealthStories is a platform where one can share stories anonymously
            - which secret can you share?{" "}
          </p>
        </div>
        </Link>

        <div className="w-full h-auto">
          <img
            src={process.env.PUBLIC_URL + "/images/voi/voiCard.png"}
            alt=""
          />
          <h3 className="pt-4"> VOI RADICAL REDESIGN </h3>
          <p className="work-description">
            {" "}
            voi is an app for renting e-scooters in the city. The redesign{" "}
          </p>
        </div>

        <div className="w-full h-auto">
          <img
            src={process.env.PUBLIC_URL + "/images/dhiGroup/dhiGroup.png"}
            alt=""
          />
          <h3 className="pt-4"> DHI Group Scenario Water Planning Tool </h3>
          <p className="work-description">
            {" "}
            In collaboration with DHI group, we created a platform for planning
            future water secnarios{" "}
          </p>
        </div>

        <div className="w-full h-auto">
          <img
            src={process.env.PUBLIC_URL + "/images/vicetone/VicetoneCard.png"}
            alt=""
          />
          <h3 className="pt-4"> Vicetone concert posters </h3>
          <p className="work-description">
            {" "}
            A creative project {" "}
          </p>
        </div>

        <div className="w-full h-auto">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/dhiGroup/dhiGroup.png"
            }
            alt=""
          />
          <h3 className="pt-4"> DHI Group Scenario Water Planning Tool </h3>
          <p className="work-description"> In collaboration with DHI group, we created a platform for planning future water secnarios </p>
        </div>

        <div className="w-full h-auto">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/dhiGroup/dhiGroup.png"
            }
            alt=""
          />
          <h3 className="pt-4"> DHI Group Scenario Water Planning Tool </h3>
          <p className="work-description"> In collaboration with DHI group, we created a platform for planning future water secnarios </p>
        </div>

      </div>
      <div className="flex flex-col items-center pt-20">
        <hr className=" w-60"></hr>
        <p className="pt-4 font-bold"> Thank you! </p>
      </div>
    </div>
  );
};

export default WorkFeed;
