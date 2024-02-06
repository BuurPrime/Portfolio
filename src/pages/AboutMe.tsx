import React, { FC } from "react";
import "./AboutMe.css";

const AboutMe: FC = () => {
  return (
    <>
      <div className="about-me-main-content">
        <div className="text-section">
        <h1 className="about-me-hi"> Hi there! </h1>
        <p className="about-me-text">
          Welcome to my corner of the digital universe! I'm Sofie, a passionate
          web designer and creative enthusiast dedicated to crafting meaningful
          and memorable online experiences. With a blend of technical expertise
          and boundless creativity, I thrive on transforming ideas into visually
          stunning and user-friendly websites. My journey into the realm of web
          design began with a curiosity for how the internet connects people and
          ideas across the globe.
          <br />
          <br />
          Over the years, I've honed my skills in various aspects of design,
          from typography and color theory to responsive layout and user
          experience optimization. Each project is an opportunity to push the
          boundaries of what's possible, experimenting with innovative design
          trends while ensuring seamless functionality and accessibility. But
          beyond pixels and code, my true passion lies in storytelling. I
          believe that every website has a narrative to share, whether it's a
          brand's origin story or a user's journey through a digital product. By
          weaving together compelling visuals, intuitive navigation, and
          engaging content, I strive to create immersive digital experiences
          that resonate with audiences and leave a lasting impression.
          <br />
          <br />
          I invite you to explore my portfolio and discover how we can
          collaborate to create something truly extraordinary. Let's embark on a
          journey of creativity and innovation together.
          <br />
          <br />
          Warm regards, Sofie
        </p>
        <div className="signature-image">
          <img
            src={process.env.PUBLIC_URL + "/images/underskrift-02.png"}
            alt=""
            className="image-signature"
          />
        </div>
        </div>
        <div className="image-me-section">
          <div className="image-me-container">
            <img
              src={process.env.PUBLIC_URL + "/images/me.jpg"}
              alt=""
              className="image-me"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
