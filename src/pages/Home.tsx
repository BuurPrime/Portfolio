import { FC } from "react";
import WorkFeed from "../components/WorkFeed";

const Home: FC = () => {
  return (
    <div className="mx-36">
      <div className="flex align-center py-28">
        <div>
          <p className="italic text-xl"> aspiring </p>
          <h1>
            FRONT-END <br /> DEVELOPER
          </h1>
          <p className="pt-4 pb-4 text-2xl w-[530px]">
            I strive to create user experiences that are either seamless and
            effortless, or fascinating and memorable.
          </p>
          <button
            className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 text-xs font-bold transition-colors duration-300 "
            onClick={() =>
              (window.location.href = "mailto:sofieamaliebuur@gmail.com")
            }
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex justify-between ">
        <p className="pt-4 font-semibold"> Selected Work </p>
        <p className="pt-4 font-semibold"> Discover 🡳 </p>
      </div>
      <WorkFeed />
    </div>
  );
};

export default Home;
