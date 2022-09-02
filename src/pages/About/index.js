import React from "react";

import MainAbout from "./mainAbout/MainAbout";

const About = () => {
  return (
    <>
      <div className="relative w-full ">
        <div className="max-w space-y-10">
          <div className="text-center">
            <div className="">
              <MainAbout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
