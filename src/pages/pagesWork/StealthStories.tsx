import { FC } from "react";
import WorkInfo from "../../components/WorkInfo";

const StealthStories: FC = () => {

  return (
    <div className="mx-80 mt-24 bg-[#131226] rounded-3xl p-24">
      <div className="flex items-center justify-center pt-48">
        <img
          src={
            process.env.PUBLIC_URL + "/images/stealthStories/ssLogowhite.png"
          }
          alt=""
        />
      </div>

      <div className="flex flex-col items-center justify-center my-64">
        <p className="p-8 italic text-white text-lg">
          {" "}
          A safe place to share your secrets. What are yours?{" "}
        </p>
        <img
          src={process.env.PUBLIC_URL + "/images/stealthStories/ssFeed.png"}
          alt=""
          className="w-90vw max-w-[90%] border border-[#565581] rounded-xl"
        />
      </div>

      <div className="my-64">
        <p className="work-title text-white pb-8"> StealthStories </p>
        <WorkInfo
          madeToBe="A social media paltform for sharing secrets anonymously"
          madeWith="ReactJS, Figma, Parse databse"
          madeBy="My group and I at ITU"
          madeIn="One semester"
          textColor="text-white"
        />
      </div>

      <div className="flex text-white text-sm items-center">
        <div className="pr-16 text-lg">
          Much of the project revolved around understanding user needs, testing
          wireframes and prototypes, and iteratively developing the website ✨
          <br></br>
          <br></br>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/stealthStories/ssPost1.png"}
          alt=""
          className="w-80vw max-w-[80%] border border-[#565581] rounded-xl"
        />
      </div>

      <div className="flex text-white text-sm items-center pt-64">
        <img
          src={process.env.PUBLIC_URL + "/images/stealthStories/ssPost3.png"}
          alt=""
          className="border border-[#565581] rounded-xl"
        />
        <div className="px-24 text-lg">
          After conducting initial interviews, we developed user stories and
          proceeded to implement them in sprints using the Scrum agile approach
          ⚙️
        </div>
      </div>

      <div className="my-64">
        <img
          src={process.env.PUBLIC_URL + "/images/stealthStories/ssMockup.jpeg"}
          alt=""
          className="border border-[#565581] rounded-xl"
        />
      </div>

      <div className="flex space-x-10 text-white items-center">
        <p className="pl-16 text-lg">
          {" "}
          My main responsibilities for this project was designing the UI,
          conducting user testing with Figma prototypes, and creating the core
          functionalities for the feed in React 📋{" "}
        </p>

        <div>
          <img
            src={
              process.env.PUBLIC_URL + "/images/stealthStories/ssButtons.png"
            }
            alt=""
            className="border border-[#565581] rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col tiems-center justify-center text-white mt-64 space-y-12">
        <button> BACK TO TOP 🡱</button>
        <button> NEXT PROJECT <span className="hover:animate-bounce"> 🡲 </span></button>
      </div>
    </div>
  );
};

export default StealthStories;
