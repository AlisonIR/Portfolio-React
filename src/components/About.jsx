import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#f0ecf0] text-[#63283f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 text-[#8892b0] border-[#f17667]">
            About
          </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Alison, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I'm a front-end developer, who is willing to continuosly grow while staying current with the latest technologies.
              I would love to work for a team that is striving to consistently move forward.
        
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
