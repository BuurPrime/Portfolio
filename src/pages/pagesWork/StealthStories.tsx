import { FC } from "react";
import WorkInfo from "../../components/WorkInfo";

const StealthStories: FC = () => {
  return (
    <div className="mx-80 mt-24 bg-[#131226] rounded-3xl p-12 ">
      <div>
        <p className="work-title text-white pb-8"> StealthStories </p>
        <WorkInfo
          madeToBe="A social media paltform for sharing secrets anonymously"
          madeWith="React JS, Figma, Parse databse"
          madeBy="My group and I at ITU"
          madeIn="One semester"
          textColor="text-white"
        />
      </div>
      <div>
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/stealthStories/ssFeed.png"
          }
          alt=""
          className="w-full border border-[#565581] my-64"
        />
      </div>
    </div>
  );
};

export default StealthStories;
