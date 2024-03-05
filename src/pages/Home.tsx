import { FC } from "react";
import WorkFeed from "../components/WorkFeed";

const Home: FC = () => {
  return (
    <div className=" mx-36">
      <div className="flex align-center py-40">
        <div>
          <p className="italic text-xl"> aspiring </p>
          <h1>
            FRONT-END <br /> DEVELOPER
          </h1>
        </div>
        <div>
          <p className="pl-20 pt-20"> Hello! Maybe some text goes here? idk </p>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex justify-between ">
        <p className="pt-4 font-semibold"> Selected Work </p>
        <p className="pt-4 font-semibold"> Discover 🡳 </p>
      </div>
      <WorkFeed/>
    </div>
  );
};

export default Home;
