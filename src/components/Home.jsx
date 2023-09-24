import React from "react";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#f0ecf0]">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#f17667 ]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#b04e55]">
          Roa Alison
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"></p>

        
        <div >
        <Link to="work" smooth={true} duration={500}>
          <button className ="bg-[#f17667] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b04e55] hover:border-[#b04e55]">
         
              View Work 
              </button>   
            </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
