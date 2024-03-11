import React, { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div className="mx-36 mt-48">
      <div className="grid grid-cols-5 grid-rows-3 gap-5">
        <div className="col-start-2">
          <h2> Hi there! </h2>
        </div>

        <div className="col-start-2 col-span-2">
          <p className="text-justify">
            {" "}
            Thank you for being here - I'm Sofie, an aspiring front-developer
            with proficiency in UI/UX. I engage in different kinds of creative
            projects from web design and apps to posters and stickers. I enjoy
            having fun in the creative process, and to explore different and
            alternative solutions to otherwise trivial problems.{" "}
          </p>
        </div>

        <div className="col-start-4">
        <img
            src={process.env.PUBLIC_URL + "/images/me.jpg"}
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
